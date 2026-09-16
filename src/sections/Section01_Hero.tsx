import React, { useState } from 'react';
import {
  TrendingUp,
  FileCheck2,
  Cpu,
  Zap,
  ArrowRight,
  BarChart3,
  Lock,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

export const Section01_Hero: React.FC = () => {
  const [need, setNeed] = useState('Backtest a strategy');
  const [market, setMarket] = useState('XAUUSD / Forex / Crypto');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() && !contact.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDescription('');
      setContact('');
    }, 4000);
  };

  const marketPills = [
    'XAUUSD',
    'Forex',
    'Crypto',
    'Python',
    'MQL5',
    'Walk-forward testing',
    'Risk & robustness analysis',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-[#051013] text-[#f4f7f7] flex flex-col justify-between"
      style={{
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(49, 226, 218, 0.08), transparent 70%), linear-gradient(180deg, #051013 0%, #061519 100%)`,
      }}
    >
      {/* Background illustration / Chart backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/chart-bg.png"
          alt="Chart background"
          className="w-full h-full object-cover object-center opacity-35 mix-blend-screen brightness-90 contrast-125"
          onError={(e) => {
            // Fallback gracefully if image fails to render
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(49, 226, 218, 0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051013]/60 via-transparent to-[#051013]" />
      </div>

      {/* Decorative Quant Labels - Right Edge */}
      <div className="hidden 2xl:flex flex-col gap-6 absolute right-8 top-36 z-10 text-[10px] font-mono tracking-[0.25em] text-[#9cb0b4]/60 uppercase select-none text-right">
        <div>
          <div>DISCIPLINE</div>
          <div>DATA</div>
          <div className="text-cyan-400/80">BETTER DECISIONS</div>
        </div>
        <div className="w-6 h-[1px] bg-cyan-500/30 ml-auto" />
      </div>

      <div className="hidden 2xl:flex flex-col gap-6 absolute right-8 bottom-44 z-10 text-[10px] font-mono tracking-[0.25em] text-[#9cb0b4]/60 uppercase select-none text-right">
        <div>
          <div>GLOBAL</div>
          <div>MARKETS</div>
          <div>SYSTEMATIC</div>
          <div className="text-cyan-400/80">OPPORTUNITIES</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1480px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Pitch, Headline, Badges, CTA, Quote */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#31e2da] rounded-full shadow-[0_0_8px_#31e2da]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#31e2da] uppercase font-mono">
                SYSTEMATIC THINKING. REAL RESULTS.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight text-white leading-[1.08] text-wrap">
              TURN YOUR TRADING IDEA{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#31e2da] via-[#83fff8] to-[#2dd4bf]">
                INTO A TESTED SYSTEM.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#9cb0b4] leading-relaxed max-w-2xl font-normal">
              I research, backtest and build systematic trading strategies for Forex, Gold, Crypto and Futures — from raw price action to reproducible execution.
            </p>

            {/* 4 Feature Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#071d22] border border-cyan-500/25 text-xs sm:text-sm font-medium text-slate-100 hover:border-cyan-400/60 transition-colors">
                <TrendingUp className="w-4 h-4 text-[#31e2da]" />
                <span>Strategy Research</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#071d22] border border-cyan-500/25 text-xs sm:text-sm font-medium text-slate-100 hover:border-cyan-400/60 transition-colors">
                <FileCheck2 className="w-4 h-4 text-[#31e2da]" />
                <span>Backtesting</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#071d22] border border-cyan-500/25 text-xs sm:text-sm font-medium text-slate-100 hover:border-cyan-400/60 transition-colors">
                <Cpu className="w-4 h-4 text-[#31e2da]" />
                <span>Optimization</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#071d22] border border-cyan-500/25 text-xs sm:text-sm font-medium text-slate-100 hover:border-cyan-400/60 transition-colors">
                <Zap className="w-4 h-4 text-[#31e2da]" />
                <span>Automation</span>
              </div>
            </div>

            {/* Market & Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {marketPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#9cb0b4] bg-[#06161a] border border-cyan-500/15 hover:text-cyan-200 hover:border-cyan-400/40 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-[#31e2da] via-[#22d3ee] to-[#14b8a6] hover:from-[#44e7df] hover:to-[#2dd4bf] shadow-[0_0_30px_rgba(49,226,218,0.35)] hover:shadow-[0_0_40px_rgba(49,226,218,0.5)] active:scale-[0.98] transition-all"
              >
                <span>Discuss My Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#research"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-100 bg-[#071d22] border border-cyan-500/30 hover:border-cyan-400 hover:bg-[#0b282f] active:scale-[0.98] transition-all"
              >
                <BarChart3 className="w-4 h-4 text-cyan-300" />
                <span>View Research</span>
              </a>
            </div>

            {/* Quote */}
            <div className="pt-2 border-l-2 border-cyan-500/40 pl-3.5 mt-2">
              <p className="italic text-sm sm:text-base text-[#9cb0b4] font-serif tracking-wide">
                &ldquo;Better systems. A more rational you.&rdquo;
              </p>
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400/90 uppercase mt-0.5 block">
                — HUNG
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form & Floating Stats Chip */}
          <div className="lg:col-span-5 relative">
            
            {/* Top Stat Badge (Floating decoration) */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07191d] border border-cyan-500/25 text-[11px] font-mono text-cyan-300 absolute -top-9 right-6 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>XAUUSD +12.4% (WFR)</span>
            </div>

            {/* Form Card */}
            <div className="bg-[#071a1f] border border-cyan-500/35 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(49,226,218,0.12)] relative z-10">
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Have a trading idea?
                </h2>
                <p className="text-xs sm:text-sm text-[#9cb0b4] mt-1">
                  Tell me about it. I'll help you turn it into a tested system.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#31e2da] animate-bounce" />
                  <h3 className="text-lg font-bold text-white">Idea Submitted Successfully!</h3>
                  <p className="text-xs text-[#9cb0b4] max-w-xs">
                    I will review your trading logic and reach out within 24 hours under complete confidentiality.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select: What do you need? */}
                  <div>
                    <label className="block text-xs font-semibold text-[#cdd8da] mb-1.5">
                      What do you need?
                    </label>
                    <div className="relative">
                      <select
                        value={need}
                        onChange={(e) => setNeed(e.target.value)}
                        className="w-full appearance-none bg-[#051317] border border-cyan-500/25 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                      >
                        <option value="Backtest a strategy">Backtest a strategy</option>
                        <option value="Build an automated EA / Bot">Build an automated EA / Bot</option>
                        <option value="Strategy optimization & WFA">Strategy optimization & WFA</option>
                        <option value="Risk & robustness audit">Risk & robustness audit</option>
                        <option value="Custom Python / MQL5 Tool">Custom Python / MQL5 Tool</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#9cb0b4] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select: Market */}
                  <div>
                    <label className="block text-xs font-semibold text-[#cdd8da] mb-1.5">
                      Market
                    </label>
                    <div className="relative">
                      <select
                        value={market}
                        onChange={(e) => setMarket(e.target.value)}
                        className="w-full appearance-none bg-[#051317] border border-cyan-500/25 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                      >
                        <option value="XAUUSD / Forex / Crypto">XAUUSD / Forex / Crypto</option>
                        <option value="Gold (XAUUSD)">Gold (XAUUSD)</option>
                        <option value="Forex Majors & Crosses">Forex Majors & Crosses</option>
                        <option value="Crypto (BTC, ETH, Altcoins)">Crypto (BTC, ETH, Altcoins)</option>
                        <option value="Futures & Indices (NQ, ES)">Futures & Indices (NQ, ES)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#9cb0b4] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Textarea: Describe your idea */}
                  <div>
                    <label className="block text-xs font-semibold text-[#cdd8da] mb-1.5">
                      Describe your idea
                    </label>
                    <textarea
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. entry logic, indicators, timeframes, goals..."
                      className="w-full bg-[#051317] border border-cyan-500/25 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-[#6d858b] focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Input: Your email / Telegram */}
                  <div>
                    <label className="block text-xs font-semibold text-[#cdd8da] mb-1.5">
                      Your email / Telegram
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. yourname@example.com or @username"
                      className="w-full bg-[#051317] border border-cyan-500/25 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-[#6d858b] focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-[#31e2da] via-[#22d3ee] to-[#14b8a6] hover:from-[#44e7df] hover:to-[#2dd4bf] shadow-[0_0_25px_rgba(49,226,218,0.3)] hover:shadow-[0_0_35px_rgba(49,226,218,0.45)] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <span>Discuss my strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Security Note */}
                  <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#9cb0b4]">
                    <Lock className="w-3 h-3 text-cyan-400" />
                    <span>Your strategy stays confidential · NDA available</span>
                  </div>
                </form>
              )}
            </div>

            {/* Floating Stats Chip (Left corner overlaying slightly) */}
            <div className="hidden md:block absolute -left-12 -bottom-8 z-20 bg-[#06151a] border border-cyan-500/35 rounded-xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(49,226,218,0.15)] min-w-[200px]">
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9cb0b4] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Sharpe
                  </span>
                  <span className="font-bold text-white text-xs">1.42</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9cb0b4] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Max DD
                  </span>
                  <span className="font-bold text-amber-300 text-xs">-8.7%</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9cb0b4] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Win rate
                  </span>
                  <span className="font-bold text-white text-xs">58.3%</span>
                </div>
              </div>

              {/* Mini Sparkline Chart */}
              <div className="mt-2 pt-2 border-t border-cyan-500/20">
                <svg
                  className="w-full h-8 overflow-visible"
                  viewBox="0 0 100 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 18 Q 15 17 25 13 T 50 11 T 75 7 T 100 2"
                    stroke="#31e2da"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 18 Q 15 17 25 13 T 50 11 T 75 7 T 100 2 L 100 24 L 0 24 Z"
                    fill="url(#sparkline-gradient)"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#31e2da" />
                      <stop offset="1" stopColor="#31e2da" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Idea workflow labels alongside vertical line */}
            <div className="hidden xl:flex flex-col gap-2 absolute -left-20 top-20 text-[9px] font-mono tracking-[0.2em] text-[#6d858b] select-none uppercase">
              <span>IDEA</span>
              <span>BACKTEST</span>
              <span>OPTIMIZE</span>
              <span>AUTOMATE</span>
              <span className="text-cyan-400 font-semibold">TRADE</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM METRICS BAR */}
      <div className="relative z-10 w-full border-t border-cyan-500/20 bg-[#051216]/90 mt-8 pt-6 pb-4">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* 4 Stats counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:gap-12 w-full lg:w-auto">
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  4+
                </div>
                <div className="text-xs text-[#9cb0b4] mt-0.5">
                  Years of research
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  1000+
                </div>
                <div className="text-xs text-[#9cb0b4] mt-0.5">
                  Strategies tested
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Multiple
                </div>
                <div className="text-xs text-[#9cb0b4] mt-0.5">
                  Markets & assets
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Data-driven
                </div>
                <div className="text-xs text-[#9cb0b4] mt-0.5">
                  Not opinions
                </div>
              </div>
            </div>

            {/* Right side URL & Tagline branding */}
            <div className="flex flex-col items-start lg:items-end w-full lg:w-auto pt-2 lg:pt-0 border-t border-cyan-500/10 lg:border-t-0">
              <span className="font-mono text-xs tracking-[0.2em] text-[#9cb0b4] font-semibold">
                TRADING.PHAMPHUNGUYENHUNG.COM
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#6d858b] mt-1">
                RESEARCH &nbsp;/&nbsp; BACKTEST &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; REPEAT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01_Hero;
