import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/canvas/BackgroundCanvas';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import InteractiveCli from './components/sections/InteractiveCli';
import AudioBar from './components/ui/AudioBar';
import Contact from './components/sections/Contact';
import SpotlightCard from './components/sections/SpotlightCard';
import ResumeModal from './components/ui/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Prevent browser auto-restoring previous scroll position down the page
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Always start at the top (Home) if there is no specific hash anchor in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#121212] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Interactive 3D WebGL Canvas Layer (No 3D text, pure responsive canvas) */}
      <BackgroundCanvas />

      {/* Main Semantic HTML UI Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <Skills />
          <TechStack />
          <Experience />
          <Education />
          <Projects />
          <InteractiveCli />
          <AudioBar />
          <Contact />
          <SpotlightCard />
        </main>

        <Footer />
      </div>

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
