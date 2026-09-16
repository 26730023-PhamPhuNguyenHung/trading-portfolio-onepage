import React from 'react';
import {
  Lightbulb,
  BarChart3,
  Cog,
  Binary,
  Workflow,
  Database,
  Box,
  Code2,
  TrendingUp,
  ArrowRight,
  Lock
} from 'lucide-react';

interface AudienceCardProps {
  badge: string;
  title: string;
  description: string;
  taglineItems: string[];
  illustration: React.ReactNode;
  features: {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }[];
}

const TraderIllustration: React.FC = () => (
  <div className="relative w-36 h-28 flex items-center justify-center select-none pointer-events-none">
    <svg
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background glow */}
      <circle cx="80" cy="55" r="45" fill="#31e2da" fillOpacity="0.06" />

      {/* Screen 1 (Left Chart) */}
      <rect
        x="12"
        y="16"
        width="54"
        height="36"
        rx="3"
        stroke="#31e2da"
        strokeOpacity="0.35"
        strokeWidth="1"
        fill="#041215"
      />
      {/* Candle bars Left */}
      <line x1="22" y1="23" x2="22" y2="38" stroke="#31e2da" strokeOpacity="0.7" strokeWidth="1.5" />
      <line x1="30" y1="28" x2="30" y2="44" stroke="#f3a52e" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="38" y1="20" x2="38" y2="34" stroke="#31e2da" strokeOpacity="0.9" strokeWidth="1.5" />
      <line x1="46" y1="26" x2="46" y2="42" stroke="#31e2da" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="54" y1="19" x2="54" y2="32" stroke="#31e2da" strokeWidth="1.5" />
      <path
        d="M16 42 L26 36 L34 40 L44 26 L58 30"
        stroke="#31e2da"
        strokeWidth="1"
        strokeOpacity="0.5"
        fill="none"
      />

      {/* Screen 2 (Right Chart) */}
      <rect
        x="94"
        y="16"
        width="54"
        height="36"
        rx="3"
        stroke="#31e2da"
        strokeOpacity="0.35"
        strokeWidth="1"
        fill="#041215"
      />
      {/* Trend line Right */}
      <path
        d="M98 42 L108 34 L118 38 L128 22 L142 26"
        stroke="#31e2da"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="128" cy="22" r="2" fill="#83fff8" />
      {/* Secondary bars */}
      <rect x="100" y="32" width="2" height="12" fill="#31e2da" fillOpacity="0.4" />
      <rect x="106" y="28" width="2" height="16" fill="#31e2da" fillOpacity="0.7" />
      <rect x="112" y="35" width="2" height="9" fill="#f3a52e" fillOpacity="0.7" />
      <rect x="118" y="24" width="2" height="20" fill="#31e2da" fillOpacity="0.9" />
      <rect x="124" y="30" width="2" height="14" fill="#31e2da" fillOpacity="0.5" />
      <rect x="130" y="20" width="2" height="24" fill="#31e2da" />

      {/* Trader Silhouette (head & shoulders) */}
      <path
        d="M58 98 C58 84 66 74 76 72 C77 69 76 65 74 61 C72 56 73 48 80 48 C87 48 88 56 86 61 C84 65 83 69 84 72 C94 74 102 84 102 98 Z"
        fill="#041215"
        stroke="#31e2da"
        strokeWidth="1.2"
      />
      {/* Head glow contour */}
      <ellipse cx="80" cy="58" rx="7" ry="9" stroke="#31e2da" strokeOpacity="0.6" strokeWidth="1" />
      {/* Shoulders edge */}
      <path
        d="M60 98 Q80 82 100 98"
        stroke="#83fff8"
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />
    </svg>
  </div>
);

