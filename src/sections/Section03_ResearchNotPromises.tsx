import React from 'react';
import {
  FileText,
  BarChart3,
  Database,
  RefreshCw,
  Lightbulb,
  ShieldCheck,
  Share2,
  ClipboardCheck,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

// 4 Value Chips underneath the subtitle
const VALUE_CHIPS = [
  { icon: FileText, label: 'Open methodology' },
  { icon: BarChart3, label: 'Realistic assumptions' },
  { icon: Database, label: 'Data-driven decisions' },
  { icon: RefreshCw, label: 'Continuous improvement' },
];

// 8 Pipeline Stages
const PIPELINE_STEPS = [
  {
    step: '01',
    name: 'IDEA',
    icon: Lightbulb,
    desc: 'A hypothesis based on market inefficiency or behavioral insight.',
    highlight: false,
  },
  {
    step: '02',
    name: 'RULE DEFINITION',
    icon: FileText,
    desc: 'Translate the idea into clear, testable entry/exit rules.',
    highlight: false,
  },
  {
    step: '03',
    name: 'DATA VALIDATION',
    icon: Database,
    desc: 'Use clean, high-quality data with realistic costs and market conditions.',
    highlight: false,
  },
  {
    step: '04',
    name: 'BACKTEST',
    icon: BarChart3,
    desc: 'Evaluate historical performance with transparent metrics.',
    highlight: false,
  },
  {
    step: '05',
    name: 'ROBUSTNESS',
    icon: ShieldCheck,
    desc: 'Test sensitivity across parameters, markets and time periods.',
    highlight: false,
  },
  {
    step: '06',
    name: 'WALK-FORWARD',
    icon: Share2,
    desc: 'Validate on unseen data with rolling tests.',
    highlight: false,
  },
  {
    step: '07',
    name: 'PAPER / FORWARD TEST',
    icon: ClipboardCheck,
    desc: 'Run in real-time conditions without real capital.',
    highlight: false,
  },
  {
    step: '08',
    name: 'DEPLOYMENT',
    icon: Rocket,
    desc: 'Only deploy strategies that pass all prior stages.',
    highlight: true,
  },
];

// 4 Pillars in WHAT MATTERS section
const WHAT_MATTERS_PILLARS = [
  {
    icon: CheckCircle2,
    title: 'Reproducibility',
    desc: 'Clear methods, data sources and parameters so results can be replicated.',
  },
  {
    icon: Database,
    title: 'Realistic assumptions',
    desc: 'Include trading costs, slippage and practical constraints.',
  },
  {
    icon: BarChart3,
    title: 'Out-of-sample testing',
    desc: 'Performance must hold outside of the development period.',
  },
  {
    icon: RefreshCw,
    title: 'Disciplined iteration',
    desc: 'Learn from results, refine and improve — no curve fitting.',
  },
];

export const Section03_ResearchNotPromises: React.FC = () => {
  return (
    <section
      id="research"
      className="relative py-20 md:py-28 bg-[#051013] text-[#f4f7f7] overflow-hidden border-t border-cyan-500/10"
    >
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= TOP ROW: HEADLINE & CANDLESTICK PREVIEW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Subtitle, Value Chips */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-cyan-400 inline-block shadow-[0_0_8px_rgba(49,226,218,0.8)]" />
              <span className="text-xs tracking-[0.25em] font-semibold text-cyan-400 font-mono uppercase">
                EVIDENCE OVER EMOTION.
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
              RESEARCH,<br />
              NOT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 drop-shadow-[0_0_20px_rgba(49,226,218,0.45)]">
                PROMISES.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-[#9cb0b4] max-w-2xl leading-relaxed font-normal">
              I don’t sell signals. I build systems that can be tested, challenged and reproduced.
            </p>

            {/* 4 Value Chips */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7">
              {VALUE_CHIPS.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#06181d]/85 border border-cyan-500/20 text-[#cdd8da] hover:border-cyan-400/50 hover:text-white transition-all text-xs sm:text-[13px] backdrop-blur-xs group"
                  >
                    <span className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-medium tracking-wide">{chip.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Candlestick Graphic & Mini Status Card */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center lg:items-end justify-center">
            {/* Visual chart container */}
            <div className="relative w-full max-w-[480px] min-h-[260px] sm:min-h-[290px] rounded-2xl bg-[#06181d]/60 border border-cyan-500/20 p-5 overflow-hidden flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              {/* Candlestick & Grid background art */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 420 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="420" y2="40" stroke="rgba(76,224,216,0.08)" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="420" y2="90" stroke="rgba(76,224,216,0.08)" strokeDasharray="3 3" />
                  <line x1="0" y1="140" x2="420" y2="140" stroke="rgba(76,224,216,0.08)" strokeDasharray="3 3" />
                  <line x1="0" y1="190" x2="420" y2="190" stroke="rgba(76,224,216,0.08)" strokeDasharray="3 3" />

                  {/* Candlesticks: Cyan = bullish, Orange = bearish */}
                  {/* Bearish run */}
                  <line x1="30" y1="130" x2="30" y2="175" stroke="#f3a52e" strokeWidth="1" />
                  <rect x="28" y="140" width="4" height="25" fill="#f3a52e" rx="1" />

                  <line x1="55" y1="145" x2="55" y2="190" stroke="#f3a52e" strokeWidth="1" />
                  <rect x="53" y="152" width="4" height="28" fill="#f3a52e" rx="1" />

                  {/* Bullish reversal */}
                  <line x1="80" y1="135" x2="80" y2="185" stroke="#31e2da" strokeWidth="1" />
                  <rect x="78" y="145" width="4" height="25" fill="#31e2da" rx="1" />

                  <line x1="105" y1="110" x2="105" y2="160" stroke="#31e2da" strokeWidth="1" />
                  <rect x="103" y="120" width="4" height="30" fill="#31e2da" rx="1" />

                  {/* Pullback */}
                  <line x1="130" y1="125" x2="130" y2="165" stroke="#f3a52e" strokeWidth="1" />
                  <rect x="128" y="132" width="4" height="22" fill="#f3a52e" rx="1" />

                  {/* Strong climb */}
                  <line x1="155" y1="95" x2="155" y2="145" stroke="#31e2da" strokeWidth="1" />
                  <rect x="153" y="102" width="4" height="32" fill="#31e2da" rx="1" />

                  <line x1="180" y1="75" x2="180" y2="125" stroke="#31e2da" strokeWidth="1" />
                  <rect x="178" y="80" width="4" height="35" fill="#31e2da" rx="1" />

                  <line x1="205" y1="85" x2="205" y2="130" stroke="#f3a52e" strokeWidth="1" />
                  <rect x="203" y="92" width="4" height="24" fill="#f3a52e" rx="1" />

                  {/* Higher high climb */}
                  <line x1="230" y1="60" x2="230" y2="110" stroke="#31e2da" strokeWidth="1" />
                  <rect x="228" y="68" width="4" height="30" fill="#31e2da" rx="1" />

                  <line x1="255" y1="45" x2="255" y2="95" stroke="#31e2da" strokeWidth="1" />
                  <rect x="253" y="52" width="4" height="32" fill="#31e2da" rx="1" />

                  <line x1="280" y1="30" x2="280" y2="80" stroke="#31e2da" strokeWidth="1" />
                  <rect x="278" y="38" width="4" height="30" fill="#31e2da" rx="1" />

                  <line x1="305" y1="20" x2="305" y2="70" stroke="#31e2da" strokeWidth="1" />
                  <rect x="303" y="25" width="4" height="35" fill="#31e2da" rx="1" />

                  {/* Trend line */}
                  <path
                    d="M 30 160 C 90 145, 140 120, 180 90 S 260 45, 310 25"
                    stroke="#31e2da"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Callout Pins */}
              <div className="relative z-10 flex justify-between items-start text-[10px] font-mono tracking-wider">
                <div className="flex flex-col items-start">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    IDEAS TESTED NOT HYPED
                  </span>
                  <div className="w-[1px] h-6 bg-cyan-400/50 ml-4 border-l border-dashed border-cyan-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 ml-[13.5px] -mt-1 shadow-[0_0_6px_#31e2da]" />
                </div>

                <div className="flex flex-col items-end">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    SYSTEMS BEAT OPINIONS
                  </span>
                  <div className="w-[1px] h-4 bg-cyan-400/50 mr-4 border-l border-dashed border-cyan-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 mr-[13.5px] -mt-1 shadow-[0_0_6px_#31e2da]" />
                </div>
              </div>

              {/* Foreground: Status Card & Quote */}
              <div className="relative z-10 mt-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
                {/* Mini Status Card */}
                <div className="w-full sm:w-[260px] rounded-xl bg-[#06181d]/90 border border-cyan-500/35 p-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.6)] backdrop-blur-md">
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between items-center text-[#9cb0b4]">
                      <span className="tracking-wider text-[#d2dcde]">XAUUSD</span>
                      <span className="text-cyan-400 font-bold">+12.4%</span>
                    </div>
                    <div className="flex justify-between items-center text-[#9cb0b4]">
                      <span className="tracking-wider text-[#d2dcde]">EURUSD</span>
                      <span className="text-cyan-400 font-bold">+6.8%</span>
                    </div>
                    <div className="flex justify-between items-center text-[#9cb0b4]">
                      <span className="tracking-wider text-[#d2dcde]">BTCUSD</span>
                      <span className="text-cyan-400 font-bold">+9.1%</span>
                    </div>
                    <div className="pt-1.5 border-t border-cyan-500/20 flex justify-between items-center">
                      <span className="text-white font-bold tracking-wider">TOTAL</span>
                      <span className="text-cyan-300 font-extrabold text-sm drop-shadow-[0_0_8px_rgba(49,226,218,0.5)]">
                        +28.3%
                      </span>
                    </div>
                  </div>

                  {/* Mini sparkline chart */}
                  <div className="mt-2.5 pt-1.5">
                    <svg className="w-full h-8 overflow-visible" viewBox="0 0 200 32">
                      <defs>
                        <linearGradient id="miniSpark" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#31e2da" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#83fff8" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 5 26 Q 35 22 55 24 T 95 16 T 135 18 T 165 9 T 195 4"
                        fill="none"
                        stroke="url(#miniSpark)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="55" cy="24" r="2" className="fill-cyan-400" />
                      <circle cx="95" cy="16" r="2" className="fill-cyan-400" />
                      <circle cx="135" cy="18" r="2" className="fill-cyan-400" />
                      <circle cx="165" cy="9" r="2" className="fill-cyan-400" />
                      <circle
                        cx="195"
                        cy="4"
                        r="3"
                        className="fill-cyan-200 animate-pulse drop-shadow-[0_0_6px_#31e2da]"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtitle quote & philosophy */}
                <div className="text-right sm:max-w-[170px] hidden sm:block">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#6d858b] mb-1">
                    DISCIPLINE • DATA
                  </div>
                  <p className="italic font-serif text-xs text-[#cdd8da] leading-relaxed">
                    “Same markets.
                    <br />
                    A more rational you.”
                  </p>
                  <p className="mt-1 text-[10px] tracking-wider uppercase font-mono text-cyan-400/80">— HUNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MIDDLE ROW: 8-STEP PIPELINE ================= */}
        <div className="mt-16 md:mt-24">
          {/* Subheading */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block shadow-[0_0_8px_rgba(49,226,218,0.8)]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-400 font-mono">
              FROM IDEA TO REALITY
            </span>
          </div>

          {/* Pipeline Container - Horizontal layout on desktop, scrollable/responsive on mobile */}
          <div className="overflow-x-auto pb-4 pt-1 scrollbar-none sm:scrollbar-thin sm:scrollbar-thumb-cyan-500/20 sm:scrollbar-track-transparent">
            <div className="flex items-stretch min-w-[1080px] xl:min-w-full gap-2 xl:gap-2.5">
              {PIPELINE_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === PIPELINE_STEPS.length - 1;

                return (
                  <React.Fragment key={step.step}>
                    {/* Step Card */}
                    <div
                      className={`flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-xl transition-all duration-300 relative group min-w-[125px] ${
                        step.highlight
                          ? 'bg-[#07252b] border-2 border-cyan-400 shadow-[0_0_25px_rgba(49,226,218,0.25)] ring-1 ring-cyan-400/50'
                          : 'bg-[#06181d]/85 border border-cyan-500/25 hover:border-cyan-400/50 hover:bg-[#082027]/90'
                      }`}
                    >
                      {/* Step Number Top Left */}
                      <div className="flex items-center justify-between w-full mb-3">
                        <span
                          className={`font-mono text-xs font-bold ${
                            step.highlight ? 'text-cyan-300' : 'text-cyan-400/80'
                          }`}
                        >
                          {step.step}
                        </span>
                      </div>

                      {/* Icon Centered */}
                      <div className="flex flex-col items-center my-1">
                        <div
                          className={`p-2.5 rounded-lg mb-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                            step.highlight
                              ? 'bg-cyan-400/20 text-cyan-200'
                              : 'bg-cyan-950/40 text-cyan-400 group-hover:text-cyan-300'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Step Name */}
                        <h4
                          className={`text-center text-[11px] sm:text-xs font-bold tracking-wider uppercase leading-tight min-h-[30px] flex items-center justify-center ${
                            step.highlight ? 'text-cyan-200' : 'text-white'
                          }`}
                        >
                          {step.name}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-[11px] text-[#9cb0b4] text-center leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow between steps (except after last card) */}
                    {!isLast && (
                      <div className="flex items-center justify-center text-cyan-400/70 px-0.5 shrink-0 self-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(49,226,218,0.4)]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW: WHAT MATTERS ================= */}
        <div className="mt-12 md:mt-16 rounded-2xl bg-[#06181d]/85 border border-cyan-500/25 p-6 md:p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          {/* Header */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block shadow-[0_0_8px_rgba(49,226,218,0.8)]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-400 font-mono">
              WHAT MATTERS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 4 Pillars (lg:col-span-8) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHAT_MATTERS_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Icon className="w-4 h-4 shrink-0" />
                      <h4 className="font-bold text-sm tracking-wide text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-[#9cb0b4] leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Right Quote Block (lg:col-span-4) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-cyan-500/20 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
              <blockquote className="italic font-serif text-sm sm:text-base text-[#e0ecee] leading-relaxed">
                “The goal isn’t to be right all the time. It’s to build a process that works over time.”
              </blockquote>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">— HUNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03_ResearchNotPromises;
