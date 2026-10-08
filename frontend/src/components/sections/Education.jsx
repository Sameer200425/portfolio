import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import { EDUCATION_LIST } from '../../data/portfolioData';

const ICONS = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Award: Award,
};

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Education
          </h2>
          <p className="text-zinc-400 text-sm">
            Formal engineering foundations in computer science, distributed algorithms, higher mathematics, and applied deep learning.
          </p>
        </div>

        {/* Education Sub-Container (services-sub-cont style from reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((item, idx) => {
            const IconComponent = ICONS[item.icon] || GraduationCap;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Bar with Icon & Period */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mb-2 font-medium">
                    {item.branch}
                  </div>
                  <div className="text-sm font-semibold text-emerald-400 mb-4">
                    {item.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Score / CGPA Highlight (Like reference bold percentages) */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    {item.scoreLabel}:
                  </span>
                  <span className="text-sm sm:text-base font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {item.scoreValue}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
