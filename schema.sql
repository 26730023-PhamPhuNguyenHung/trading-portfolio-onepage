CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  form_type TEXT NOT NULL, -- 'hero', 'interactive_lab', 'final_cta'
  name TEXT,
  email TEXT,
  contact TEXT,
  market TEXT,
  need TEXT,
  timeframe TEXT,
  idea TEXT,
  entry_concept TEXT,
  risk_model TEXT,
  current_stage TEXT,
  platform TEXT,
  preferred_contact TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_form_type ON leads(form_type);
