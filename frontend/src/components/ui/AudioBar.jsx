import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  const toggleAudio = () => {
    if (isPlaying) {
      // Stop ambient audio
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try { osc.stop(); } catch { /* ignore stop error */ }
          });
          oscillatorsRef.current = [];
          setIsPlaying(false);
        }, 500);
      } else {
        setIsPlaying(false);
      }
    } else {
      // Start ambient cyber synth chord using Web Audio API
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.2); // Gentle ambient volume
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Ambient cyber chord notes: C3 (130.81Hz), G3 (196.00Hz), C4 (261.63Hz), E4 (329.63Hz)
        const freqs = [130.81, 196.00, 261.63, 329.63];
        const oscs = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle detune for lush spatial chorus
          osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);

          const subGain = ctx.createGain();
          subGain.gain.value = 0.25;
          osc.connect(subGain);
          subGain.connect(masterGain);

          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch (err) {
        console.warn('Audio playback error:', err);
      }
    }
  };

  return (
    <div className="relative z-10 py-6 my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Music className={`w-4 h-4 ${isPlaying ? 'text-emerald-400 animate-pulse' : 'text-zinc-500'}`} />
              <span className="hidden sm:inline">Ambient Cyber Soundtrack:</span>
            </div>

            {/* Visualizer bars */}
            <div className="flex items-end gap-1 h-4">
              <span className={`w-1 bg-emerald-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3.5 animate-pulse' : 'h-1'}`} />
              <span className={`w-1 bg-cyan-400 rounded-full transition-all duration-200 ${isPlaying ? 'h-4 animate-bounce' : 'h-1.5'}`} />
              <span className={`w-1 bg-emerald-400 rounded-full transition-all duration-500 ${isPlaying ? 'h-2 animate-pulse' : 'h-1'}`} />
              <span className={`w-1 bg-teal-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3.5 animate-bounce' : 'h-1.5'}`} />
            </div>

            <button
              onClick={toggleAudio}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all active:scale-95 ${
                isPlaying
                  ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause Ambient Sound' : 'Play Background Music'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
