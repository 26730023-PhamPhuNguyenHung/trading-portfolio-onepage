import React from 'react';
import { FileText, Lock, Code2, Server, Users } from 'lucide-react';

interface SecurityPillar {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
}

const SECURITY_PILLARS: SecurityPillar[] = [
  {
    id: '01',
    icon: FileText,
    title: 'NDA Available',
    description:
      'Sign a non-disclosure agreement before any strategy discussion. Your ideas are protected from day one.',
    tag: 'CONFIDENTIAL BY DESIGN',
  },
  {
    id: '02',
    icon: Lock,
    title: 'Private Logic',
    description:
      'Your trading rules, models, and methodologies are never published, shared, or reused. What we build together stays between us.',
    tag: 'YOUR IDEAS. YOURS ONLY',
  },
  {
    id: '03',
    icon: Code2,
    title: 'Your Repository',
    description:
      'All code, documentation, and research deliverables are provided directly to you. You own 100% of the IP.',
    tag: 'FULL OWNERSHIP',
  },
  {
    id: '04',
    icon: Server,
    title: 'Your Infrastructure',
    description:
      'We do not require access to your accounts or systems. Credentials, execution, and data stay in your environment.',
    tag: 'YOUR ENVIRONMENT. YOUR CONTROL',
  },
];

