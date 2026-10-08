import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { WhatsappIcon, InstagramIcon, LinkedinIcon, GithubIcon, GmailIcon, YoutubeIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      let data = {};
      try {
        const text = await response.text();
        data = JSON.parse(text);
      } catch {
        data = { success: response.ok };
      }

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200 || data.message)) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#10b981', '#06b6d4', '#fafafa'],
          });
        } catch {
          // confetti visual failure non-critical
        }

        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMsg('Transmission service connection issue. You can still send directly via Gmail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference (CONTACT) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            CONTACT
          </h2>
          <p className="text-zinc-400 text-sm">
            Reach out directly for software engineering positions, Python full-stack roles, or applied machine learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact Info & Social Icons (Reference Structure) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl flex flex-col justify-between">
            <div>
              {/* Name Display */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Sameer<span className="text-emerald-400">Khan</span>
              </h3>

              {/* Direct Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs text-zinc-400">Contact No:</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-white hover:text-emerald-400 transition-colors font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs text-zinc-400">Email:</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-white hover:text-emerald-400 transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Social Media Section matching reference */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                  Social Media & Messaging
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 transition-all shadow-md group"
                    title="WhatsApp"
                  >
                    <WhatsappIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* Gmail Direct Webmail Link */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-red-500 transition-all shadow-md group"
                    title="Open Gmail (sameerkhan28083@gmail.com)"
                  >
                    <GmailIcon className="w-5 h-5 text-zinc-300 group-hover:text-red-500 group-hover:scale-110 transition-all" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-zinc-300 hover:text-cyan-400 transition-all shadow-md group"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 transition-all shadow-md group"
                    title="GitHub"
                  >
                    <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 text-zinc-300 hover:text-pink-400 transition-all shadow-md group"
                    title="Instagram (@pathan.sameerkhan_25)"
                  >
                    <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* YouTube */}
                  <a
                    href={PERSONAL_INFO.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-red-500 transition-all shadow-md group"
                    title="YouTube Channel (@SameerKhan-44-ferrari)"
                  >
                    <YoutubeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Transmission Message Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Send Message</h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Direct form transmission with instant feedback.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Transmission Dispatched!</h4>
                <p className="text-xs text-zinc-300 mb-2">
                  Your message has been delivered directly to <span className="text-emerald-400 font-mono font-semibold">{PERSONAL_INFO.email}</span>.
                </p>
                <p className="text-[11px] text-zinc-500 mb-4">
                  Sameer will review your inquiry and reply to your provided email address shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setErrorMsg(null); }}
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="mb-2">{errorMsg}</p>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(`Inquiry from ${formData.name || 'Visitor'}`)}&body=${encodeURIComponent(formData.message || '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-200 hover:text-white font-mono text-[11px] border border-red-500/40 transition-colors"
                      >
                        <span>Open in Gmail Directly</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss an enterprise Java architecture project, ML pipeline role, or engineering consultation..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm outline-none focus:border-emerald-500 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
