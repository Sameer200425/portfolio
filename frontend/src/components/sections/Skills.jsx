import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Brain, Database, Globe } from 'lucide-react';
import { SKILL_CARDS } from '../../data/portfolioData';

const ICONS = [Server, Brain, Database, Globe];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Skills
          </h2>
          <p className="text-zinc-400 text-sm">
            Proven competencies applied across enterprise distributed systems, high-concurrency event pipelines, and scalable machine learning workloads.
          </p>
        </div>

        {/* Services Grid (services-sub-cont-1 style from reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CARDS.map((card, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
