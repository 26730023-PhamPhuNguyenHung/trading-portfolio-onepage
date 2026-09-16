import React, { useState } from 'react';
import {
  FileText,
  TrendingUp,
  Sliders,
  Users,
  ArrowRight,
  Calendar,
  Lock,
  CheckCircle2,
  Globe2,
  Sparkles
} from 'lucide-react';

interface FormData {
  market: string;
  hypothesis: string;
  need: string;
  stage: string;
  platform: string;
  contactMethod: string;
  contactValue: string;
}

const INITIAL_FORM: FormData = {
  market: '',
  hypothesis: '',
  need: '',
  stage: '',
  platform: '',
  contactMethod: 'email',
  contactValue: ''
};

export const Section10_FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to backend / webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      data-section="final-cta"
      className="relative py-24 sm:py-32 bg-[#051013] text-[#f4f7f7] overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      {/* Background Decorative Candlesticks & Quant Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Mountain/Depth gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#020708] via-[#051317]/80 to-transparent" />

        {/* Ambient radial glow highlights */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.07] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-teal-400/[0.05] rounded-full blur-[130px]" />

        {/* Subtle Candlestick Art in Center Background */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/4 w-[900px] h-[480px] opacity-25"
          viewBox="0 0 900 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trend line */}
          <path
            d="M 50 380 Q 200 370 340 310 T 520 220 T 680 140 T 840 80"
            stroke="#31e2da"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* Candlesticks bars */}
          {/* Bearish candles */}
          <line x1="120" y1="360" x2="120" y2="400" stroke="#f3a52e" strokeWidth="1.5" />
          <rect x="114" y="370" width="12" height="20" rx="1.5" fill="#f3a52e" opacity="0.6" />

          <line x1="220" y1="340" x2="220" y2="390" stroke="#f3a52e" strokeWidth="1.5" />
          <rect x="214" y="352" width="12" height="24" rx="1.5" fill="#f3a52e" opacity="0.6" />

          {/* Bullish candles */}
          <line x1="280" y1="310" x2="280" y2="360" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="274" y="320" width="12" height="28" rx="1.5" fill="#31e2da" opacity="0.75" />

          <line x1="340" y1="270" x2="340" y2="330" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="334" y="280" width="12" height="36" rx="1.5" fill="#31e2da" opacity="0.8" />

          <line x1="410" y1="250" x2="410" y2="310" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="404" y="260" width="12" height="32" rx="1.5" fill="#31e2da" opacity="0.85" />

          <line x1="480" y1="200" x2="480" y2="280" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="474" y="215" width="12" height="48" rx="1.5" fill="#31e2da" opacity="0.9" />

          <line x1="550" y1="160" x2="550" y2="230" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="544" y="175" width="12" height="42" rx="1.5" fill="#31e2da" opacity="0.9" />

          <line x1="620" y1="120" x2="620" y2="190" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="614" y="135" width="12" height="40" rx="1.5" fill="#31e2da" opacity="0.95" />

          <line x1="700" y1="90" x2="700" y2="150" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="694" y="100" width="12" height="34" rx="1.5" fill="#31e2da" />

          <line x1="780" y1="50" x2="780" y2="110" stroke="#31e2da" strokeWidth="1.5" />
          <rect x="774" y="60" width="12" height="36" rx="1.5" fill="#31e2da" />
        </svg>

        {/* Watermark Right: DISCIPLINE / DATA / BETTER DECISIONS */}
        <div className="absolute top-16 right-8 sm:right-16 text-right font-mono text-[10px] sm:text-xs tracking-[0.28em] text-zinc-600/60 leading-relaxed uppercase hidden md:block">
          <div>DISCIPLINE</div>
          <div>DATA</div>
          <div>BETTER DECISIONS</div>
          <div className="w-8 h-[1px] bg-zinc-700/60 ml-auto my-3" />
        </div>

        {/* Watermark Lower Right: GLOBAL MARKETS */}
        <div className="absolute bottom-32 right-8 sm:right-16 text-right font-mono text-[10px] sm:text-xs tracking-[0.26em] text-zinc-600/50 leading-relaxed uppercase hidden lg:block">
          <Globe2 className="w-16 h-16 text-cyan-400/10 mb-3 ml-auto" strokeWidth={1} />
          <div>GLOBAL</div>
          <div>MARKETS</div>
          <div>SYSTEMATIC</div>
          <div>OPPORTUNITIES</div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT COLUMN: Headlines & Commitments & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10 lg:space-y-12">
            {/* Tagline & Main Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#31e2da] shadow-[0_0_8px_#31e2da]" />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-zinc-400">
                  LET&apos;S BUILD TOGETHER
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-white uppercase leading-[1.08]">
                HAVE A STRATEGY <br />
                YOU WANT{' '}
                <span className="text-[#31e2da] text-cyan-glow">
                  TESTED?
                </span>
              </h2>

              <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                Send me the idea. I&apos;ll turn it into a research specification before any
                implementation begins.
              </p>
            </div>

            {/* 4 Service Commitments with Process Stepper */}
            <div className="relative flex flex-col sm:flex-row items-start gap-8 pt-2">
              {/* Commitments 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                {/* 1. From idea to specification */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[#31e2da] group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(49,226,218,0.2)] transition-all shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      From idea to specification
                    </h4>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Clear requirements and logic design
                    </p>
                  </div>
                </div>

                {/* 2. Evidence-first approach */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[#31e2da] group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(49,226,218,0.2)] transition-all shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      Evidence-first approach
                    </h4>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Real data, realistic assumptions
                    </p>
                  </div>
                </div>

                {/* 3. Transparent process */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[#31e2da] group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(49,226,218,0.2)] transition-all shrink-0">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      Transparent process
                    </h4>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      You&apos;ll know exactly what happens next
                    </p>
                  </div>
                </div>

                {/* 4. Built for serious traders */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[#31e2da] group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(49,226,218,0.2)] transition-all shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      Built for serious traders
                    </h4>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Individuals, funds and research teams
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Quant Pipeline Sequence (from reference UI) */}
              <div className="hidden xl:flex flex-col gap-1.5 text-[10px] font-mono tracking-widest text-zinc-600 uppercase border-l border-zinc-800/80 pl-4 py-1 select-none">
                <span className="text-cyan-400/80">IDEA</span>
                <span>RESEARCH</span>
                <span>SPECIFY</span>
                <span>BACKTEST</span>
                <span>OPTIMIZE</span>
                <span>DEPLOY</span>
              </div>
            </div>

            {/* Quote Section */}
            <div className="pt-4 border-t border-zinc-800/60 max-w-lg">
              <blockquote className="text-zinc-300 italic text-base sm:text-lg font-serif leading-relaxed">
                &ldquo;Ideas are common. Disciplined execution makes the difference.&rdquo;
              </blockquote>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-zinc-600" />
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-semibold">
                  HUNG
                </span>
                <span className="text-zinc-600 text-xs">&bull;</span>
                <span className="text-xs text-zinc-500">Founder & Systematic Trader</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Intake Form Card */}
          <div className="lg:col-span-5 relative">
            {/* Candle Status Pill Header (from reference image) */}
            <div className="hidden sm:flex items-center gap-2 absolute -top-8 right-6 text-xs font-mono text-zinc-400 z-10">
              <span className="text-cyan-400 font-bold">XAUUSD +12.4%</span>
              <span className="text-zinc-500 text-[11px]">(WFR)</span>
              <span className="w-2 h-2 rounded-full bg-[#31e2da] animate-pulse ml-0.5" />
            </div>

            {/* Form Glass Container */}
            <div className="relative rounded-[28px] border border-[#31e2da]/35 bg-[#061418]/92 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_50px_rgba(49,226,218,0.12)] transition-all">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Form Title & Subtitle */}
              <div className="space-y-1.5 mb-7 relative z-10">
                <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight">
                  Tell me about your idea
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  I&apos;ll get back to you with next steps and a proposed research plan.
                </p>
              </div>

              {submitted ? (
                /* Success View after submission */
                <div className="py-12 px-4 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400 text-cyan-300 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(49,226,218,0.35)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Strategy Submitted!</h4>
                    <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for submitting. I will analyze your strategy hypothesis and send a
                      structured research specification to your contact shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/40 text-xs font-mono uppercase tracking-wider text-cyan-300 hover:bg-cyan-950/40 transition-all cursor-pointer"
                  >
                    Submit another idea
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  {/* Field 1: Market */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Market
                    </label>
                    <select
                      value={formData.market}
                      onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none focus:ring-1 focus:ring-[#31e2da] text-sm text-white transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-500 bg-[#061418]">
                        Select market(s)
                      </option>
                      <option value="XAUUSD" className="bg-[#061418]">
                        XAUUSD (Gold)
                      </option>
                      <option value="Forex" className="bg-[#061418]">
                        Forex (EURUSD, GBPUSD, JPY pairs)
                      </option>
                      <option value="Crypto" className="bg-[#061418]">
                        Crypto (BTC, ETH, Altcoins)
                      </option>
                      <option value="Indices" className="bg-[#061418]">
                        Indices (US30, NAS100, SPX)
                      </option>
                      <option value="Futures" className="bg-[#061418]">
                        Futures & Commodities
                      </option>
                      <option value="Multi-Asset" className="bg-[#061418]">
                        Multi-Asset Portfolio
                      </option>
                    </select>
                  </div>

                  {/* Field 2: Strategy / Hypothesis */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Strategy / Hypothesis
                    </label>
                    <textarea
                      rows={3}
                      value={formData.hypothesis}
                      onChange={(e) => setFormData({ ...formData, hypothesis: e.target.value })}
                      required
                      placeholder="e.g. moving average breakout, mean reversion, order flow imbalance..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none focus:ring-1 focus:ring-[#31e2da] text-sm text-white placeholder-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Field 3: What do you need? */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      What do you need?
                    </label>
                    <select
                      value={formData.need}
                      onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none focus:ring-1 focus:ring-[#31e2da] text-sm text-white transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-500 bg-[#061418]">
                        Select what you need
                      </option>
                      <option value="Research & Specification" className="bg-[#061418]">
                        Strategy Research & Formal Specification
                      </option>
                      <option value="Backtest & Stress Test" className="bg-[#061418]">
                        Full Multi-Year Backtest & Stress Test
                      </option>
                      <option value="EA Automation" className="bg-[#061418]">
                        Full Automation (EA / Algorithmic Bot)
                      </option>
                      <option value="Optimization & Validation" className="bg-[#061418]">
                        Optimization & Monte Carlo Validation
                      </option>
                      <option value="Risk Architecture" className="bg-[#061418]">
                        Risk Management & Drawdown Architecture
                      </option>
                    </select>
                  </div>

                  {/* Field 4: Current stage */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Current stage
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none focus:ring-1 focus:ring-[#31e2da] text-sm text-white transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-500 bg-[#061418]">
                        Select current stage
                      </option>
                      <option value="Just an idea" className="bg-[#061418]">
                        Just an idea / raw hypothesis
                      </option>
                      <option value="Tested manually" className="bg-[#061418]">
                        Tested manually with positive results
                      </option>
                      <option value="Discretionary system" className="bg-[#061418]">
                        Profitable manual system seeking systematic code
                      </option>
                      <option value="Needs optimization" className="bg-[#061418]">
                        Existing automated bot needing fix / optimization
                      </option>
                    </select>
                  </div>

                  {/* Field 5: Platform */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Platform
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none focus:ring-1 focus:ring-[#31e2da] text-sm text-white transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-500 bg-[#061418]">
                        Select platform
                      </option>
                      <option value="MetaTrader 5 / MQL5" className="bg-[#061418]">
                        MetaTrader 5 / MQL5
                      </option>
                      <option value="Python" className="bg-[#061418]">
                        Python (DuckDB, pandas, Backtrader, VectorBT)
                      </option>
                      <option value="TradingView Pine" className="bg-[#061418]">
                        TradingView (Pine Script v5/v6)
                      </option>
                      <option value="MetaTrader 4 / MQL4" className="bg-[#061418]">
                        MetaTrader 4 / MQL4
                      </option>
                      <option value="Other / Custom API" className="bg-[#061418]">
                        Other / Custom Execution API
                      </option>
                    </select>
                  </div>

                  {/* Field 6: Preferred contact & details */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Preferred contact
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <select
                        value={formData.contactMethod}
                        onChange={(e) =>
                          setFormData({ ...formData, contactMethod: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none text-sm text-white cursor-pointer"
                      >
                        <option value="email" className="bg-[#061418]">
                          Email (recommended)
                        </option>
                        <option value="telegram" className="bg-[#061418]">
                          Telegram
                        </option>
                        <option value="discord" className="bg-[#061418]">
                          Discord
                        </option>
                        <option value="phone" className="bg-[#061418]">
                          Phone / WhatsApp
                        </option>
                      </select>

                      <input
                        type={formData.contactMethod === 'email' ? 'email' : 'text'}
                        value={formData.contactValue}
                        onChange={(e) =>
                          setFormData({ ...formData, contactValue: e.target.value })
                        }
                        required
                        placeholder={
                          formData.contactMethod === 'email'
                            ? 'name@domain.com'
                            : formData.contactMethod === 'telegram'
                            ? '@username'
                            : formData.contactMethod === 'discord'
                            ? 'discord_handle'
                            : '+84 ...'
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#091d23]/90 border border-zinc-700/80 focus:border-[#31e2da] focus:outline-none focus:ring-1 focus:ring-[#31e2da] text-sm text-white placeholder-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* CTA Button 1: Big Cyan Gradient */}
                  <div className="pt-3 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-[#051417] bg-gradient-to-r from-[#2cdad2] via-[#31e2da] to-[#83fff8] hover:shadow-[0_0_28px_rgba(49,226,218,0.45)] hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#051417] border-t-transparent rounded-full animate-spin" />
                          <span>Preparing specification...</span>
                        </div>
                      ) : (
                        <>
                          <span>Review my strategy</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    {/* CTA Button 2: Book intro call */}
                    <button
                      type="button"
                      onClick={() => setShowCallModal(true)}
                      className="w-full py-3 px-6 rounded-xl font-medium text-xs sm:text-sm text-zinc-200 border border-zinc-700/80 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-zinc-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>Book a quick intro call</span>
                    </button>
                  </div>

                  {/* Legal Notice */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs text-zinc-500">
                    <Lock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>
                      Research and software development services only. Nothing here is financial
                      advice.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER METRICS BAR (from reference UI) */}
        <div className="mt-20 lg:mt-28 pt-10 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Metric 1 */}
            <div className="space-y-1.5 sm:border-r border-zinc-800/80 sm:pr-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                4+
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">Years of research</div>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1.5 md:border-r border-zinc-800/80 md:pr-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">Strategies tested</div>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1.5 sm:border-r border-zinc-800/80 sm:pr-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Multiple
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">Markets & assets</div>
            </div>

            {/* Metric 4 */}
            <div className="space-y-1.5">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Data-driven
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">Not opinions</div>
            </div>
          </div>

          {/* Sub-Footer Domain & Copyright Details */}
          <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-zinc-400">DOMAIN:</span>
              <a
                href="https://trading.phamphunguyenhung.com"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
              >
                TRADING.PHAMPHUNGUYENHUNG.COM
              </a>
            </div>

            <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
              <span>&copy; {new Date().getFullYear()} Pham Phu Nguyen Hung</span>
              <span>&bull;</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Book a quick intro call */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#07171a] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(49,226,218,0.2)] text-left space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-cyan-300">
                <Calendar className="w-5 h-5 text-[#31e2da]" />
                <h4 className="font-bold text-lg text-white">Schedule Intro Call</h4>
              </div>
              <button
                onClick={() => setShowCallModal(false)}
                className="text-zinc-400 hover:text-white text-lg font-mono p-1"
              >
                &times;
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Book a 15-minute introductory discussion directly with Hung to go over your trading
              hypotheses, testing scope, or EA requirements.
            </p>

            <div className="p-4 rounded-xl bg-[#091f25] border border-cyan-500/20 space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Duration:</span>
                <span className="font-mono text-cyan-300 font-semibold">15 - 30 Mins</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Format:</span>
                <span>Google Meet / Telegram Call</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Focus:</span>
                <span>Requirements & Feasibility Assessment</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#051417] bg-[#31e2da] hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>Open Calendar Slots</span>
              </a>
              <button
                type="button"
                onClick={() => setShowCallModal(false)}
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-zinc-400 hover:text-white transition-colors text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section10_FinalCTA;
