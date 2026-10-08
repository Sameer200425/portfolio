import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-zinc-950/90 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-3">
        <p className="text-sm text-zinc-400">
          &copy; {CURRENT_YEAR} <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400">
          Made with ❤️ and engineering precision by{' '}
          <span className="text-emerald-400 font-bold">{PERSONAL_INFO.name}</span>
        </p>

        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all text-xs font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
