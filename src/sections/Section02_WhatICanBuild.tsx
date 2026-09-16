import React from 'react';
import {
  BarChart3,
  Database,
  Settings2,
  Zap,
  TrendingUp,
  Search,
  ArrowRight,
  Lock,
} from 'lucide-react';

interface BuildCardItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  workflow: string[];
}

const BUILD_SERVICES: BuildCardItem[] = [
  {
    id: 'strategy-research',
    icon: BarChart3,
    title: 'Strategy Research',
    description: 'Turn a trading hypothesis into explicit rules.',
    workflow: ['IDEA', 'RULES', 'TESTABLE STRATEGY'],
  },
  {
    id: 'backtesting',
    icon: Database,
    title: 'Backtesting',
    description: 'Test strategies with realistic spread, slippage and fees.',
    workflow: ['HISTORICAL DATA', 'REALISTIC COSTS', 'METRICS'],
  },
  {
    id: 'strategy-optimization',
    icon: Settings2,
    title: 'Strategy Optimization',
    description: 'Tune parameters without blindly curve-fitting.',
    workflow: ['PARAMETER SEARCH', 'ROBUSTNESS', 'STABILITY'],
  },
  {
    id: 'trading-automation',
    icon: Zap,
    title: 'Trading Automation',
    description: 'Convert validated logic into automated execution.',
    workflow: ['SIGNALS', 'EXECUTION', 'MONITORING'],
  },
  {
    id: 'trading-analytics',
    icon: TrendingUp,
    title: 'Trading Analytics',
    description: 'Equity curve, expectancy, drawdown, win rate and R distribution.',
    workflow: ['PERFORMANCE', 'RISK', 'DEEP INSIGHTS'],
  },
  {
    id: 'existing-system-audit',
    icon: Search,
    title: 'Existing System Audit',
    description: 'Find leakage, overfitting and unrealistic assumptions.',
    workflow: ['DIAGNOSE', 'VALIDATE', 'IMPROVE'],
  },
];

interface SparklineProps {
  symbol: string;
  change: string;
  isPositive: boolean;
  points: string;
}

const MarketTicker: React.FC<SparklineProps> = ({ symbol, change, isPositive, points }) => {
  const strokeColor = isPositive ? '#22d3ee' : '#f59e0b';
  const textColor = isPositive ? 'text-cyan-400' : 'text-amber-400';

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-3 text-[11px] font-mono">
        <span className="text-slate-400 font-medium tracking-wide">{symbol}</span>
        <span className={`font-semibold ${textColor}`}>{change}</span>
      </div>
      <svg className="w-24 h-6 overflow-visible" viewBox="0 0 100 24" fill="none">
        <polyline
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    </div>
  );
};

