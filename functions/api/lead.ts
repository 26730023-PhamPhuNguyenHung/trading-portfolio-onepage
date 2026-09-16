interface Env {
  DB: D1Database;
  NOTIFICATION_EMAIL?: string;
  RESEND_API_KEY?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

interface LeadRequest {
  form_type: string;
  name?: string;
  email?: string;
  contact?: string;
  market?: string;
  need?: string;
  timeframe?: string;
  idea?: string;
  entry_concept?: string;
  risk_model?: string;
  current_stage?: string;
  platform?: string;
  preferred_contact?: string;
  notes?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // CORS Preflight / Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const data = (await request.json()) as LeadRequest;

    if (!data.form_type) {
      return new Response(
        JSON.stringify({ success: false, error: 'form_type is required' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const recipient = env.NOTIFICATION_EMAIL || 'hungphamphunguyen@gmail.com';
    const clientIp = request.headers.get('cf-connecting-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // 1. SAVE TO CLOUDFLARE D1 DATABASE
    let insertedId: number | null = null;
    if (env.DB) {
      const stmt = env.DB.prepare(`
        INSERT INTO leads (
          form_type, name, email, contact, market, need, timeframe,
          idea, entry_concept, risk_model, current_stage, platform,
          preferred_contact, notes, ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      const result = await stmt
        .bind(
          data.form_type,
          data.name || null,
          data.email || null,
          data.contact || null,
          data.market || null,
          data.need || null,
          data.timeframe || null,
          data.idea || null,
          data.entry_concept || null,
          data.risk_model || null,
          data.current_stage || null,
          data.platform || null,
          data.preferred_contact || null,
          data.notes || null,
          clientIp,
          userAgent
        )
        .run();

      insertedId = result.meta.last_row_id ?? null;
    }

    // 2. DISPATCH EMAIL NOTIFICATION
    let emailSent = false;
    let emailMethod = 'none';

    const emailSubject = `[Quant Portfolio Lead] ${data.form_type.toUpperCase()} - ${data.market || 'New Submission'}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background: #051013; color: #f4f7f7; padding: 24px; border-radius: 12px; border: 1px solid #13373d;">
        <h2 style="color: #31e2da; border-bottom: 2px solid #31e2da; padding-bottom: 8px;">
          🚀 New Lead Received from Quant Portfolio
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px; color: #f4f7f7;">
          <tr><td style="padding: 8px; color: #9cb0b4; width: 180px;"><strong>Form Type:</strong></td><td style="padding: 8px; font-weight: bold; color: #83fff8;">${data.form_type}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Contact / Email / Tg:</strong></td><td style="padding: 8px; font-weight: bold;">${data.contact || data.email || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Market:</strong></td><td style="padding: 8px;">${data.market || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Need:</strong></td><td style="padding: 8px;">${data.need || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Timeframe:</strong></td><td style="padding: 8px;">${data.timeframe || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Trading Idea:</strong></td><td style="padding: 8px; background: #07191d; border-radius: 6px;">${data.idea || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Entry Concept:</strong></td><td style="padding: 8px;">${data.entry_concept || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Risk Model:</strong></td><td style="padding: 8px;">${data.risk_model || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Current Stage:</strong></td><td style="padding: 8px;">${data.current_stage || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>Platform:</strong></td><td style="padding: 8px;">${data.platform || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; color: #9cb0b4;"><strong>IP & User Agent:</strong></td><td style="padding: 8px; font-size: 12px; color: #6d858b;">${clientIp} | ${userAgent}</td></tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #6d858b; text-align: center;">
          Sent from trading.phamphunguyenhung.com backend pipeline.
        </p>
      </div>
    `;

    // Attempt A: Resend API if API Key is configured
    if (env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Quant Portfolio <notifications@phamphunguyenhung.com>',
            to: [recipient],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          emailMethod = 'resend';
        }
      } catch (err) {
        console.error('Resend delivery failed:', err);
      }
    }

    // Attempt B: MailChannels integration for Cloudflare Workers
    if (!emailSent) {
      try {
        const mailChannelsRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: recipient, name: 'Hung Pham Phu Nguyen' }],
              },
            ],
            from: {
              email: 'notifications@trading.phamphunguyenhung.com',
              name: 'Quant Portfolio Inbound',
            },
            subject: emailSubject,
            content: [
              {
                type: 'text/html',
                value: emailHtml,
              },
            ],
          }),
        });

        if (mailChannelsRes.ok) {
          emailSent = true;
          emailMethod = 'mailchannels';
        }
      } catch (err) {
        console.error('MailChannels attempt failed:', err);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead recorded successfully',
        id: insertedId,
        email_dispatched: emailSent,
        email_method: emailMethod,
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error('Lead processing error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error?.message || 'Internal Server Error',
      }),
      { status: 500, headers: corsHeaders }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
