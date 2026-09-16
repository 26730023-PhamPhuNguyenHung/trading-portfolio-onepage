import React from 'react';
import {
  Database,
  FileCode2,
  Settings2,
  BarChart3,
  ShieldCheck,
  Play,
  Activity,
  ArrowRight,
} from 'lucide-react';

interface PipelineStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: 'cyan' | 'amber';
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'market-data',
    stepNumber: '01',
    title: 'Market Data',
    description: 'Collect and normalize multi-asset data (Forex, Gold, Crypto, Futures).',
    icon: <Database className="w-6 h-6 text-[#31e2da]" />,
    accentColor: 'cyan',
  },
  {
    id: 'research-engine',
    stepNumber: '02',
    title: 'Research Engine',
    description: 'Clean data, engineer features, and generate research datasets.',
    icon: <FileCode2 className="w-6 h-6 text-[#31e2da]" />,
    accentColor: 'cyan',
  },
  {
    id: 'strategy-logic',
    stepNumber: '03',
    title: 'Strategy Logic',
    description: 'Translate ideas into rule-based or ML-driven strategies.',
    icon: <Settings2 className="w-6 h-6 text-[#f3a52e]" />,
    accentColor: 'amber',
  },
  {
    id: 'backtest-engine',
    stepNumber: '04',
    title: 'Backtest Engine',
    description: 'Run high-performance backtests with realistic market conditions.',
    icon: <BarChart3 className="w-6 h-6 text-[#31e2da]" />,
    accentColor: 'cyan',
  },
  {
    id: 'validation',
    stepNumber: '05',
    title: 'Validation',
    description: 'Evaluate robustness across multiple markets, timeframes and risk scenarios.',
    icon: <ShieldCheck className="w-6 h-6 text-[#31e2da]" />,
    accentColor: 'cyan',
  },
  {
    id: 'execution',
    stepNumber: '06',
    title: 'Execution',
    description: 'Deploy to live trading via MetaTrader 5 and automated systems.',
    icon: <Play className="w-6 h-6 text-[#f3a52e] fill-[#f3a52e]/20" />,
    accentColor: 'amber',
  },
  {
    id: 'monitoring',
    stepNumber: '07',
    title: 'Monitoring',
    description: 'Track performance, risk and system health 24/7.',
    icon: <Activity className="w-6 h-6 text-[#31e2da]" />,
    accentColor: 'cyan',
  },
];