export const Section02_WhatICanBuild: React.FC = () => {
  return (
    <section
      id="what-i-can-build"
      className="relative min-h-screen py-24 md:py-32 bg-[#040e11] text-[#f4f7f7] overflow-hidden border-t border-cyan-500/10"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(49, 226, 218, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(49, 226, 218, 0.4) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-[140px]" />

        {/* Candlestick & Globe Visual Elements in Upper Right */}
        <div className="hidden xl:block absolute top-12 right-8 w-[420px] h-[280px] opacity-40">
          {/* Subtle Candlesticks */}
          <svg className="w-full h-full" viewBox="0 0 400 240" fill="none">
            {/* Candle wicks & bodies */}
            <g opacity="0.6">
              <line x1="80" y1="130" x2="80" y2="180" stroke="#f59e0b" strokeWidth="1" />
              <rect x="76" y="145" width="8" height="25" fill="#f59e0b" rx="1" />

              <line x1="110" y1="110" x2="110" y2="165" stroke="#22d3ee" strokeWidth="1" />
              <rect x="106" y="120" width="8" height="30" fill="#22d3ee" rx="1" />

              <line x1="140" y1="90" x2="140" y2="150" stroke="#22d3ee" strokeWidth="1" />
              <rect x="136" y="100" width="8" height="35" fill="#22d3ee" rx="1" />

              <line x1="170" y1="100" x2="170" y2="160" stroke="#f59e0b" strokeWidth="1" />
              <rect x="166" y="115" width="8" height="20" fill="#f59e0b" rx="1" />

              <line x1="200" y1="65" x2="200" y2="135" stroke="#22d3ee" strokeWidth="1" />
              <rect x="196" y="80" width="8" height="40" fill="#22d3ee" rx="1" />

              <line x1="230" y1="50" x2="230" y2="110" stroke="#22d3ee" strokeWidth="1" />
              <rect x="226" y="60" width="8" height="35" fill="#22d3ee" rx="1" />

              <line x1="260" y1="40" x2="260" y2="95" stroke="#22d3ee" strokeWidth="1" />
              <rect x="256" y="48" width="8" height="32" fill="#22d3ee" rx="1" />

              <line x1="290" y1="20" x2="290" y2="80" stroke="#f59e0b" strokeWidth="1" />
              <rect x="286" y="32" width="8" height="26" fill="#f59e0b" rx="1" />

              <line x1="320" y1="10" x2="320" y2="65" stroke="#22d3ee" strokeWidth="1" />
              <rect x="316" y="18" width="8" height="35" fill="#22d3ee" rx="1" />
            </g>
          </svg>

          {/* Floating Performance Tag */}
          <div className="absolute top-14 left-16 flex items-center gap-2 bg-[#061c21]/90 border border-cyan-500/30 px-3 py-1.5 rounded-md shadow-lg shadow-cyan-950/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <div className="text-[11px] font-mono leading-tight">
              <span className="text-cyan-400 font-semibold">XAUUSD</span>{' '}
              <span className="text-emerald-400 font-bold">+12.4%</span>
              <span className="text-slate-400 text-[10px] ml-1">(YTD)</span>
            </div>
          </div>
        </div>

        {/* Floating Wireframe Globe Silhouette (Far Right) */}
        <div className="hidden 2xl:block absolute -right-24 top-1/4 w-96 h-96 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="130" stroke="#22d3ee" strokeWidth="0.75" strokeDasharray="3 3" />
            <ellipse cx="150" cy="150" rx="130" ry="50" stroke="#22d3ee" strokeWidth="0.75" strokeDasharray="2 4" />
            <ellipse cx="150" cy="150" rx="60" ry="130" stroke="#22d3ee" strokeWidth="0.75" strokeDasharray="2 4" />
            <line x1="20" y1="150" x2="280" y2="150" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Telemetry vertical markings (Left margin) */}
        <div className="hidden 2xl:flex flex-col gap-8 absolute left-8 top-1/3 text-[10px] tracking-[0.25em] text-slate-600 font-mono">
          <div className="space-y-1">
            <div className="text-cyan-500/70">MARKETS</div>
            <div>DATA</div>
            <div>MODELS</div>
            <div>EXECUTION</div>
          </div>
          <div className="w-6 h-[1px] bg-cyan-500/30" />
        </div>

        {/* Telemetry vertical markings (Right margin) */}
        <div className="hidden 2xl:flex flex-col gap-10 absolute right-8 top-28 text-[10px] tracking-[0.25em] text-slate-600 font-mono text-right">
          <div className="space-y-1">
            <div className="text-slate-500">DISCIPLINE</div>
            <div>DATA</div>
            <div className="text-cyan-500/70">BETTER DECISIONS</div>
          </div>
          <div className="space-y-1 pt-8">
            <div>IDEAS</div>
            <div className="text-cyan-500/70">RESEARCH</div>
            <div>SYSTEMS</div>
            <div>REAL RESULTS</div>
          </div>
          <div className="space-y-1 pt-16">
            <div>GLOBAL MARKETS</div>
            <div className="text-cyan-500/70">SYSTEMATIC</div>
            <div>OPPORTUNITIES</div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="mb-14 md:mb-16">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-5 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-xs md:text-sm font-mono tracking-[0.22em] text-cyan-400 font-semibold uppercase">
              02 / WHAT I CAN BUILD
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 uppercase">
            WHAT I CAN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-200 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              BUILD.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-3xl leading-relaxed font-light">
            Turn your trading ideas into research systems — from hypothesis to validated, executable strategies.
          </p>
        </div>

        {/* 6 Grid Cards (2 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILD_SERVICES.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#061619]/80 border border-cyan-500/25 hover:border-cyan-400/60 shadow-[0_4px_24px_-2px_rgba(4,20,24,0.6)] hover:shadow-[0_12px_32px_-4px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                {/* Top Row: Icon, Titles & Action Arrow */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Glowing Icon Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#082226] border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_22px_rgba(34,211,238,0.3)] group-hover:border-cyan-300 transition-all shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.1]" />
                    </div>

                    {/* Arrow Circle Top Right */}
                    <div className="w-9 h-9 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400/60 group-hover:text-cyan-200 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-100 transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-slate-300/80 leading-relaxed min-h-[42px]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Workflow Pipeline */}
                <div className="mt-6 pt-4 border-t border-cyan-500/15">
                  <div className="flex items-center flex-wrap gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-cyan-400/80 font-medium">
                    {card.workflow.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="hover:text-cyan-200 transition-colors">{step}</span>
                        {idx < card.workflow.length - 1 && (
                          <span className="text-cyan-600/70 font-sans">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA Section */}
        <div className="mt-14 md:mt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base md:text-lg font-bold text-white bg-gradient-to-r from-[#0e8a91] via-[#1db2b9] to-[#2dd4bf] hover:from-[#119ea7] hover:via-[#26c7cf] hover:to-[#38e1e7] shadow-[0_0_28px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-cyan-300/40"
          >
            <span>Discuss Your Build</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Privacy & Confidentiality Badge */}
          <div className="mt-3.5 inline-flex items-center gap-2 text-xs md:text-sm text-slate-400 font-mono tracking-wide">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Your ideas stay confidential · NDA available</span>
          </div>
        </div>

        {/* Footer Sub-Bar: Quote (Left) & Sparklines (Right) */}
        <div className="mt-14 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Quote Left */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm md:text-base italic text-slate-300/85 font-serif">
              “Ideas are easy. Systems make them real.”
            </p>
            <p className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
              — HUNG
            </p>
          </div>

          {/* Market Sparklines Right */}
          <div className="flex items-center gap-6 sm:gap-8 bg-[#051619]/60 px-5 py-3 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <MarketTicker
              symbol="XAUUSD"
              change="+0.42%"
              isPositive={true}
              points="0,18 15,16 30,19 45,12 60,14 75,7 90,9 100,4"
            />
            <div className="w-[1px] h-8 bg-cyan-500/20" />
            <MarketTicker
              symbol="EURUSD"
              change="-0.18%"
              isPositive={false}
              points="0,6 15,8 30,5 45,13 60,11 75,17 90,15 100,20"
            />
            <div className="w-[1px] h-8 bg-cyan-500/20" />
            <MarketTicker
              symbol="BTCUSD"
              change="+1.36%"
              isPositive={true}
              points="0,20 15,17 30,18 45,11 60,8 75,12 90,5 100,2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02_WhatICanBuild;
