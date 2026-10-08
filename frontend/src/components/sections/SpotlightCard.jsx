import React from 'react';
import { YoutubeIcon, GithubIcon } from '../ui/Icons';
import { ExternalLink } from 'lucide-react';
import { SPOTLIGHT_CHANNEL, PERSONAL_INFO } from '../../data/portfolioData';

export default function SpotlightCard() {
  return (
    <section className="relative z-10 py-16 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] shadow-2xl relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Spotlight Icon / Preview */}
            <a
              href={SPOTLIGHT_CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-zinc-900 border-2 border-red-500/40 hover:border-red-500 flex flex-col items-center justify-center text-red-500 shrink-0 shadow-lg group-hover:scale-105 transition-all"
              title="Visit YouTube Channel"
            >
              <YoutubeIcon className="w-12 h-12 text-red-500" />
              <span className="text-[10px] font-mono text-zinc-400 mt-1">YouTube</span>
            </a>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight">
                SUBSCRIBE ON <span className="text-red-500">YOUTUBE</span>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5 max-w-xl">
                {SPOTLIGHT_CHANNEL.description}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={SPOTLIGHT_CHANNEL.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all shadow-md shadow-red-600/25 active:scale-95"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>{SPOTLIGHT_CHANNEL.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Explore GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