interface TechBadge {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechBadge[] = [
  {
    name: 'Python',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.91 2C6.98 2 7.29 4.14 7.29 4.14V6.38H12.08V7.15H4.21C4.21 7.15 2 6.9 2 11.83C2 16.76 3.93 16.51 3.93 16.51H6.17V13.88C6.17 10.87 8.7 10.96 8.7 10.96H13.4V10.19H8.61V7.15H15.28C15.28 7.15 17.5 7.15 17.5 2.22C17.5 2.22 16.84 2 11.91 2ZM9.37 3.42C9.88 3.42 10.29 3.83 10.29 4.34C10.29 4.85 9.88 5.26 9.37 5.26C8.86 5.26 8.45 4.85 8.45 4.34C8.45 3.83 8.86 3.42 9.37 3.42Z"
          fill="#387EB8"
        />
        <path
          d="M12.09 22C17.02 22 16.71 19.86 16.71 19.86V17.62H11.92V16.85H19.79C19.79 16.85 22 17.1 22 12.17C22 7.24 20.07 7.49 20.07 7.49H17.83V10.12C17.83 13.13 15.3 13.04 15.3 13.04H10.6V13.81H15.39V16.85H8.72C8.72 16.85 6.5 16.85 6.5 21.78C6.5 21.78 7.16 22 12.09 22ZM14.63 20.58C14.12 20.58 13.71 20.17 13.71 19.66C13.71 19.15 14.12 18.74 14.63 18.74C15.14 18.74 15.55 19.15 15.55 19.66C15.55 20.17 15.14 20.58 14.63 20.58Z"
          fill="#FFE052"
        />
      </svg>
    ),
  },
  {
    name: 'MQL5',
    icon: (
      <span className="font-mono text-xs font-black tracking-tighter text-[#31e2da] bg-cyan-950/80 px-1 py-0.5 rounded border border-cyan-500/40">
        MQL5
      </span>
    ),
  },
  {
    name: 'MetaTrader 5',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="11" r="5" fill="#3B82F6" />
        <circle cx="11" cy="27" r="5" fill="#10B981" />
        <circle cx="29" cy="27" r="5" fill="#EF4444" />
        <path d="M20 16L14 23M20 16L26 23M16 27H24" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Pandas',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="11" width="3.5" height="11" rx="1.5" fill="#150458" stroke="#387EB8" strokeWidth="0.8" />
        <rect x="11.5" y="6" width="3.5" height="16" rx="1.5" fill="#E70488" />
        <rect x="18" y="9" width="3.5" height="17" rx="1.5" fill="#150458" stroke="#387EB8" strokeWidth="0.8" />
        <rect x="24.5" y="13" width="3.5" height="9" rx="1.5" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: 'NumPy',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 8.5V19.5L14 25L24 19.5V8.5L14 3Z" stroke="#4D77CF" strokeWidth="1.6" fill="#061c28" />
        <path d="M14 25V14M24 8.5L14 14L4 8.5" stroke="#4D77CF" strokeWidth="1.6" />
        <path d="M11 11.5V17M11 11.5L17 17M17 11.5V17" stroke="#31e2da" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'DuckDB',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FFF000" stroke="#061a22" strokeWidth="1.2" />
        <circle cx="10" cy="9.5" r="1.6" fill="#061a22" />
        <circle cx="10.5" cy="9" r="0.6" fill="#FFFFFF" />
        <path d="M15 11.2C15 11.2 18.5 11.8 18.5 12.8C18.5 13.8 15 14.5 15 14.5Z" fill="#FF7700" stroke="#061a22" strokeWidth="0.8" />
        <path d="M6.5 14.5C8 17 12 17.5 16 15" stroke="#061a22" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'TradingView',
    icon: (
      <svg className="w-6 h-4 flex-shrink-0" viewBox="0 0 36 22" fill="none">
        <path d="M0 17.5C0 19.9853 2.01472 22 4.5 22H7.5V11H0V17.5Z" fill="#31e2da" />
        <path d="M10.5 22H17.5V0H10.5V22Z" fill="#ffffff" />
        <path d="M20.5 22H28C32.4183 22 36 18.4183 36 14C36 9.58172 32.4183 6 28 6H20.5V22Z" fill="#31e2da" />
      </svg>
    ),
  },
  {
    name: 'Cloudflare',
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.22 9.5a5.5 5.5 0 00-10.44-1.5A4.5 4.5 0 003 12.5C3 15 5 17 7.5 17h10.72a3.78 3.78 0 000-7.5z"
          fill="#F38020"
        />
        <path
          d="M19.78 17h.44A3.78 3.78 0 0022 13.22c0-1.89-1.38-3.46-3.22-3.72a5.52 5.52 0 00-.56 0c.28.64.44 1.34.44 2.08 0 .5-.08.98-.22 1.44H18.2a1.8 1.8 0 010 3.6z"
          fill="#FAAD3F"
        />
      </svg>
    ),
  },
];

const metrics = [
  { title: 'Modular', subtitle: 'Scalable architecture' },
  { title: 'Automated', subtitle: 'End-to-end pipeline' },
  { title: 'Reliable', subtitle: 'Production-ready' },
  { title: 'Future-proof', subtitle: 'Built for continuous research' },
];

