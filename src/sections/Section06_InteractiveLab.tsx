import React, { useState, useMemo } from 'react';
import {
  FlaskConical,
  Database,
  Zap,
  BarChart2,
  CheckCircle2,
  Send,
  Lock,
  Play,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Copy,
  Check,
  TrendingUp,
} from 'lucide-react';

interface Preset {
  name: string;
  market: string;
  timeframe: string;
  idea: string;
  entryConcept: string;
  riskModel: string;
}

const PRESETS: Preset[] = [
  {
    name: 'London Gold Sweep',
    market: 'XAUUSD',
    timeframe: 'M5',
    idea: 'Liquidity Sweep',
    entryConcept: 'Reversal',
    riskModel: 'Fixed R (1R)',
  },
  {
    name: 'BTC Fair Value Imbalance',
    market: 'BTCUSD',
    timeframe: 'M15',
    idea: 'Fair Value Gap (FVG)',
    entryConcept: 'Limit at POI',
    riskModel: 'Dynamic Volatility (ATR)',
  },
  {
    name: 'Nasdaq Opening Expansion',
    market: 'NAS100',
    timeframe: 'M1',
    idea: 'Trend Breakout',
    entryConcept: 'Breakout Stop',
    riskModel: 'Trailing Stop',
  },
  {
    name: 'EURUSD Mean Reversion',
    market: 'EURUSD',
    timeframe: 'H1',
    idea: 'Mean Reversion',
    entryConcept: 'Retest Confirmation',
    riskModel: 'Fixed R (1R)',
  },
];

