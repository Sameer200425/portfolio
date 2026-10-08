import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PROJECTS } from '../../data/portfolioData';


export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Architecture & Codebases
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between group"
            >
              <div>
                {/* Header Meta */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-colors">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2 break-all sm:break-normal"
                  >
                    <span>{project.title}</span>
                  </a>
                </h3>
                <p className="text-xs font-mono text-emerald-400/90 mb-4">
                  {project.tagline}
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 mb-6 font-mono">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] uppercase text-zinc-400">{m.label}</span>
                      <span className="text-sm sm:text-base font-bold text-zinc-100">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#terminal"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Run test suite in CLI</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:border-emerald-500 hover:bg-emerald-500/15 hover:text-emerald-400 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-300 group/btn"
                    title={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-400 group-hover/btn:text-emerald-400 group-hover/btn:scale-110 transition-all duration-300" />
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-0.5 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
