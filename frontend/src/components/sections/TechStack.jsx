import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Brain, Database, Globe, CheckCircle2, Zap, Award } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

const ICONS = {
  Server: Server,
  Brain: Brain,
  Database: Database,
  Globe: Globe,
  Award: Award,
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  const selectedCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];
  const IconComponent = ICONS[selectedCategory.icon] || Server;

  return (
    <section id="stack" className="relative z-10 py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Architectural Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Python Full-Stack &amp; Machine Learning Stack
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Battle-tested technologies applied across modern web applications, Vision Transformers, FastAPI microservices, and distributed data systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md">
          {SKILL_CATEGORIES.map((category) => {
            const TabIcon = ICONS[category.icon] || Server;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-lg border border-zinc-700/60 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-zinc-400'}`} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
        >
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{selectedCategory.name}</h3>
                <p className="text-xs font-mono text-zinc-400">Verified production competencies & frameworks</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Production Tested</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-semibold text-sm text-zinc-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      CORE
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-1.5">
                    <span>Proficiency</span>
                    <span className="text-zinc-300 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