const TeamsIllustration: React.FC = () => (
  <div className="relative w-36 h-28 flex items-center justify-center select-none pointer-events-none">
    <svg
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background glow */}
      <circle cx="80" cy="50" r="40" fill="#31e2da" fillOpacity="0.06" />

      {/* Connecting Network Grid */}
      <line x1="45" y1="62" x2="80" y2="40" stroke="#31e2da" strokeOpacity="0.3" strokeDasharray="3 3" />
      <line x1="115" y1="62" x2="80" y2="40" stroke="#31e2da" strokeOpacity="0.3" strokeDasharray="3 3" />
      <line x1="45" y1="62" x2="115" y2="62" stroke="#31e2da" strokeOpacity="0.2" strokeDasharray="2 2" />

      {/* Central Person (Leader) */}
      <circle cx="80" cy="34" r="11" stroke="#31e2da" strokeWidth="1.6" fill="#041215" />
      <path
        d="M66 60 C66 50 72 46 80 46 C88 46 94 50 94 60"
        stroke="#31e2da"
        strokeWidth="1.6"
        fill="#041215"
      />

      {/* Left Person */}
      <circle cx="45" cy="50" r="8.5" stroke="#31e2da" strokeWidth="1.3" strokeOpacity="0.8" fill="#041215" />
      <path
        d="M33 72 C33 63 38 60 45 60 C52 60 57 63 57 72"
        stroke="#31e2da"
        strokeWidth="1.3"
        strokeOpacity="0.8"
        fill="#041215"
      />

      {/* Right Person */}
      <circle cx="115" cy="50" r="8.5" stroke="#31e2da" strokeWidth="1.3" strokeOpacity="0.8" fill="#041215" />
      <path
        d="M103 72 C103 63 108 60 115 60 C122 60 127 63 127 72"
        stroke="#31e2da"
        strokeWidth="1.3"
        strokeOpacity="0.8"
        fill="#041215"
      />

      {/* Node pulse dots */}
      <circle cx="80" cy="34" r="3" fill="#83fff8" />
      <circle cx="45" cy="50" r="2" fill="#83fff8" fillOpacity="0.7" />
      <circle cx="115" cy="50" r="2" fill="#83fff8" fillOpacity="0.7" />
    </svg>
  </div>
);

const ProjectsIllustration: React.FC = () => (
  <div className="relative w-36 h-28 flex items-center justify-center select-none pointer-events-none">
    <svg
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Glow */}
      <circle cx="80" cy="55" r="42" fill="#31e2da" fillOpacity="0.08" />

      {/* Isometric Grid Blocks */}
      {/* Top back cube */}
      <g stroke="#31e2da" strokeWidth="1" strokeOpacity="0.3" fill="#05161a">
        <path d="M80 18 L96 27 L80 36 L64 27 Z" />
        <path d="M64 27 L64 45 L80 54 L80 36 Z" />
        <path d="M80 36 L80 54 L96 45 L96 27 Z" />
      </g>

      {/* Left cube */}
      <g stroke="#31e2da" strokeWidth="1" strokeOpacity="0.5" fill="#061c22">
        <path d="M52 35 L68 44 L52 53 L36 44 Z" />
        <path d="M36 44 L36 62 L52 71 L52 53 Z" />
        <path d="M52 53 L52 71 L68 62 L68 44 Z" />
      </g>

      {/* Bottom Center Cube (Hero Highlight Glow) */}
      <g stroke="#83fff8" strokeWidth="1.5" fill="#0a2a30" className="drop-shadow-[0_0_8px_rgba(49,226,218,0.6)]">
        <path d="M80 52 L98 62 L80 72 L62 62 Z" fill="#0e3d45" />
        <path d="M62 62 L62 82 L80 92 L80 72 Z" fill="#0a2e35" stroke="#31e2da" />
        <path d="M80 72 L80 92 L98 82 L98 62 Z" fill="#144d57" stroke="#83fff8" />
      </g>

      {/* Right Top Cube (Bright cyan wireframe) */}
      <g stroke="#31e2da" strokeWidth="1.3" strokeOpacity="0.8" fill="#082329">
        <path d="M106 35 L122 44 L106 53 L90 44 Z" fill="#0d353d" />
        <path d="M90 44 L90 62 L106 71 L106 53 Z" />
        <path d="M106 53 L106 71 L122 62 L122 44 Z" fill="#09272d" />
      </g>

      {/* Connection vertex markers */}
      <circle cx="80" cy="52" r="2" fill="#83fff8" />
      <circle cx="98" cy="62" r="2" fill="#83fff8" />
      <circle cx="80" cy="72" r="2.5" fill="#ffffff" />
    </svg>
  </div>
);

