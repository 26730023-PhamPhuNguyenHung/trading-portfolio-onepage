import React, { useState } from 'react';
import {
  Target,
  Database,
  Search,
  BarChart3,
  Info,
  Lock,
  ArrowRight,
  FileText,
  TrendingUp,
  X,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface SetupData {
  name: string;
  share: number;
  trades: number;
  winRate: number;
  avgR: number;
}

interface RegimeRow {
  setup: string;
  trendingUp: number;
  ranging: number;
  trendingDown: number;
  highVol: number;
}

const SETUPS: SetupData[] = [
  { name: 'Breakout', share: 28, trades: 287, winRate: 54.2, avgR: 1.8 },
  { name: 'Liquidity Sweep', share: 22, trades: 225, winRate: 61.3, avgR: 1.6 },
  { name: 'Reversal', share: 18, trades: 184, winRate: 48.9, avgR: 1.7 },
  { name: 'Continuation', share: 14, trades: 143, winRate: 52.4, avgR: 1.4 },
  { name: 'Inside Bar', share: 10, trades: 102, winRate: 45.1, avgR: 1.2 },
  { name: 'Other', share: 8, trades: 83, winRate: 42.0, avgR: 0.9 },
];

const REGIME_MATRIX: RegimeRow[] = [
  { setup: 'Breakout', trendingUp: 1.8, ranging: 0.4, trendingDown: 1.2, highVol: 0.9 },
  { setup: 'Liquidity Sweep', trendingUp: 1.1, ranging: 1.6, trendingDown: 1.3, highVol: 0.8 },
  { setup: 'Reversal', trendingUp: 0.6, ranging: 1.4, trendingDown: 1.8, highVol: 1.1 },
  { setup: 'Continuation', trendingUp: 1.5, ranging: 0.8, trendingDown: 1.4, highVol: 0.7 },
  { setup: 'Inside Bar', trendingUp: 0.9, ranging: 1.2, trendingDown: 0.6, highVol: 1.3 },
];

// Helper để xác định màu ô Heatmap theo giá trị R
function getHeatmapColor(value: number): { bg: string; text: string; border: string } {
  if (value >= 1.5) {
    return {
      bg: 'bg-[#0e5c52]',
      text: 'text-[#5eead4]',
      border: 'border-[#14b8a6]/40',
    };
  }
  if (value >= 1.1) {
    return {
      bg: 'bg-[#0c443e]',
      text: 'text-[#99f6e4]',
      border: 'border-[#0d9488]/30',
    };
  }
  if (value >= 0.8) {
    return {
      bg: 'bg-[#2b352e]',
      text: 'text-[#d1d5db]',
      border: 'border-[#4b5563]/30',
    };
  }
  return {
    bg: 'bg-[#4a241b]',
    text: 'text-[#fca5a5]',
    border: 'border-[#ef4444]/30',
  };
}

export const Section04_FeaturedResearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'equity' | 'distribution' | 'regime'>('equity');
  const [hoveredDataPoint, setHoveredDataPoint] = useState<{
    date: string;
    returnPct: string;
    dd: string;
  } | null>(null);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);
  const [isMethodologyModalOpen, setIsMethodologyModalOpen] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<{
    setup: string;
    regime: string;
    val: number;
  } | null>(null);

  // SVG Curve path points (Jan 2024 - Sep 2024, growth to +142.6%)
  // ViewBox: 0 0 700 240
  // Y-axis mapping: 150% -> 30, 100% -> 75, 50% -> 120, 0% -> 165, -50% -> 210
  const equityPoints = [
    { x: 30, y: 165, date: 'Jan 02', returnPct: '0.0%', dd: '0.0%' },
    { x: 55, y: 162, date: 'Jan 15', returnPct: '+3.2%', dd: '-1.4%' },
    { x: 80, y: 168, date: 'Jan 28', returnPct: '-2.1%', dd: '-3.5%' },
    { x: 105, y: 158, date: 'Feb 10', returnPct: '+7.8%', dd: '-1.1%' },
    { x: 135, y: 160, date: 'Feb 24', returnPct: '+5.4%', dd: '-2.8%' },
    { x: 165, y: 152, date: 'Mar 08', returnPct: '+14.2%', dd: '-1.9%' },
    { x: 195, y: 147, date: 'Mar 22', returnPct: '+19.8%', dd: '-2.3%' },
    { x: 225, y: 143, date: 'Apr 05', returnPct: '+24.5%', dd: '-1.5%' },
    { x: 245, y: 135, date: 'Apr 18', returnPct: '+33.4%', dd: '-3.2%' },
    { x: 275, y: 140, date: 'Apr 30', returnPct: '+28.0%', dd: '-5.1%' },
    { x: 305, y: 125, date: 'May 14', returnPct: '+44.2%', dd: '-2.0%' },
    { x: 335, y: 129, date: 'May 28', returnPct: '+40.1%', dd: '-4.6%' },
    { x: 365, y: 118, date: 'Jun 11', returnPct: '+52.3%', dd: '-2.2%' },
    { x: 395, y: 112, date: 'Jun 25', returnPct: '+58.9%', dd: '-1.8%' },
    { x: 425, y: 116, date: 'Jul 08', returnPct: '+54.5%', dd: '-3.9%' },
    { x: 455, y: 102, date: 'Jul 22', returnPct: '+70.1%', dd: '-1.5%' },
    { x: 485, y: 94, date: 'Aug 05', returnPct: '+79.0%', dd: '-2.1%' },
    { x: 515, y: 99, date: 'Aug 18', returnPct: '+73.4%', dd: '-6.8%' },
    { x: 545, y: 82, date: 'Aug 30', returnPct: '+92.3%', dd: '-1.4%' },
    { x: 585, y: 68, date: 'Sep 12', returnPct: '+108.0%', dd: '-2.7%' },
    { x: 625, y: 48, date: 'Sep 24', returnPct: '+130.4%', dd: '-1.2%' },
    { x: 670, y: 36, date: 'Sep 30', returnPct: '+142.6%', dd: '-0.8%' },
  ];

  // SVG Line path string
  const linePath = equityPoints.reduce(
    (acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ''
  );

  // SVG Area path string
  const areaPath = `${linePath} L ${equityPoints[equityPoints.length - 1].x} 220 L ${equityPoints[0].x} 220 Z`;

  return (
    <section
      id="featured-research"
      className="relative py-20 md:py-28 bg-[#051013] text-[#f4f7f7] overflow-hidden border-t border-[#0e272d]"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_#31e2da]" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-cyan-400 font-semibold uppercase">
              FEATURED RESEARCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Featured Research:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200">
              XAUUSD Price Action
            </span>{' '}
            Research Engine
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl font-normal">
            From raw price action to a tested, rules-based trading framework.
          </p>
        </div>

        {/* 2-Column Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CỘT TRÁI: Interactive Visual Dashboard (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Khung Dashboard chính */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#07171a]/95 border border-[#13373e] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md">
              {/* Tab Navigation Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#0f2d33]">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Asset Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a272c] border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    XAUUSD
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center space-x-1 sm:space-x-3 text-xs sm:text-sm">
                    <button
                      onClick={() => setActiveTab('equity')}
                      className={`px-2.5 sm:px-3 py-1 transition-all rounded font-medium relative ${
                        activeTab === 'equity'
                          ? 'text-cyan-300 font-semibold after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_8px_#31e2da]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Equity Curve
                    </button>
                    <button
                      onClick={() => setActiveTab('distribution')}
                      className={`px-2.5 sm:px-3 py-1 transition-all rounded font-medium relative ${
                        activeTab === 'distribution'
                          ? 'text-cyan-300 font-semibold after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_8px_#31e2da]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Setup Distribution
                    </button>
                    <button
                      onClick={() => setActiveTab('regime')}
                      className={`px-2.5 sm:px-3 py-1 transition-all rounded font-medium relative ${
                        activeTab === 'regime'
                          ? 'text-cyan-300 font-semibold after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_8px_#31e2da]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Regime Analysis
                    </button>
                  </div>
                </div>

                {/* Backtest metadata tag */}
                <div className="text-right font-mono">
                  <div className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-semibold">
                    9M BACKTEST
                  </div>
                  <div className="text-[11px] text-slate-400">JAN 2024 – SEP 2024</div>
                </div>
              </div>

              {/* CARD 1: Main Equity Curve Chart */}
              <div className="mt-4 pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-200">Equity Curve</span>
                    <div className="group relative cursor-pointer">
                      <Info className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-300 transition" />
                      <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-2 bg-[#040e10] border border-cyan-500/30 rounded text-[11px] text-slate-300 shadow-xl z-20">
                        Compounded balance growth calculated on strictly out-of-sample H1 Gold trades with 1.5 pip spread + commission.
                      </div>
                    </div>
                  </div>

                  {/* Return Badge */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end text-[10px] text-slate-400 tracking-wider">
                      <span>Total Return</span>
                      <TrendingUp className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300 tracking-tight drop-shadow-[0_0_12px_rgba(49,226,218,0.3)]">
                      +142.6%
                    </div>
                  </div>
                </div>

                {/* Interactive SVG Chart Container */}
                <div className="relative w-full h-[220px] sm:h-[260px] bg-[#051114]/80 rounded-xl border border-[#0d2a30] p-2 sm:p-3 overflow-hidden">
                  {/* Tooltip Overlay */}
                  {hoveredDataPoint && (
                    <div className="absolute top-3 left-4 z-10 bg-[#071f24]/90 border border-cyan-500/40 rounded px-2.5 py-1 text-xs font-mono shadow-lg flex items-center gap-3">
                      <span className="text-slate-300">{hoveredDataPoint.date}</span>
                      <span className="text-cyan-300 font-bold">{hoveredDataPoint.returnPct}</span>
                      <span className="text-amber-400 text-[11px]">DD: {hoveredDataPoint.dd}</span>
                    </div>
                  )}

                  <svg
                    viewBox="0 0 700 240"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      {/* Gradient fill for equity area */}
                      <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#31e2da" stopOpacity="0.28" />
                        <stop offset="50%" stopColor="#31e2da" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#31e2da" stopOpacity="0.0" />
                      </linearGradient>

                      {/* Line glow filter */}
                      <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Horizontal Grid lines & Y-axis labels */}
                    {[
                      { val: '150%', y: 30 },
                      { val: '100%', y: 75 },
                      { val: '50%', y: 120 },
                      { val: '0%', y: 165 },
                      { val: '-50%', y: 210 },
                    ].map((grid, idx) => (
                      <g key={idx}>
                        <line
                          x1="30"
                          y1={grid.y}
                          x2="685"
                          y2={grid.y}
                          stroke="#0e2a30"
                          strokeDasharray={grid.val === '0%' ? 'none' : '3,3'}
                          strokeWidth={grid.val === '0%' ? '1.2' : '1'}
                        />
                        <text
                          x="22"
                          y={grid.y + 4}
                          textAnchor="end"
                          fill="#53747b"
                          fontSize="10"
                          fontFamily="monospace"
                        >
                          {grid.val}
                        </text>
                      </g>
                    ))}

                    {/* Area fill */}
                    <path d={areaPath} fill="url(#equityGrad)" />

                    {/* Main Equity Line with Glow */}
                    <path
                      d={linePath}
                      fill="none"
                      stroke="#31e2da"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#cyanGlow)"
                    />

                    {/* Interactive Points on hover */}
                    {equityPoints.map((pt, i) => (
                      <g
                        key={i}
                        className="cursor-pointer group"
                        onMouseEnter={() =>
                          setHoveredDataPoint({
                            date: pt.date,
                            returnPct: pt.returnPct,
                            dd: pt.dd,
                          })
                        }
                        onMouseLeave={() => setHoveredDataPoint(null)}
                      >
                        {/* Hover vertical crosshair */}
                        <line
                          x1={pt.x}
                          y1="25"
                          x2={pt.x}
                          y2="215"
                          stroke="#31e2da"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                          className="opacity-0 group-hover:opacity-60 transition-opacity"
                        />
                        {/* Invisible hit area */}
                        <circle cx={pt.x} cy={pt.y} r="12" fill="transparent" />
                        {/* Point dot */}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={i === equityPoints.length - 1 ? '4' : '2'}
                          fill="#83fff8"
                          stroke="#051013"
                          strokeWidth="1.5"
                          className="transition-all duration-200 group-hover:r-5 group-hover:fill-white"
                        />
                      </g>
                    ))}

                    {/* X-axis Timeline labels */}
                    {[
                      { month: 'Jan 2024', x: 30 },
                      { month: 'Feb', x: 110 },
                      { month: 'Mar', x: 180 },
                      { month: 'Apr', x: 260 },
                      { month: 'May', x: 320 },
                      { month: 'Jun', x: 380 },
                      { month: 'Jul', x: 440 },
                      { month: 'Aug', x: 530 },
                      { month: 'Sep', x: 650 },
                    ].map((item, idx) => (
                      <text
                        key={idx}
                        x={item.x}
                        y="234"
                        textAnchor="middle"
                        fill="#6d858b"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {item.month}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>

              {/* LƯỚI 2 BIỂU ĐỒ PHỤ BÊN DƯỚI (2 Columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {/* a) Setup Distribution Bar Chart */}
                <div
                  className={`p-3.5 sm:p-4 rounded-xl bg-[#051114]/90 border transition-all ${
                    activeTab === 'distribution'
                      ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(49,226,218,0.15)]'
                      : 'border-[#0f2d33]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-200">
                        Setup Distribution
                      </span>
                      <div className="group relative cursor-pointer">
                        <Info className="w-3 h-3 text-slate-400 hover:text-cyan-300" />
                        <div className="absolute left-0 bottom-full mb-1.5 hidden group-hover:block w-48 p-1.5 bg-[#040e10] border border-cyan-500/30 rounded text-[10px] text-slate-300 z-30 shadow-lg">
                          Breakdown of 1,024 trades classified by structural price action pattern.
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400/80">1,024 TRADES</span>
                  </div>

                  {/* Vertical Bars Chart */}
                  <div className="h-36 flex items-end justify-between gap-1.5 pt-4 pb-1 px-1 border-b border-[#0d2a30]">
                    {SETUPS.map((setup, idx) => {
                      // Height normalized to 28% max -> 100% height
                      const heightPercent = (setup.share / 28) * 85;
                      return (
                        <div
                          key={idx}
                          className="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer"
                        >
                          {/* Value above bar */}
                          <span className="text-[10px] font-mono text-cyan-300 font-bold mb-1 group-hover:text-white transition">
                            {setup.share}%
                          </span>

                          {/* Bar body */}
                          <div className="w-full bg-[#0d292f] rounded-t overflow-hidden flex flex-col justify-end">
                            <div
                              style={{ height: `${heightPercent}%` }}
                              className="w-full bg-gradient-to-t from-[#0e5c54] via-[#148378] to-[#31e2da] group-hover:brightness-125 transition-all duration-300 rounded-t shadow-[0_0_8px_rgba(49,226,218,0.2)]"
                            />
                          </div>

                          {/* Tooltip on bar hover */}
                          <div className="absolute bottom-full mb-6 hidden group-hover:flex flex-col gap-0.5 bg-[#040f12] border border-cyan-500/40 p-1.5 rounded text-[10px] font-mono z-30 whitespace-nowrap shadow-xl">
                            <span className="text-white font-bold">{setup.name}</span>
                            <span className="text-slate-400">Trades: {setup.trades}</span>
                            <span className="text-cyan-300">Win Rate: {setup.winRate}%</span>
                            <span className="text-emerald-400">Avg R: {setup.avgR}R</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* X-axis labels */}
                  <div className="flex justify-between gap-1 pt-1.5 text-[9px] sm:text-[10px] text-slate-400 font-medium">
                    {SETUPS.map((setup, idx) => (
                      <div key={idx} className="flex-1 text-center truncate" title={setup.name}>
                        {setup.name.split(' ')[0]}
                      </div>
                    ))}
                  </div>
                </div>

                {/* b) Regime Performance Heatmap Table */}
                <div
                  className={`p-3.5 sm:p-4 rounded-xl bg-[#051114]/90 border transition-all ${
                    activeTab === 'regime'
                      ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(49,226,218,0.15)]'
                      : 'border-[#0f2d33]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-200">
                        Regime Performance (R Multiple)
                      </span>
                      <div className="group relative cursor-pointer">
                        <Info className="w-3 h-3 text-slate-400 hover:text-cyan-300" />
                        <div className="absolute left-0 bottom-full mb-1.5 hidden group-hover:block w-52 p-1.5 bg-[#040e10] border border-cyan-500/30 rounded text-[10px] text-slate-300 z-30 shadow-lg">
                          Expected R-multiple payout per trade across distinct macroeconomic & volatility regimes.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Heatmap Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-[10px] sm:text-[11px] font-mono">
                      <thead>
                        <tr className="text-slate-400 border-b border-[#0d2a30]">
                          <th className="text-left font-normal py-1 pr-1"></th>
                          <th className="text-center font-normal py-1 px-1">Trend Up</th>
                          <th className="text-center font-normal py-1 px-1">Ranging</th>
                          <th className="text-center font-normal py-1 px-1">Trend Down</th>
                          <th className="text-center font-normal py-1 px-1">High Vol</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#0c242a]">
                        {REGIME_MATRIX.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-cyan-950/20 transition">
                            <td className="py-1 text-slate-300 font-sans text-[10px] pr-1 whitespace-nowrap">
                              {row.setup}
                            </td>

                            {[
                              { label: 'Trend Up', val: row.trendingUp },
                              { label: 'Ranging', val: row.ranging },
                              { label: 'Trend Down', val: row.trendingDown },
                              { label: 'High Vol', val: row.highVol },
                            ].map((col, cIdx) => {
                              const style = getHeatmapColor(col.val);
                              return (
                                <td
                                  key={cIdx}
                                  onMouseEnter={() =>
                                    setHoveredCell({
                                      setup: row.setup,
                                      regime: col.label,
                                      val: col.val,
                                    })
                                  }
                                  onMouseLeave={() => setHoveredCell(null)}
                                  className="text-center py-1 px-0.5"
                                >
                                  <div
                                    className={`py-0.5 px-1 rounded ${style.bg} ${style.text} border ${style.border} font-semibold transition hover:scale-105 cursor-default`}
                                  >
                                    {col.val.toFixed(1)}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Heatmap Legend */}
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#0d2a30] text-[9px] text-slate-400 font-mono">
                    <span>Lower</span>
                    <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#542820] via-[#2b352e] to-[#0e5c52]" />
                    <span>Higher</span>
                  </div>

                  {/* Interactive Status on Cell Hover */}
                  {hoveredCell && (
                    <div className="mt-1 text-[10px] text-cyan-300 font-mono text-center truncate">
                      {hoveredCell.setup} in {hoveredCell.regime}: {hoveredCell.val}R payout
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quote Badge phía dưới cột trái */}
            <div className="pt-2 pl-1 border-l-2 border-cyan-500/40">
              <p className="text-xs sm:text-sm italic text-slate-400">
                “Price action speaks. We just listen, test, and validate.”
              </p>
              <div className="text-[11px] font-mono font-semibold tracking-wider text-cyan-400/90 mt-1">
                — HUNG
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: Research Case Study Breakdown (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Problem */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#07171a]/70 border border-[#113238] hover:border-cyan-500/30 transition">
              <div className="w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(49,226,218,0.2)]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">Problem</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Discover repeatable price-action setups without relying on arbitrary indicators.
                </p>
              </div>
            </div>

            {/* 2. Dataset */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#07171a]/70 border border-[#113238] hover:border-cyan-500/30 transition">
              <div className="w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(49,226,218,0.2)]">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">Dataset</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  9 months of historical data (XAUUSD, H1). Clean, high-quality data with institutional trading hours.
                </p>
              </div>
            </div>

            {/* 3. Research */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#07171a]/70 border border-[#113238] hover:border-cyan-500/30 transition">
              <div className="w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(49,226,218,0.2)]">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">Research</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  40+ candidate setups, multiple market regimes, walk-forward validation, and robustness testing to identify durable edge.
                </p>
              </div>
            </div>

            {/* 4. Metrics Grid (Out-of-sample) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#07171a]/95 border border-[#13373e] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full border border-cyan-500/40 bg-cyan-950/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white">Metrics</span>{' '}
                  <span className="text-xs font-normal text-slate-400">(Out-of-sample)</span>
                </div>
              </div>

              {/* 6 Metrics Grid (3 columns x 2 rows) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {/* 1. Trades */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#051114] border border-[#0e2a30] text-center hover:border-cyan-500/30 transition">
                  <div className="text-lg sm:text-xl font-extrabold font-mono text-white">
                    1,024
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Trades</div>
                </div>

                {/* 2. Expectancy */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#051114] border border-[#0e2a30] text-center hover:border-cyan-500/30 transition">
                  <div className="text-lg sm:text-xl font-extrabold font-mono text-cyan-300">
                    0.42R
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Expectancy</div>
                </div>

                {/* 3. Profit Factor */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#051114] border border-[#0e2a30] text-center hover:border-cyan-500/30 transition">
                  <div className="text-lg sm:text-xl font-extrabold font-mono text-emerald-300">
                    2.31
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Profit Factor</div>
                </div>

                {/* 4. Max Drawdown */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#051114] border border-[#0e2a30] text-center hover:border-cyan-500/30 transition">
                  <div className="text-lg sm:text-xl font-extrabold font-mono text-amber-300">
                    -12.8%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Max Drawdown</div>
                </div>

                {/* 5. Sharpe Ratio */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#051114] border border-[#0e2a30] text-center hover:border-cyan-500/30 transition">
                  <div className="text-lg sm:text-xl font-extrabold font-mono text-cyan-300">
                    1.46
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Sharpe Ratio</div>
                </div>

                {/* 6. R Distribution Mini Histogram */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#051114] border border-[#0e2a30] text-center hover:border-cyan-500/30 transition flex flex-col justify-between items-center">
                  {/* Mini Histogram bars */}
                  <div className="h-6 w-full flex items-end justify-center gap-1">
                    <div className="w-1.5 h-2 bg-cyan-600/40 rounded-t" />
                    <div className="w-1.5 h-3.5 bg-cyan-500/60 rounded-t" />
                    <div className="w-1.5 h-6 bg-cyan-400 rounded-t shadow-[0_0_6px_#31e2da]" />
                    <div className="w-1.5 h-4.5 bg-cyan-400/80 rounded-t" />
                    <div className="w-1.5 h-3 bg-cyan-500/60 rounded-t" />
                    <div className="w-1.5 h-1.5 bg-cyan-600/40 rounded-t" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate w-full">
                    R Distribution
                  </div>
                </div>
              </div>
            </div>

            {/* 5. CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => setIsResearchModalOpen(true)}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-[#051013] font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(49,226,218,0.35)] hover:shadow-[0_0_28px_rgba(49,226,218,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Research</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMethodologyModalOpen(true)}
                className="flex-1 py-3 px-5 rounded-xl bg-[#071d22]/80 hover:bg-[#0c2a31] border border-[#143e46] hover:border-cyan-500/40 text-slate-200 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Read Methodology</span>
              </button>
            </div>

            {/* 6. Confidentiality note */}
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono justify-center lg:justify-start">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Full research report, charts and code available on request.</span>
            </div>

            {/* Sub Footer metadata */}
            <div className="pt-4 border-t border-[#0d2a30] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="tracking-wider">TRADING.PHAMPHUNGUNYENHUNG.COM</span>
              <span className="text-cyan-400/80">RESEARCH / BACKTEST / BUILD / REPEAT</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL 1: VIEW RESEARCH DEEP DIVE */}
      {isResearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#07171a] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 text-[#f4f7f7] shadow-[0_0_50px_rgba(49,226,218,0.2)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsResearchModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-[#0c262b] border border-[#153e46] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-1">
              <Layers className="w-4 h-4" />
              <span>Full Research Case Study</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              XAUUSD Price Action Research Engine
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Executive summary of the quantitative model, market structure extraction rules, and out-of-sample risk controls.
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-[#051114] border border-[#10343a]">
                <h4 className="font-semibold text-cyan-300 flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Primary Edge Drivers
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The model extracts edge by exploiting institutional liquidity pools during London and New York overlaps. Breakout setups demonstrated the highest raw payout (1.8R), while Liquidity Sweeps in ranging markets achieved the highest consistency (61.3% win rate).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#051114] border border-[#10343a]">
                <h4 className="font-semibold text-cyan-300 flex items-center gap-2 mb-1.5">
                  <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                  Risk Architecture & Position Sizing
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Dynamic fractional sizing based on ATR volatility clusters. Maximum portfolio heat is hard-capped at 1.5% per trade with daily circuit breakers halting execution if drawdown exceeds 3.0%.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#051114] border border-[#10343a]">
                <h4 className="font-semibold text-cyan-300 flex items-center gap-2 mb-1.5">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  Walk-Forward & Monte Carlo Stability
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tested across 50,000 Monte Carlo bootstrap iterations with random trade shuffling. 99% VaR of maximum drawdown remained below -15.4%, demonstrating robust statistical survival.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0f2d33] flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Status: Ready for Production / Prop Allocation</span>
              <button
                onClick={() => setIsResearchModalOpen(false)}
                className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-[#051013] text-xs font-bold rounded-lg transition"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: READ METHODOLOGY */}
      {isMethodologyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#07171a] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 text-[#f4f7f7] shadow-[0_0_50px_rgba(49,226,218,0.2)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsMethodologyModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-[#0c262b] border border-[#153e46] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-1">
              <FileText className="w-4 h-4" />
              <span>Engineering & Quantitative Standards</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Backtesting & Verification Methodology
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              How data hygiene, transaction friction modeling, and walk-forward verification prevent backtest overfitting.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-[#051114] border border-[#10343a]">
                <h4 className="font-semibold text-cyan-300 mb-1">1. Data Hygiene & Survivorship</h4>
                <p className="text-slate-300 leading-relaxed">
                  Tick data sourced from Tier-1 liquidity providers, resampled to institutional H1 bars. Spurious spikes and non-trading holiday sessions were rigorously filtered.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#051114] border border-[#10343a]">
                <h4 className="font-semibold text-cyan-300 mb-1">2. Friction & Slippage Model</h4>
                <p className="text-slate-300 leading-relaxed">
                  All backtests incorporate a strict 1.5 pip spread penalty plus $3.50 per lot commission and conservative 0.5 pip latency slippage on market orders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#051114] border border-[#10343a]">
                <h4 className="font-semibold text-cyan-300 mb-1">3. Walk-Forward Anchored Windows</h4>
                <p className="text-slate-300 leading-relaxed">
                  In-sample optimization was strictly segregated from out-of-sample forward tests. Overfitting metrics (PBO - Probability of Backtest Overfitting) scored under 0.08.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0f2d33] flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Framework: Python, DuckDB, Polars, VectorBT, Custom C++ Engine</span>
              <button
                onClick={() => setIsMethodologyModalOpen(false)}
                className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-[#051013] text-xs font-bold rounded-lg transition"
              >
                Close Methodology
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section04_FeaturedResearch;
