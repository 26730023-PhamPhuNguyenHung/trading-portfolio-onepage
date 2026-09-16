import React from 'react';
import {
  BarChart3,
  Lightbulb,
  FlaskConical,
  Target,
  ArrowRight,
  Check,
} from 'lucide-react';

export const Section05_HowIFindAnEdge: React.FC = () => {
  return (
    <section
      id="how-i-find-an-edge"
      className="relative py-24 bg-[#051013] text-[#f4f7f7] overflow-hidden border-b border-cyan-500/10"
    >
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(49,226,218,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(49,226,218,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1480px] mx-auto px-6">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          {/* Left Title Group */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 bg-cyan-400 inline-block shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
                MY RESEARCH FRAMEWORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
              HOW I FIND AN{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                EDGE
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#9cb0b4] max-w-2xl font-normal leading-relaxed">
              Start with price behavior. Form hypotheses. Try to destroy them. Keep what survives.
            </p>
          </div>

          {/* Right Quote & Meta */}
          <div className="flex flex-col lg:items-end justify-between">
            <div className="hidden lg:block text-right mb-5 text-[10px] font-mono tracking-widest text-[#6d858b] uppercase space-y-1">
              <div>DISCIPLINE</div>
              <div>DATA</div>
              <div>BETTER DECISIONS</div>
              <div className="h-[1px] w-8 bg-cyan-500/30 ml-auto mt-2" />
            </div>

            <div className="relative max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-cyan-400/40 pl-4 lg:pl-0 lg:pr-4 py-1">
              <p className="italic text-sm sm:text-base text-[#d1e1e4] font-medium leading-snug">
                <span className="text-cyan-400 font-serif text-xl not-italic mr-1">“</span>
                An edge is not a prediction. It's a behavior that survives reality.
                <span className="text-cyan-400 font-serif text-xl not-italic ml-1">”</span>
              </p>
              <div className="mt-2 text-xs font-mono tracking-widest text-cyan-300 font-bold">
                — HUNG
              </div>
            </div>
          </div>
        </div>

        {/* 4 Step Process Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* ==================== CARD 01: OBSERVE PRICE ==================== */}
          <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#081c21]/95 via-[#061418]/90 to-[#040d10]/95 p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(49,226,218,0.12)] transition-all duration-300 group">
            {/* Top Step & Category */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-cyan-400 tracking-tight group-hover:text-cyan-300 transition-colors">
                  01
                </span>
                <div className="text-[10px] font-mono tracking-widest text-[#6d858b] uppercase text-right leading-tight font-semibold">
                  <div>MARKET</div>
                  <div>OBSERVATION</div>
                </div>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(49,226,218,0.15)] group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Observe Price
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#9cb0b4] leading-relaxed mb-4">
                Understand what the market is doing right now. Everything starts with price behavior.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-1.5 mb-6 text-xs text-[#c0d2d6]">
                {['Price action', 'Volatility', 'Liquidity', 'Session', 'Structure'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Visual: Candlestick Chart */}
            <div className="mt-2 rounded-xl bg-[#02080a] border border-cyan-500/20 p-3 relative overflow-hidden">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-mono font-semibold tracking-wider text-cyan-400/90 uppercase">
                  XAUUSD 1H PRICE FIRST.
                </span>
              </div>

              {/* SVG Candlestick Chart */}
              <div className="h-28 w-full flex items-center justify-center">
                <svg
                  viewBox="0 0 240 100"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Subtle horizontal grid lines */}
                  <line x1="0" y1="20" x2="240" y2="20" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="240" y2="50" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="240" y2="80" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />

                  {/* Candlesticks: x, wickY1, wickY2, bodyY, bodyH, isUp */}
                  {[
                    { x: 14, w1: 72, w2: 88, by: 75, bh: 10, up: false },
                    { x: 28, w1: 68, w2: 84, by: 70, bh: 11, up: true },
                    { x: 42, w1: 62, w2: 80, by: 65, bh: 12, up: false },
                    { x: 56, w1: 58, w2: 74, by: 60, bh: 11, up: true },
                    { x: 70, w1: 45, w2: 66, by: 48, bh: 14, up: true },
                    { x: 84, w1: 50, w2: 70, by: 52, bh: 14, up: false },
                    { x: 98, w1: 38, w2: 62, by: 42, bh: 16, up: true },
                    { x: 112, w1: 48, w2: 76, by: 52, bh: 20, up: false },
                    { x: 126, w1: 54, w2: 82, by: 58, bh: 18, up: false },
                    { x: 140, w1: 44, w2: 68, by: 48, bh: 16, up: true },
                    { x: 154, w1: 35, w2: 56, by: 38, bh: 14, up: true },
                    { x: 168, w1: 30, w2: 50, by: 32, bh: 14, up: true },
                    { x: 182, w1: 22, w2: 44, by: 25, bh: 15, up: true },
                    { x: 196, w1: 24, w2: 46, by: 26, bh: 12, up: false },
                    { x: 210, w1: 14, w2: 36, by: 16, bh: 14, up: true },
                    { x: 224, w1: 10, w2: 30, by: 12, bh: 12, up: true },
                  ].map((c, idx) => (
                    <g key={idx}>
                      {/* Wick */}
                      <line
                        x1={c.x + 3}
                        y1={c.w1}
                        x2={c.x + 3}
                        y2={c.w2}
                        stroke={c.up ? '#22d3ee' : '#f97316'}
                        strokeWidth="1.2"
                      />
                      {/* Body */}
                      <rect
                        x={c.x}
                        y={c.by}
                        width="6"
                        height={Math.max(c.bh, 3)}
                        rx="1"
                        fill={c.up ? '#06b6d4' : '#ea580c'}
                        stroke={c.up ? '#22d3ee' : '#f97316'}
                        strokeWidth="0.8"
                      />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="text-[8px] font-mono text-[#6d858b] tracking-wider text-right uppercase mt-1">
                OBSERVE CONTEXT DON'T PREDICT
              </div>
            </div>

            {/* Desktop Connector Arrow */}
            <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#051013] border border-cyan-400/50 items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)] pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* ==================== CARD 02: GENERATE HYPOTHESES ==================== */}
          <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#081c21]/95 via-[#061418]/90 to-[#040d10]/95 p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(49,226,218,0.12)] transition-all duration-300 group">
            {/* Top Step & Category */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-cyan-400 tracking-tight group-hover:text-cyan-300 transition-colors">
                  02
                </span>
                <div className="text-[10px] font-mono tracking-widest text-[#6d858b] uppercase text-right leading-tight font-semibold">
                  <div>IDEA</div>
                  <div>GENERATION</div>
                </div>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(49,226,218,0.15)] group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Generate Hypotheses
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#9cb0b4] leading-relaxed mb-4">
                Look for recurring patterns and inefficiencies. Combine context, structure and market conditions to form testable ideas.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-1.5 mb-6 text-xs text-[#c0d2d6]">
                {['Setup discovery', 'Context combinations', 'Entry and exit logic'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Visual: Zone Boxes & Trend Path */}
            <div className="mt-2 rounded-xl bg-[#02080a] border border-cyan-500/20 p-3 relative overflow-hidden">
              <div className="text-[9px] font-mono font-semibold tracking-wider text-[#6d858b] uppercase mb-1.5">
                IDEAS FROM OBSERVATION
              </div>

              <div className="h-28 w-full flex items-center justify-center">
                <svg
                  viewBox="0 0 240 100"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="zoneGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="zoneGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="45%" stopColor="#f59e0b" />
                      <stop offset="65%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="240" y2="25" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="65" x2="240" y2="65" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />

                  {/* Upper Resistance Zone Box */}
                  <rect
                    x="100"
                    y="18"
                    width="60"
                    height="18"
                    rx="3"
                    fill="url(#zoneGrad1)"
                    stroke="#f59e0b"
                    strokeWidth="0.8"
                    strokeOpacity="0.5"
                    strokeDasharray="2 2"
                  />

                  {/* Middle Support Zone Box */}
                  <rect
                    x="115"
                    y="46"
                    width="75"
                    height="20"
                    rx="3"
                    fill="url(#zoneGrad2)"
                    stroke="#06b6d4"
                    strokeWidth="0.8"
                    strokeOpacity="0.5"
                  />

                  {/* Lower Accumulation Zone Box */}
                  <rect
                    x="75"
                    y="65"
                    width="55"
                    height="18"
                    rx="3"
                    fill="url(#zoneGrad2)"
                    stroke="#0891b2"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />

                  {/* Breakout Dynamic Line */}
                  <polyline
                    points="30,80 60,78 95,72 135,76 142,66 160,35 185,42 225,12"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Pivot / Key Points */}
                  <circle cx="135" cy="76" r="3" fill="#f59e0b" stroke="#051013" strokeWidth="1.5" />
                  <circle cx="160" cy="35" r="3.5" fill="#22d3ee" stroke="#051013" strokeWidth="1.5" />
                  <circle cx="225" cy="12" r="3" fill="#38bdf8" stroke="#051013" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="text-[8px] font-mono text-[#6d858b] tracking-wider text-right uppercase mt-1">
                STRUCTURE + CONTEXT CONVERGENCE
              </div>
            </div>

            {/* Desktop Connector Arrow */}
            <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#051013] border border-cyan-400/50 items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)] pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* ==================== CARD 03: FALSIFY ==================== */}
          <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#081c21]/95 via-[#061418]/90 to-[#040d10]/95 p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(49,226,218,0.12)] transition-all duration-300 group">
            {/* Top Step & Category */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-cyan-400 tracking-tight group-hover:text-cyan-300 transition-colors">
                  03
                </span>
                <div className="text-[10px] font-mono tracking-widest text-[#6d858b] uppercase text-right leading-tight font-semibold">
                  <div>RIGOROUS</div>
                  <div>TESTING</div>
                </div>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(49,226,218,0.15)] group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Falsify
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#9cb0b4] leading-relaxed mb-4">
                Try to prove the idea wrong. Test across different conditions, time periods and market regimes.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-1.5 mb-6 text-xs text-[#c0d2d6]">
                {['Out-of-sample', 'Monte Carlo', 'Walk-forward', 'Regime testing'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Visual: Stress Test multi-lines & Validation Checklist */}
            <div className="mt-2 rounded-xl bg-[#02080a] border border-cyan-500/20 p-3 relative overflow-hidden">
              <div className="text-[9px] font-mono font-semibold tracking-wider text-[#6d858b] uppercase mb-1.5">
                STRESS TEST THE IDEA
              </div>

              <div className="h-28 w-full flex items-center gap-2">
                {/* Multi-path simulations graph */}
                <div className="flex-1 h-full">
                  <svg
                    viewBox="0 0 160 100"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="160" y2="30" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />
                    <line x1="0" y1="70" x2="160" y2="70" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />

                    {/* Stress line 1: Cyan Best Case */}
                    <path
                      d="M 5,82 Q 25,60 45,68 T 85,45 T 120,30 T 155,18"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="1.8"
                    />

                    {/* Stress line 2: Teal Median Case */}
                    <path
                      d="M 5,84 Q 28,72 50,76 T 90,62 T 125,52 T 155,38"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />

                    {/* Stress line 3: Orange Drawdown/Worst Case */}
                    <path
                      d="M 5,88 Q 30,82 55,86 T 95,78 T 125,82 T 155,68"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="1.4"
                    />
                  </svg>
                </div>

                {/* Checklist Badge Column */}
                <div className="w-20 pl-2 border-l border-cyan-500/20 flex flex-col justify-center gap-1.5 text-[10px] font-mono">
                  {[
                    { label: 'OOS', pass: true },
                    { label: 'MC', pass: true },
                    { label: 'WFA', pass: true },
                    { label: 'REGIME', pass: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[#c4d6da]">
                      <span className="text-[10px]">{item.label}</span>
                      <Check className="w-3.5 h-3.5 text-cyan-400 stroke-[3]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[8px] font-mono text-[#6d858b] tracking-wider text-right uppercase mt-1">
                4-TIER FALSIFICATION PASS
              </div>
            </div>

            {/* Desktop Connector Arrow */}
            <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#051013] border border-cyan-400/50 items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)] pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* ==================== CARD 04: KEEP WHAT SURVIVES ==================== */}
          <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#081c21]/95 via-[#061418]/90 to-[#040d10]/95 p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(49,226,218,0.12)] transition-all duration-300 group">
            {/* Top Step & Category */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-cyan-400 tracking-tight group-hover:text-cyan-300 transition-colors">
                  04
                </span>
                <div className="text-[10px] font-mono tracking-widest text-[#6d858b] uppercase text-right leading-tight font-semibold">
                  <div>LIVE</div>
                  <div>IMPLEMENTATION</div>
                </div>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(49,226,218,0.15)] group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Keep What Survives
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#9cb0b4] leading-relaxed mb-4">
                Keep only what shows robust, repeatable behavior. Simplify the rules. Turn it into a tradable, executable strategy.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-1.5 mb-6 text-xs text-[#c0d2d6]">
                {['Robust behavior', 'Simplified rules', 'Repeatable logic'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Visual: Smooth Equity Curve & Live Checklist */}
            <div className="mt-2 rounded-xl bg-[#02080a] border border-cyan-500/20 p-3 relative overflow-hidden">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-mono font-semibold tracking-wider text-[#6d858b] uppercase">
                  REAL EDGE SURVIVES REALITY
                </span>
              </div>

              <div className="h-28 w-full relative">
                <svg
                  viewBox="0 0 240 100"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="240" y2="30" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="0" y1="70" x2="240" y2="70" stroke="#0a252a" strokeWidth="0.8" strokeDasharray="3 3" />

                  {/* Filled Gradient Under Curve */}
                  <path
                    d="M 5,85 Q 30,82 55,75 T 100,58 T 150,42 T 195,25 T 235,12 L 235,95 L 5,95 Z"
                    fill="url(#equityGradient)"
                  />

                  {/* Smooth Rising Equity Curve */}
                  <path
                    d="M 5,85 Q 30,82 55,75 T 100,58 T 150,42 T 195,25 T 235,12"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Terminal Peak Glow Dot */}
                  <circle cx="235" cy="12" r="3.5" fill="#38bdf8" stroke="#051013" strokeWidth="1.5" />
                </svg>

                {/* Floating Bottom Checklist Badge */}
                <div className="absolute right-2 bottom-2 bg-[#05161a]/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-2 py-1 text-[9px] font-mono space-y-0.5 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-1.5 text-cyan-200">
                    <span className="tracking-wider">ROBUST</span>
                    <Check className="w-3 h-3 text-cyan-400 stroke-[3]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-200">
                    <span className="tracking-wider">SIMPLE</span>
                    <Check className="w-3 h-3 text-cyan-400 stroke-[3]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-200">
                    <span className="tracking-wider">REPEATABLE</span>
                    <Check className="w-3 h-3 text-cyan-400 stroke-[3]" />
                  </div>
                </div>
              </div>

              <div className="text-[8px] font-mono text-[#6d858b] tracking-wider text-right uppercase mt-1">
                PRODUCTION-READY EXECUTION
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-cyan-500/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            <div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                4+
              </div>
              <div className="text-xs sm:text-sm text-[#9cb0b4] mt-1 font-medium">
                Years of research
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-[#9cb0b4] mt-1 font-medium">
                Strategies tested
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                Multiple
              </div>
              <div className="text-xs sm:text-sm text-[#9cb0b4] mt-1 font-medium">
                Markets & assets
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                Data-driven
              </div>
              <div className="text-xs sm:text-sm text-[#9cb0b4] mt-1 font-medium">
                Not opinions
              </div>
            </div>
          </div>

          {/* Right Signature & Philosophy */}
          <div className="lg:text-right border-t lg:border-t-0 pt-4 lg:pt-0 border-cyan-500/10">
            <div className="text-xs font-mono font-bold tracking-widest text-[#9cb0b4] uppercase">
              TRADING.PHAMPHUNGUYENHUNG.COM
            </div>
            <div className="text-[11px] font-mono tracking-widest text-cyan-400 font-semibold mt-1">
              RESEARCH &nbsp;/&nbsp; BACKTEST &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; REPEAT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05_HowIFindAnEdge;