export const Section06_InteractiveLab: React.FC = () => {
  const [market, setMarket] = useState<string>('XAUUSD');
  const [timeframe, setTimeframe] = useState<string>('M5');
  const [idea, setIdea] = useState<string>('Liquidity Sweep');
  const [entryConcept, setEntryConcept] = useState<string>('Reversal');
  const [riskModel, setRiskModel] = useState<string>('Fixed R');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [presetIndex, setPresetIndex] = useState<number>(0);

  // Dynamic research spec calculation based on chosen parameters
  const spec = useMemo(() => {
    // 1. Entry Condition logic
    let entryText = '';
    if (idea === 'Liquidity Sweep') {
      entryText = `Rule-based sweep of previous session high/low on ${market}, followed by candle displacement and a ${entryConcept.toLowerCase()} execution trigger.`;
    } else if (idea === 'Fair Value Gap (FVG)') {
      entryText = `Algorithmic 3-bar displacement imbalance detection on ${market}, executing via ${entryConcept.toLowerCase()} into the 50% Consequent Encroachment (CE).`;
    } else if (idea === 'Trend Breakout') {
      entryText = `High-volume structural break outside the consolidation band on ${market} (${timeframe}), executing on ${entryConcept.toLowerCase()} with momentum confirmation.`;
    } else if (idea === 'Mean Reversion') {
      entryText = `Statistical z-score outlier (> 2.2 sigma) exhaustion on ${market}, executing on ${entryConcept.toLowerCase()} back toward the Volume Weighted Average Price (VWAP).`;
    } else {
      entryText = `Quantitative signal detection for ${idea} on ${market}, executed through systematic ${entryConcept.toLowerCase()} logic.`;
    }

    // 2. Invalidations
    let invalidationText = '';
    if (idea === 'Liquidity Sweep') {
      invalidationText = `Body close beyond the sweep liquidity wick, lack of displacement within 3 candles, or trade trigger outside core session hours.`;
    } else if (idea === 'Fair Value Gap (FVG)') {
      invalidationText = `Full candle body closure violating the FVG baseline, or higher-timeframe orderflow turning contrary to entry direction.`;
    } else if (idea === 'Trend Breakout') {
      invalidationText = `False breakout re-entering the pre-breakout value area, or declining tick volume on expansion leg.`;
    } else {
      invalidationText = `Structure break across swing pivots, adverse volatility spike, or session time limit reached without fill.`;
    }

    // 3. Required Dataset
    const requiredDataText = `${market} ${timeframe} tick-level OHLCV data, bid/ask spread history, and institutional session timestamps (London / New York open).`;

    // 4. Backtest Methodology
    const backtestText = `Vectorized and event-driven backtest over 36 months, factoring in conservative slippage (${market === 'XAUUSD' ? '25–40 cents' : '0.8–1.5 pips/ticks'}) and realistic venue commissions.`;

    // 5. Evaluation Metrics
    const metricsText = `Expectancy per trade (${riskModel}), Sharpe ratio > 1.5, Maximum Drawdown (< 10%), Win rate target (45–55% at 2R+), and Monte Carlo 1,000-run simulation.`;

    return {
      entryText,
      invalidationText,
      requiredDataText,
      backtestText,
      metricsText,
    };
  }, [market, timeframe, idea, entryConcept, riskModel]);

  const handleRunExample = () => {
    setIsGenerating(true);
    const nextIdx = (presetIndex + 1) % PRESETS.length;
    setPresetIndex(nextIdx);
    const nextPreset = PRESETS[nextIdx];

    setTimeout(() => {
      setMarket(nextPreset.market);
      setTimeframe(nextPreset.timeframe);
      setIdea(nextPreset.idea);
      setEntryConcept(nextPreset.entryConcept);
      setRiskModel(nextPreset.riskModel);
      setIsGenerating(false);
    }, 280);
  };

  const handleCopySpec = () => {
    const formatted = `=== QUANT RESEARCH SPECIFICATION ===
Market: ${market}
Timeframe: ${timeframe}
Strategy Concept: ${idea}
Entry Concept: ${entryConcept}
Risk Model: ${riskModel}

1. ENTRY CONDITION:
${spec.entryText}

2. INVALIDATIONS:
${spec.invalidationText}

3. REQUIRED DATASET:
${spec.requiredDataText}

4. BACKTEST METHODOLOGY:
${spec.backtestText}

5. EVALUATION METRICS:
${spec.metricsText}
====================================`;

    navigator.clipboard.writeText(formatted).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <section id="interactive-lab" className="relative py-24 bg-[#051013] text-[#f4f7f7] overflow-hidden">
      {/* Subtle Background Glows & Watermarks */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-6 relative z-10">
        {/* Top Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            BUILD. TEST. IMPROVE. REPEAT.
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            INTERACTIVE <br className="hidden sm:inline" />
            <span className="text-[#31e2da] drop-shadow-[0_0_25px_rgba(49,226,218,0.35)]">
              TRADING LAB.
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#9cb0b4] max-w-2xl leading-relaxed">
            Turn your trading ideas into structured research in seconds. Configure your setup, generate a professional research specification, and get ready to backtest.
          </p>
        </div>

        {/* 3-Column / Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Key Features + Quote */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 h-full">
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#081e24] border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(49,226,218,0.12)]">
                  <FlaskConical className="w-5 h-5 text-[#31e2da]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    From idea to research spec
                  </h4>
                  <p className="text-xs text-[#9cb0b4] mt-0.5 leading-relaxed">
                    Structured, professional, repeatable.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#081e24] border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(49,226,218,0.12)]">
                  <Database className="w-5 h-5 text-[#31e2da]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    Quant-ready output
                  </h4>
                  <p className="text-xs text-[#9cb0b4] mt-0.5 leading-relaxed">
                    Designed for backtesting and analysis.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#081e24] border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(49,226,218,0.12)]">
                  <Zap className="w-5 h-5 text-[#31e2da]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    Save time, trade smarter
                  </h4>
                  <p className="text-xs text-[#9cb0b4] mt-0.5 leading-relaxed">
                    Focus on what matters — better ideas.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#081e24] border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(49,226,218,0.12)]">
                  <BarChart2 className="w-5 h-5 text-[#31e2da]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    Built for real markets
                  </h4>
                  <p className="text-xs text-[#9cb0b4] mt-0.5 leading-relaxed">
                    Forex, Gold, Crypto, Indices, Futures.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Quote */}
            <div className="pt-6 border-t border-cyan-500/10">
              <p className="text-xs text-[#9cb0b4] italic font-serif leading-relaxed">
                &ldquo;Great trading ideas deserve a systematic process.&rdquo;
              </p>
              <div className="text-[11px] font-mono font-medium text-cyan-400 mt-2 tracking-wider">
                — HUNG
              </div>
            </div>
          </div>

          {/* Middle Column: 01 Configure Your Idea Form */}
          <div className="lg:col-span-4 bg-[#07191d]/90 border border-cyan-500/25 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative flex flex-col justify-between">
            <div>
              {/* Step indicator */}
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                01 &nbsp; CONFIGURE YOUR IDEA
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Build Your Research Request
              </h3>
              <p className="text-xs text-[#9cb0b4] mt-1 mb-5">
                Select your market, strategy concept and research parameters.
              </p>

              {/* Form Controls */}
              <div className="space-y-4">
                {/* Select Market */}
                <div>
                  <label className="block text-xs font-medium text-[#c5d5d8] mb-1.5">
                    Market
                  </label>
                  <div className="relative">
                    <select
                      value={market}
                      onChange={(e) => setMarket(e.target.value)}
                      className="w-full appearance-none bg-[#0a2329] border border-cyan-500/25 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-mono cursor-pointer"
                    >
                      <option value="XAUUSD">XAUUSD (Gold)</option>
                      <option value="EURUSD">EURUSD (Euro / US Dollar)</option>
                      <option value="BTCUSD">BTCUSD (Bitcoin)</option>
                      <option value="ETHUSD">ETHUSD (Ethereum)</option>
                      <option value="US30">US30 (Dow Jones)</option>
                      <option value="NAS100">NAS100 (Nasdaq)</option>
                      <option value="GBPUSD">GBPUSD (Cable)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Select Timeframe */}
                <div>
                  <label className="block text-xs font-medium text-[#c5d5d8] mb-1.5">
                    Timeframe
                  </label>
                  <div className="relative">
                    <select
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      className="w-full appearance-none bg-[#0a2329] border border-cyan-500/25 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-mono cursor-pointer"
                    >
                      <option value="M1">M1 (1 Minute - High Frequency)</option>
                      <option value="M5">M5 (5 Minutes - Scalping)</option>
                      <option value="M15">M15 (15 Minutes - Day Trading)</option>
                      <option value="H1">H1 (1 Hour - Intraday Swing)</option>
                      <option value="H4">H4 (4 Hours - Swing Trading)</option>
                      <option value="D1">D1 (Daily - Macro Trend)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Select Idea */}
                <div>
                  <label className="block text-xs font-medium text-[#c5d5d8] mb-1.5">
                    Idea
                  </label>
                  <div className="relative">
                    <select
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      className="w-full appearance-none bg-[#0a2329] border border-cyan-500/25 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-mono cursor-pointer"
                    >
                      <option value="Liquidity Sweep">Liquidity Sweep (BSL / SSL)</option>
                      <option value="Fair Value Gap (FVG)">Fair Value Gap (FVG / Imbalance)</option>
                      <option value="Trend Breakout">Trend Breakout & Volume Expansion</option>
                      <option value="Mean Reversion">Mean Reversion (Bollinger / VWAP)</option>
                      <option value="Order Block">Order Block / Institutional Footprint</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Select Entry Concept */}
                <div>
                  <label className="block text-xs font-medium text-[#c5d5d8] mb-1.5">
                    Entry Concept
                  </label>
                  <div className="relative">
                    <select
                      value={entryConcept}
                      onChange={(e) => setEntryConcept(e.target.value)}
                      className="w-full appearance-none bg-[#0a2329] border border-cyan-500/25 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-mono cursor-pointer"
                    >
                      <option value="Reversal">Reversal (Market Structure Shift)</option>
                      <option value="Retest Confirmation">Retest Confirmation</option>
                      <option value="Breakout Stop">Breakout Stop Order</option>
                      <option value="Limit at POI">Limit at POI (Point of Interest)</option>
                      <option value="Momentum Close">Momentum Close Confirmation</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Select Risk Model */}
                <div>
                  <label className="block text-xs font-medium text-[#c5d5d8] mb-1.5">
                    Risk Model
                  </label>
                  <div className="relative">
                    <select
                      value={riskModel}
                      onChange={(e) => setRiskModel(e.target.value)}
                      className="w-full appearance-none bg-[#0a2329] border border-cyan-500/25 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all font-mono cursor-pointer"
                    >
                      <option value="Fixed R (1R)">Fixed R (1R : 2R target)</option>
                      <option value="Dynamic Volatility (ATR)">Dynamic Volatility (1.5x ATR)</option>
                      <option value="Trailing Stop">Trailing Stop (Chandelier / Swing)</option>
                      <option value="Breakeven + Runner">Partial Close 1R + Runner</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Run Example Button */}
            <div className="mt-6 pt-5 border-t border-cyan-500/15">
              <button
                type="button"
                onClick={handleRunExample}
                disabled={isGenerating}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-[#051013] bg-gradient-to-r from-[#20d8cf] to-[#31e2da] hover:from-[#31e2da] hover:to-[#5efff7] active:scale-[0.99] shadow-[0_0_20px_rgba(49,226,218,0.3)] hover:shadow-[0_0_28px_rgba(49,226,218,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-[#051013]" />
                <span>{isGenerating ? 'Compiling Parameters...' : 'Run Example Research'}</span>
                <ArrowRight className="w-4 h-4 text-[#051013]" />
              </button>

              <p className="text-[11px] text-[#839da2] text-center mt-2.5">
                This will generate a complete research specification based on your inputs.
              </p>
            </div>
          </div>

          {/* Right Column: 02 Generated Output */}
          <div className="lg:col-span-5 bg-[#06181c]/95 border border-cyan-500/35 rounded-2xl p-6 lg:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.45)] relative flex flex-col justify-between">
            {/* Ambient ticker badge on top right */}
            <div className="absolute top-5 right-6 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a262d] border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
              <TrendingUp className="w-3 h-3 text-cyan-400" />
              <span>{market}</span>
              <span className="text-teal-300 font-semibold">+2.34%</span>
            </div>

            <div>
              {/* Step indicator */}
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                02 &nbsp; GENERATED OUTPUT
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Research specification generated
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </h3>
              <p className="text-xs text-[#9cb0b4] mt-1 mb-6">
                Your idea has been structured into a complete research plan.
              </p>

              {/* Dynamic Items List */}
              <div className={`space-y-4 text-sm transition-opacity duration-200 ${isGenerating ? 'opacity-40' : 'opacity-100'}`}>
                {/* 1. Entry condition */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-white block text-sm">Entry condition</span>
                    <p className="text-xs text-[#8aa4a9] mt-0.5 leading-relaxed">
                      Clear, rule-based conditions for entering trades.
                    </p>
                    <p className="text-xs font-mono text-cyan-200/90 mt-1 bg-[#09252c] px-2.5 py-1.5 rounded-lg border border-cyan-500/20">
                      &bull; {spec.entryText}
                    </p>
                  </div>
                </div>

                {/* 2. Invalidations */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-white block text-sm">Invalidations</span>
                    <p className="text-xs text-[#8aa4a9] mt-0.5 leading-relaxed">
                      When the idea is no longer valid.
                    </p>
                    <p className="text-xs font-mono text-cyan-200/90 mt-1 bg-[#09252c] px-2.5 py-1.5 rounded-lg border border-cyan-500/20">
                      &bull; {spec.invalidationText}
                    </p>
                  </div>
                </div>

                {/* 3. Required dataset */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-white block text-sm">Required dataset</span>
                    <p className="text-xs text-[#8aa4a9] mt-0.5 leading-relaxed">
                      Market data, timeframe, and additional data requirements.
                    </p>
                    <p className="text-xs font-mono text-cyan-200/90 mt-1 bg-[#09252c] px-2.5 py-1.5 rounded-lg border border-cyan-500/20">
                      &bull; {spec.requiredDataText}
                    </p>
                  </div>
                </div>

                {/* 4. Backtest methodology */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-white block text-sm">Backtest methodology</span>
                    <p className="text-xs text-[#8aa4a9] mt-0.5 leading-relaxed">
                      Step-by-step testing approach.
                    </p>
                    <p className="text-xs font-mono text-cyan-200/90 mt-1 bg-[#09252c] px-2.5 py-1.5 rounded-lg border border-cyan-500/20">
                      &bull; {spec.backtestText}
                    </p>
                  </div>
                </div>

                {/* 5. Evaluation metrics */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-300 shadow-[0_0_10px_rgba(49,226,218,0.2)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-white block text-sm">Evaluation metrics</span>
                    <p className="text-xs text-[#8aa4a9] mt-0.5 leading-relaxed">
                      Performance and risk metrics to assess the results.
                    </p>
                    <p className="text-xs font-mono text-cyan-200/90 mt-1 bg-[#09252c] px-2.5 py-1.5 rounded-lg border border-cyan-500/20">
                      &bull; {spec.metricsText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs & Security Badge */}
            <div className="mt-6 pt-5 border-t border-cyan-500/15 space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#contact"
                  onClick={async () => {
                    try {
                      await fetch('/api/lead', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          form_type: 'interactive_lab',
                          market,
                          timeframe,
                          idea,
                          entry_concept: entryConcept,
                          risk_model: riskModel,
                          notes: `Generated Spec: Entry: ${spec.entryText} | Invalidations: ${spec.invalidationText} | Metrics: ${spec.metricsText}`,
                        }),
                      });
                    } catch (e) {
                      console.warn(e);
                    }
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-sm text-[#051013] bg-gradient-to-r from-[#20d8cf] to-[#31e2da] hover:from-[#31e2da] hover:to-[#5efff7] shadow-[0_0_20px_rgba(49,226,218,0.3)] hover:shadow-[0_0_28px_rgba(49,226,218,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#051013]" />
                  <span>Send this research request</span>
                  <ArrowRight className="w-4 h-4 text-[#051013]" />
                </a>

                <button
                  type="button"
                  onClick={handleCopySpec}
                  title="Copy specification to clipboard"
                  className="px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#09242b] hover:bg-[#0d313b] text-cyan-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer text-xs font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-teal-300" />
                      <span className="text-teal-300 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>
              </div>

              {/* Confidentiality notice */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#799499]">
                <Lock className="w-3.5 h-3.5 text-cyan-400/80" />
                <span>Your research request stays confidential. NDA available.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-cyan-500/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">4+</div>
            <div className="text-xs text-[#8ca4a8]">Years of research</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">1000+</div>
            <div className="text-xs text-[#8ca4a8]">Strategies tested</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">Multiple</div>
            <div className="text-xs text-[#8ca4a8]">Markets & assets</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">Data-driven</div>
            <div className="text-xs text-[#8ca4a8]">Not opinions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section06_InteractiveLab;