const AudienceCard: React.FC<AudienceCardProps> = ({
  badge,
  title,
  description,
  taglineItems,
  illustration,
  features,
}) => {
  return (
    <div className="relative group flex flex-col justify-between bg-[#07191d]/85 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 p-6 md:p-8 transition-all duration-300 hover:shadow-[0_12px_35px_-10px_rgba(49,226,218,0.2)]">
      {/* Top Header: Badge & Illustration */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-300 border border-cyan-400/30 bg-cyan-950/40">
              {badge}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
              {title}
            </h3>
          </div>

          <div className="flex flex-col items-center">
            {illustration}
            <div className="flex flex-col items-center gap-0.5 mt-1">
              {taglineItems.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono tracking-widest text-[#6d858b] uppercase font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Description */}
        <p className="mt-3 text-sm text-[#9cb0b4] leading-relaxed min-h-[44px]">
          {description}
        </p>

        {/* Divider */}
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent" />

        {/* Feature Bullets */}
        <ul className="space-y-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <li key={idx} className="flex items-center gap-3.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400/60 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-200 font-medium">
                  {feature.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const Section09_WhoIWorkWith: React.FC = () => {
  return (
    <section
      id="who-i-work-with"
      className="relative py-24 md:py-32 overflow-hidden bg-[#051013] text-[#f4f7f7]"
    >
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #31e2da 1px, transparent 1px), linear-gradient(to bottom, #31e2da 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          {/* Left Column: Tagline & Headline & Subtitle */}
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-cyan-400 inline-block shadow-[0_0_8px_#31e2da]" />
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                COLLABORATION
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              WHO I <span className="text-[#31e2da] text-cyan-glow">WORK WITH</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#9cb0b4] leading-relaxed max-w-2xl">
              I partner with traders, teams and projects who take systematic trading
              seriously — turning ideas into tested, data-driven strategies and
              real-world solutions.
            </p>
          </div>

          {/* Right Column: Quote */}
          <div className="lg:max-w-sm lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-cyan-500/30 pl-4 lg:pl-0 lg:pr-5 py-1">
            <blockquote className="text-base sm:text-lg italic font-serif text-slate-300 tracking-wide leading-snug">
              “Good ideas can come from anywhere. Execution makes the difference.”
            </blockquote>
            <p className="mt-2 text-xs font-mono tracking-wider text-cyan-400/80 font-medium">
              — HUNG
            </p>
          </div>
        </div>

        {/* 3 Core Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Independent Traders */}
          <AudienceCard
            badge="INDIVIDUALS"
            title="Independent Traders"
            description="For traders with an idea that needs proper testing, validation and refinement."
            taglineItems={['IDEAS', 'BACKTEST', 'REAL RESULTS']}
            illustration={<TraderIllustration />}
            features={[
              {
                icon: Lightbulb,
                text: 'Validate your trading ideas',
              },
              {
                icon: BarChart3,
                text: 'Backtest and analyze performance',
              },
              {
                icon: Cog,
                text: 'Turn concepts into executable strategies',
              },
            ]}
          />

          {/* Card 2: Trading Teams */}
          <AudienceCard
            badge="TEAMS"
            title="Trading Teams"
            description="For teams needing research tooling, custom analytics or automation to improve their edge."
            taglineItems={['RESEARCH', 'AUTOMATE', 'SCALE']}
            illustration={<TeamsIllustration />}
            features={[
              {
                icon: Binary,
                text: 'Custom research tools and analytics',
              },
              {
                icon: Workflow,
                text: 'Strategy development and automation',
              },
              {
                icon: Database,
                text: 'Integrate with your existing workflows',
              },
            ]}
          />

          {/* Card 3: Fintech / Prop Projects */}
          <AudienceCard
            badge="PROJECTS"
            title="Fintech / Prop Projects"
            description="For projects needing someone who understands both product and trading logic."
            taglineItems={['PRODUCT', 'TRADING', 'REAL-WORLD']}
            illustration={<ProjectsIllustration />}
            features={[
              {
                icon: Box,
                text: 'Bridge trading logic and product design',
              },
              {
                icon: Code2,
                text: 'Build and iterate technical solutions',
              },
              {
                icon: TrendingUp,
                text: 'From MVP to production-ready systems',
              },
            ]}
          />
        </div>

        {/* Centered CTA Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-[#051013] bg-gradient-to-r from-teal-400 via-cyan-400 to-[#31e2da] hover:from-teal-300 hover:to-cyan-200 transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_28px_rgba(49,226,218,0.4)] active:scale-[0.98]"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center gap-1.5 mt-3.5 text-xs text-[#9cb0b4]">
            <Lock className="w-3.5 h-3.5 text-cyan-400/70" />
            <span>No obligation. Just a discussion about your idea.</span>
          </div>
        </div>

        {/* Bottom Bar: Watermark & Brand Sign-off */}
        <div className="mt-20 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-left">
            <span className="w-5 h-[1.5px] bg-cyan-400/80" />
            <div className="font-mono uppercase tracking-widest text-[#6d858b] text-[11px] leading-tight">
              <div>SAME DISCIPLINE.</div>
              <div>MORE OPPORTUNITIES.</div>
            </div>
          </div>

          <div className="text-center sm:text-right font-mono text-[11px] tracking-wider text-[#6d858b]">
            <div className="text-slate-400 font-semibold tracking-widest">
              TRADING.PHAMPHUNGUYENHUNG.COM
            </div>
            <div className="mt-0.5 text-[10px] text-cyan-400/70 tracking-widest space-x-2">
              <span>RESEARCH</span>
              <span>/</span>
              <span>BACKTEST</span>
              <span>/</span>
              <span>BUILD</span>
              <span>/</span>
              <span>REPEAT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section09_WhoIWorkWith;
