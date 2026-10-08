import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, CheckCircle2, Award, Trophy } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, EXPERIENCES, CERTIFICATIONS, ACHIEVEMENTS } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Control Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-zinc-800/80 sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-bold text-sm sm:text-base text-white tracking-wide">
                  Curriculum Vitae Preview
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Direct Download Button */}
                <a
                  href="/resume.pdf"
                  download="Pathan_Sameer_Khan_Resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Native Print / Save */}
                <button
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-all"
                  title="Print or Save via Browser"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close Resume Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Document Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 select-text">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-zinc-800/80">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-1.5 flex items-center justify-center sm:justify-start gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs font-mono text-zinc-300 text-center sm:text-right">
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <span className="text-zinc-500">GitHub:</span>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/Sameer200425</a>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <span className="text-zinc-500">LinkedIn:</span>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/sameerkhan252004</a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                  Professional Profile &amp; Objective
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Technical Skills Matrix */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                  Technical Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="font-bold text-white block mb-1">Python Proficiency &amp; OOP:</span>
                    <span className="text-zinc-300">Strong understanding of syntax, data structures (lists, dictionaries, tuples, sets), algorithms, and Object-Oriented Programming (OOP) principles.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="font-bold text-white block mb-1">Data Science &amp; Machine Learning:</span>
                    <span className="text-zinc-300">Vision Transformers (ViT), Explainable AI (Grad-CAM XAI), NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, regression and classification pipelines.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="font-bold text-white block mb-1">Database Management &amp; Cloud:</span>
                    <span className="text-zinc-300">SQL (Relational Databases: PostgreSQL, MySQL, SQLite), MongoDB Document Model (Certified), and AWS Cloud Data Analytics.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="font-bold text-white block mb-1">Languages &amp; Web Development:</span>
                    <span className="text-zinc-300">Python, Java, C++, JavaScript, HTML, CSS, React, FastAPI-based secure endpoints, and real-time MLOps drift detection.</span>
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Professional Experience</span>
                </h4>
                <div className="space-y-5">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="border-l-2 border-emerald-500/40 pl-4 space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <span className="font-bold text-white text-sm">{exp.role}</span>
                        <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                      </div>
                      <div className="text-xs text-emerald-400 font-medium">{exp.company} • {exp.location}</div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 mt-2">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Engineering Systems */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                  Key Systems &amp; Implementations
                </h4>
                <div className="space-y-3">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col gap-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-bold text-white text-xs sm:text-sm break-all sm:break-normal">{proj.title}</span>
                        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 self-start sm:self-auto">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">{proj.description}</p>
                      <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400 mt-1">
                        {proj.metrics.map((m, mIdx) => (
                          <span key={mIdx}><strong className="text-zinc-200">{m.label}:</strong> {m.value}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education &amp; Credentials</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EDUCATION_LIST.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <div className="font-bold text-white text-xs">{edu.degree}</div>
                      <div className="text-[11px] text-zinc-400">{edu.institution}</div>
                      <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">{edu.scoreLabel}: {edu.scoreValue}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Recognitions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Certifications &amp; Professional Qualifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white leading-snug">{cert.title}</div>
                        <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          {cert.issuer} {cert.credentialId ? `• ID: ${cert.credentialId}` : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extracurricular & Co-Curricular Achievements */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Extracurricular &amp; Co-Curricular Achievements</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ACHIEVEMENTS.map((ach, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-white leading-snug">{ach.title}</div>
                        <div className="text-[11px] text-zinc-400 mt-1">{ach.desc}</div>
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 mt-2 font-semibold">
                        {ach.award}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-zinc-900/80 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono">Ready for direct recruitment mandates</span>
              <a
                href="/resume.pdf"
                download="Pathan_Sameer_Khan_Resume.pdf"
                className="font-semibold text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Direct File Download</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