export const Section07_Technology: React.FC = () => {
  return (
    <section
      id="technology"
      className="relative py-20 lg:py-28 bg-[#040e11] text-[#f4f7f7] border-t border-cyan-950/60 overflow-hidden"
    >
      {/* Background Datacenter Rack Graphic Simulation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(49,226,218,0.15),_transparent_70%)]" />
        {/* Subtle Server Rack Lines */}
        <div className="absolute right-6 top-12 hidden lg:grid grid-cols-4 gap-6 w-[480px] h-[340px] opacity-40">
          {[0, 1, 2, 3].map((rack) => (
            <div
              key={rack}
              className="border border-cyan-900/60 bg-[#031518] rounded p-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                </div>
                <div className="h-0.5 bg-cyan-900/80 w-full" />
                <div className="h-0.5 bg-cyan-900/40 w-3/4" />
                <div className="h-0.5 bg-cyan-900/40 w-full" />
              </div>
              <div className="space-y-1">
                <div className="h-0.5 bg-cyan-900/60 w-full" />
                <div className="flex justify-between items-center text-[8px] text-cyan-700 font-mono">
                  <span>RACK_{rack + 1}</span>
                  <span className="w-1 h-1 rounded-full bg-cyan-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto px-6 relative z-10">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 lg:mb-16">
          {/* Left Column: Tagline, Headline & Subtitle */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-[#31e2da] rounded-full inline-block" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#31e2da] uppercase">
                TECHNOLOGY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              TECHNOLOGY BEHIND <br />
              <span className="text-[#31e2da]">THE RESEARCH.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#9cb0b4] max-w-2xl leading-relaxed">
              We build reliable research pipelines and automation infrastructure to turn trading
              ideas into tested, executable strategies — from data to deployment.
            </p>
          </div>

          {/* Center-Right Technical Loop & Quote Columns */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-8 pt-2">
            {/* Tech Pipeline Loop Box */}
            <div className="relative border-l-2 border-[#194b52] pl-4 py-1 font-mono text-[11px] text-[#31e2da] space-y-1 tracking-wider bg-[#06191d]/40 rounded-r-lg pr-4 border border-[#194b52]/40">
              <div className="text-[#83fff8] font-bold">IDEAS</div>
              <div className="text-cyan-600">↓</div>
              <div>RESEARCH</div>
              <div className="text-cyan-600">↓</div>
              <div>VALIDATION</div>
              <div className="text-cyan-600">↓</div>
              <div>EXECUTION</div>
              <div className="text-cyan-600">↓</div>
              <div className="text-[#83fff8] font-bold">REAL RESULTS.</div>
            </div>

            {/* Right Meta Column & Quote */}
            <div className="flex flex-col justify-between h-full space-y-5">
              <div className="font-mono text-[10px] text-[#6d858b] tracking-[0.25em] space-y-1">
                <div>DATA</div>
                <div>ALGORITHMS</div>
                <div>AUTOMATION</div>
                <div>BETTER DECISIONS</div>
              </div>

              <div className="pt-2 border-t border-[#13373d]">
                <blockquote className="text-sm md:text-base text-[#e2ecee] font-serif italic mb-1">
                  “Technology compounds research.”
                </blockquote>
                <p className="text-xs font-mono font-medium text-[#9cb0b4] tracking-wider">
                  — HUNG
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline 7 Steps Architecture Container */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:items-stretch xl:justify-between gap-3 lg:gap-2">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div
                  className="flex-1 min-w-[170px] bg-[#071a1e] border border-[#17444b] hover:border-[#31e2da] rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(49,226,218,0.15)] group"
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-[#041114] border border-[#153f46] flex items-center justify-center mb-4 group-hover:border-[#31e2da]/50 transition-colors">
                      {step.icon}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-[#83fff8] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#9cb0b4] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Micro Footer Indicator */}
                  <div className="mt-4 pt-3 border-t border-[#113237] flex items-center justify-between text-[10px] font-mono text-[#6d858b]">
                    <span>PHASE</span>
                    <span className={step.accentColor === 'amber' ? 'text-[#f3a52e]' : 'text-[#31e2da]'}>
                      {step.stepNumber}
                    </span>
                  </div>
                </div>

                {/* Arrow Connector (Hidden on Mobile/Wrap, Visible on XL Flex Row) */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="hidden xl:flex items-center justify-center text-[#31e2da] px-1 opacity-75">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Technology Stack Sub-Section */}
        <div className="mb-16 pt-6 border-t border-[#13373d]">
          {/* Tech Stack Header & Right Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[2px] bg-[#31e2da] rounded-full inline-block" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#31e2da] uppercase">
                TECHNOLOGY STACK
              </span>
            </div>
            <div className="text-[10px] font-mono text-[#6d858b] tracking-[0.2em] uppercase">
              TOOLS THAT TURN IDEAS INTO OPPORTUNITIES
            </div>
          </div>

          {/* Badges Flow */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#06171b] border border-[#17464e] hover:border-[#31e2da] hover:shadow-[0_4px_20px_rgba(49,226,218,0.15)] transition-all duration-200 cursor-default"
              >
                {tech.icon}
                <span className="text-sm font-semibold text-[#f4f7f7] tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="pt-8 border-t border-[#143a40] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* 4 Pillar Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 flex-1">
            {metrics.map((item, idx) => (
              <div key={item.title} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#31e2da]" />
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </span>
                </div>
                <div className="text-xs text-[#9cb0b4] pl-3.5">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Branding / Domain URL */}
          <div className="lg:text-right font-mono border-t lg:border-t-0 border-[#143a40] pt-4 lg:pt-0">
            <div className="text-xs font-bold text-[#83fff8] tracking-widest uppercase">
              TRADING.PHAMPHUNGUYENHUNG.COM
            </div>
            <div className="text-[10px] text-[#6d858b] tracking-[0.25em] uppercase mt-1">
              RESEARCH &nbsp;/&nbsp; BACKTEST &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; REPEAT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section07_Technology;
