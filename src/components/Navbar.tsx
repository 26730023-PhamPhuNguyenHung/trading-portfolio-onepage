import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#051013]/85 backdrop-blur-md border-b border-cyan-500/15">
      <div className="max-w-[1480px] mx-auto px-6 h-[74px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-extrabold tracking-wider text-xl text-white">HUNG</span>
          <span className="text-cyan-400 text-lg font-mono">/</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9cb0b4]">Quant Research</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#cdd8da]">
          <a href="#research" className="hover:text-cyan-300 transition-colors">Research</a>
          <a href="#work" className="hover:text-cyan-300 transition-colors">Work</a>
          <a href="#process" className="hover:text-cyan-300 transition-colors">Process</a>
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
        </nav>

        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600/80 to-teal-700/80 border border-cyan-400/40 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(49,226,218,0.25)] transition-all"
          >
            Start a project
            <ArrowRight className="w-4 h-4 text-cyan-200" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
