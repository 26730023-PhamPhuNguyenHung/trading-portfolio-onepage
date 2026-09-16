import React from 'react';
import Navbar from './components/Navbar';
import { Section01_Hero } from './sections/Section01_Hero';
import { Section02_WhatICanBuild } from './sections/Section02_WhatICanBuild';
import { Section03_ResearchNotPromises } from './sections/Section03_ResearchNotPromises';
import { Section04_FeaturedResearch } from './sections/Section04_FeaturedResearch';
import { Section05_HowIFindAnEdge } from './sections/Section05_HowIFindAnEdge';
import { Section06_InteractiveLab } from './sections/Section06_InteractiveLab';
import { Section07_Technology } from './sections/Section07_Technology';
import { Section08_YourEdge } from './sections/Section08_YourEdge';
import { Section09_WhoIWorkWith } from './sections/Section09_WhoIWorkWith';
import { Section10_FinalCTA } from './sections/Section10_FinalCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#051013] text-[#f4f7f7] selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Section01_Hero />
        <Section02_WhatICanBuild />
        <Section03_ResearchNotPromises />
        <Section04_FeaturedResearch />
        <Section05_HowIFindAnEdge />
        <Section06_InteractiveLab />
        <Section07_Technology />
        <Section08_YourEdge />
        <Section09_WhoIWorkWith />
        <Section10_FinalCTA />
      </main>
    </div>
  );
};

export default App;