export const Section08_YourEdge: React.FC = () => {
  return (
    <section
      id="your-edge"
      className="relative w-full bg-[#051013] text-[#f4f7f7] py-20 lg:py-28 overflow-hidden border-t border-cyan-950/40"
    >
      {/* Subtle background glow effect behind the hologram shield */}
      <div
        className="pointer-events-none absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 w-[450px] h-[350px] rounded-full bg-amber-500/5 blur-[100px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-12 relative">
        {/* ===================== TOP ROW: HEADLINE & HOLOGRAPHIC SHIELD ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
          {/* Left Column: Headlines & Subtitle */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-[#31e2da] rounded-full inline-block" />
              <span className="font-mono text-xs font-semibold tracking-[0.22em] text-[#31e2da] uppercase">
                TRUST. PRIVACY. YOUR ADVANTAGE.
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] mb-6 text-white">
              YOUR EDGE{' '}
              <span className="text-[#31e2da] drop-shadow-[0_0_24px_rgba(49,226,218,0.45)]">
                STAYS YOURS.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#9cb0b4] max-w-xl leading-relaxed font-normal">
              We develop trading strategies privately, with complete confidentiality. Your ideas,
              logic, and code stay in your hands — always.
            </p>
          </div>

          {/* Right Column: Hologram Shield & Accompanying Metrics/Quote */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center lg:items-end justify-center lg:justify-end gap-6 lg:gap-8">
            {/* Hologram Shield Visual */}
            <div className="relative w-[280px] sm:w-[320px] h-[340px] flex items-center justify-center">
              {/* SVG Hologram Shield */}
              <svg
                viewBox="0 0 320 360"
                className="w-full h-full filter drop-shadow-[0_0_20px_rgba(49,226,218,0.3)] select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Pattern for dot matrix inside shield */}
                  <pattern
                    id="shieldMatrix"
                    width="12"
                    height="12"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="0.9" fill="#31e2da" fillOpacity="0.45" />
                    <circle cx="8" cy="8" r="0.6" fill="#83fff8" fillOpacity="0.3" />
                  </pattern>

                  {/* Linear gradients */}
                  <linearGradient id="shieldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#83fff8" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#31e2da" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#083344" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="padlockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#83fff8" />
                    <stop offset="100%" stopColor="#31e2da" />
                  </linearGradient>

                  <linearGradient id="orbitAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f3a52e" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#f3a52e" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#31e2da" stopOpacity="0.6" />
                  </linearGradient>

                  {/* Shield clip path */}
                  <clipPath id="shieldShape">
                    <path d="M160 20 C220 20, 270 45, 275 110 C280 200, 205 275, 160 310 C115 275, 40 200, 45 110 C50 45, 100 20, 160 20 Z" />
                  </clipPath>
                </defs>

                {/* Outer Orbit Rings */}
                {/* Amber elliptical orbital ring */}
                <ellipse
                  cx="160"
                  cy="170"
                  rx="145"
                  ry="52"
                  transform="rotate(-20 160 170)"
                  stroke="url(#orbitAmber)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  opacity="0.75"
                />
                <circle
                  cx="50"
                  cy="145"
                  r="2.5"
                  fill="#f3a52e"
                  className="filter drop-shadow-[0_0_6px_#f3a52e]"
                />

                {/* Cyan secondary elliptical orbital ring */}
                <ellipse
                  cx="160"
                  cy="170"
                  rx="135"
                  ry="42"
                  transform="rotate(15 160 170)"
                  stroke="#31e2da"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                  opacity="0.45"
                />

                {/* Inner Shield Matrix Fill */}
                <g clipPath="url(#shieldShape)">
                  <rect x="0" y="0" width="320" height="360" fill="url(#shieldMatrix)" />
                  {/* Subtle vertical scan lines */}
                  <line x1="80" y1="0" x2="80" y2="360" stroke="#31e2da" strokeWidth="0.5" strokeOpacity="0.1" />
                  <line x1="120" y1="0" x2="120" y2="360" stroke="#31e2da" strokeWidth="0.5" strokeOpacity="0.15" />
                  <line x1="160" y1="0" x2="160" y2="360" stroke="#31e2da" strokeWidth="0.8" strokeOpacity="0.25" />
                  <line x1="200" y1="0" x2="200" y2="360" stroke="#31e2da" strokeWidth="0.5" strokeOpacity="0.15" />
                  <line x1="240" y1="0" x2="240" y2="360" stroke="#31e2da" strokeWidth="0.5" strokeOpacity="0.1" />
                </g>

                {/* Outer Shield Neon Outline */}
                <path
                  d="M160 20 C220 20, 270 45, 275 110 C280 200, 205 275, 160 310 C115 275, 40 200, 45 110 C50 45, 100 20, 160 20 Z"
                  stroke="url(#shieldBorderGrad)"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Secondary inner contour outline */}
                <path
                  d="M160 34 C210 34, 252 56, 256 112 C260 188, 198 253, 160 285 C122 253, 60 188, 64 112 C68 56, 110 34, 160 34 Z"
                  stroke="#31e2da"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  strokeOpacity="0.4"
                  fill="none"
                />

                {/* Center Padlock Neon Icon */}
                {/* Padlock Shackle */}
                <path
                  d="M136 150 V124 C136 110.745 146.745 100 160 100 C173.255 100 184 110.745 184 124 V150"
                  stroke="url(#padlockGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Padlock Body */}
                <rect
                  x="126"
                  y="150"
                  width="68"
                  height="54"
                  rx="9"
                  stroke="url(#padlockGrad)"
                  strokeWidth="3"
                  fill="#07191e"
                  fillOpacity="0.9"
                />
                {/* Keyhole */}
                <circle cx="160" cy="172" r="5" fill="#83fff8" />
                <path
                  d="M158 175 L156 188 H164 L162 175 Z"
                  fill="#83fff8"
                />
              </svg>
            </div>

            {/* Meta tags & Quote adjacent to Shield */}
            <div className="flex flex-col justify-between py-2 space-y-8">
              {/* Upper Micro-Specs */}
              <div className="flex items-start gap-5">
                <div className="flex flex-col text-right font-mono text-[10.5px] tracking-widest text-[#78939a] leading-relaxed">
                  <span>IDEAS</span>
                  <span>STRATEGIES</span>
                  <span>CODE</span>
                  <span>RESULTS</span>
                  <span className="text-white font-semibold">STAYS YOURS</span>
                  <div className="w-5 h-[2px] bg-[#31e2da] self-end mt-1.5" />
                </div>

                <div className="w-[1px] h-20 bg-cyan-900/40" />

                <div className="flex flex-col font-mono text-[10.5px] tracking-widest text-[#78939a] leading-relaxed">
                  <span>DISCIPLINE</span>
                  <span>DATA</span>
                  <span className="text-[#31e2da] font-medium">BETTER DECISIONS</span>
                </div>
              </div>

              {/* Lower Founder Quote */}
              <div className="max-w-[240px]">
                <blockquote className="text-sm sm:text-[15px] italic text-[#d5e2e5] font-light leading-snug">
                  &ldquo;Your edge is your most valuable asset. We protect it.&rdquo;
                </blockquote>
                <span className="font-mono text-xs uppercase tracking-widest text-[#31e2da] font-semibold mt-2 block">
                  — HUNG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 4 SECURITY PILLARS GRID ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SECURITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-[#071519] border border-cyan-900/35 hover:border-cyan-400/70 rounded-2xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_32px_rgba(49,226,218,0.12)] hover:-translate-y-1"
              >
                {/* Card Header: Icon & ID Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#091f26] border border-cyan-500/30 group-hover:border-cyan-400 flex items-center justify-center text-[#31e2da] group-hover:text-[#83fff8] transition-all duration-300 shadow-[inset_0_0_12px_rgba(49,226,218,0.1)]">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-cyan-500/40 group-hover:text-cyan-400/80 transition-colors">
                    {pillar.id}
                  </span>
                </div>

                {/* Title & Body */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#9cb0b4] leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Divider & Tag */}
                <div className="pt-4 border-t border-cyan-950/50 group-hover:border-cyan-900/70 transition-colors">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-cyan-400/80 group-hover:text-[#83fff8] font-medium transition-colors">
                    {pillar.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================== CANDLESTICK AMBIENCE GRAPHIC ===================== */}
        <div className="relative w-full h-12 mb-6 pointer-events-none opacity-40 overflow-hidden flex items-end justify-center">
          <svg
            viewBox="0 0 1000 40"
            className="w-full h-full max-w-5xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Candle wicks and bodies simulating glowing quant chart */}
            <line x1="50" y1="20" x2="50" y2="38" stroke="#31e2da" strokeWidth="1" />
            <rect x="48" y="24" width="4" height="10" fill="#31e2da" />

            <line x1="85" y1="12" x2="85" y2="36" stroke="#31e2da" strokeWidth="1" />
            <rect x="83" y="16" width="4" height="14" fill="#31e2da" />

            <line x1="120" y1="18" x2="120" y2="38" stroke="#f3a52e" strokeWidth="1" />
            <rect x="118" y="22" width="4" height="12" fill="#f3a52e" />

            <line x1="155" y1="8" x2="155" y2="35" stroke="#31e2da" strokeWidth="1" />
            <rect x="153" y="12" width="4" height="16" fill="#31e2da" />

            <line x1="190" y1="14" x2="190" y2="38" stroke="#31e2da" strokeWidth="1" />
            <rect x="188" y="18" width="4" height="15" fill="#31e2da" />

            <line x1="225" y1="5" x2="225" y2="36" stroke="#31e2da" strokeWidth="1" />
            <rect x="223" y="10" width="4" height="18" fill="#31e2da" />

            <line x1="260" y1="15" x2="260" y2="38" stroke="#f3a52e" strokeWidth="1" />
            <rect x="258" y="20" width="4" height="11" fill="#f3a52e" />

            <line x1="480" y1="8" x2="480" y2="38" stroke="#f3a52e" strokeWidth="1" />
            <rect x="478" y="14" width="4" height="18" fill="#f3a52e" />

            <line x1="515" y1="4" x2="515" y2="34" stroke="#31e2da" strokeWidth="1" />
            <rect x="513" y="8" width="4" height="20" fill="#31e2da" />

            <line x1="550" y1="10" x2="550" y2="36" stroke="#31e2da" strokeWidth="1" />
            <rect x="548" y="14" width="4" height="16" fill="#31e2da" />

            <line x1="585" y1="6" x2="585" y2="32" stroke="#f3a52e" strokeWidth="1" />
            <rect x="583" y="12" width="4" height="14" fill="#f3a52e" />

            <line x1="620" y1="15" x2="620" y2="38" stroke="#31e2da" strokeWidth="1" />
            <rect x="618" y="20" width="4" height="12" fill="#31e2da" />

            <line x1="840" y1="10" x2="840" y2="36" stroke="#31e2da" strokeWidth="1" />
            <rect x="838" y="15" width="4" height="15" fill="#31e2da" />

            <line x1="875" y1="5" x2="875" y2="32" stroke="#31e2da" strokeWidth="1" />
            <rect x="873" y="10" width="4" height="16" fill="#31e2da" />

            <line x1="910" y1="16" x2="910" y2="38" stroke="#f3a52e" strokeWidth="1" />
            <rect x="908" y="22" width="4" height="10" fill="#f3a52e" />

            <line x1="945" y1="8" x2="945" y2="34" stroke="#31e2da" strokeWidth="1" />
            <rect x="943" y="14" width="4" height="15" fill="#31e2da" />
          </svg>
        </div>

        {/* ===================== BOTTOM FOOTER NOTE ===================== */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-cyan-950/40">
          {/* Left: Built for Serious Traders */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#091f26] border border-cyan-500/30 flex items-center justify-center text-[#31e2da] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Built for serious traders, teams, and research partners.
              </p>
              <p className="font-mono text-[11px] tracking-wider text-cyan-400 font-medium">
                TRUST ENABLES BETTER RESEARCH.
              </p>
            </div>
          </div>

          {/* Center: Domain & Workflow (matches image reference) */}
          <div className="hidden md:flex flex-col items-center justify-center text-center font-mono text-[11px] text-[#6d858b] tracking-wider">
            <span className="text-[#8ea6ac]">TRADING.PHAMPHUNGUYENHUNG.COM</span>
            <span className="text-[10px] text-[#556e74] mt-0.5">
              RESEARCH &nbsp;/&nbsp; BACKTEST &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; REPEAT
            </span>
          </div>

          {/* Right: Same Ideas / Brighter Tomorrow */}
          <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-[#6d858b] tracking-wider">
            <div className="w-4 h-[2px] bg-[#31e2da] mb-1.5" />
            <span className="text-[#8ea6ac]">SAME IDEAS.</span>
            <span className="text-[10px] text-[#556e74]">A BRIGHTER TOMORROW.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section08_YourEdge;
