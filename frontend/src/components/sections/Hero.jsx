import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, FileText, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, YoutubeIcon, InstagramIcon } from '../ui/Icons';
import { PERSONAL_INFO, FEATURED_HERO_PROJECTS } from '../../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative z-10 pt-28 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Profile Visual & Socials (As in reference site) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center text-center glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.09] shadow-2xl relative group"
          >
            {/* Title Above Pic */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.titleAbovePic}</span>
            </div>

            {/* Profile Image with subtle glow */}
            <div className="relative mb-6">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-emerald-500/40 via-cyan-500/30 to-emerald-400/20 blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
              <img
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                className="relative w-56 h-56 sm:w-64 sm:h-64 object-cover object-top rounded-2xl border-2 border-zinc-700/80 shadow-2xl"
              />
            </div>

            {/* Quick Status */}
            <div className="text-xs font-mono text-zinc-300 mb-5 flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Technical Roles</span>
            </div>

            {/* Social Logos Under Pic */}
            <div className="flex items-center gap-2 mb-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 transition-all shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/40 text-zinc-300 hover:text-cyan-400 transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 transition-all shadow-sm"
                title="WhatsApp Direct"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-red-500 transition-all shadow-sm"
                title="YouTube Channel (@SameerKhan-44-ferrari)"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-pink-500/40 text-zinc-300 hover:text-pink-400 transition-all shadow-sm"
                title="Instagram (@pathan.sameerkhan_25)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Direct CV Action in Profile Card */}
            <button
              onClick={onOpenResume}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 font-bold text-xs transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-emerald-500/10"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download / View CV</span>
            </button>
          </motion.div>

          {/* RIGHT COLUMN: Intro, Bio & Featured Project Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-start"
          >
            {/* Header Greeting */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Welcome to my portfolio</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Pathan Sameer Khan</span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-bold text-zinc-300 tracking-tight">
                Python Full Stack Developer
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4 max-w-3xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-8">
              <span>&gt;</span>
              <a href="#contact" className="text-emerald-400 hover:underline flex items-center gap-1">
                <span>Check out my direct contact info</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <span className="text-zinc-600">|</span>
              <a href="#terminal" className="text-cyan-400 hover:underline flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                <span>Open interactive developer console</span>
              </a>
            </div>

            {/* Integrated "My Projects" Cards */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span>Key Repositories</span>
                  <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Production Code
                  </span>
                </h2>
              </div>

              {/* Project Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {FEATURED_HERO_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 break-all sm:break-normal"
                          title="Open GitHub Repository"
                        >
                          <span>{proj.title}</span>
                        </a>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                        {proj.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {proj.tags.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-3.5 py-2 rounded-xl text-xs font-semibold font-mono bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:border-emerald-500 hover:bg-emerald-500/15 hover:text-emerald-400 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-300 group/btn"
                        title={`View ${proj.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4 text-zinc-400 group-hover/btn:text-emerald-400 group-hover/btn:scale-110 transition-all duration-300" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-0.5 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (CV)</span>
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/60 text-zinc-200 hover:text-white text-xs font-bold transition-all shadow-md group"
                >
                  <span>View All Projects & Telemetry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
