import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import NeuralLattice from './NeuralLattice';

export default function BackgroundCanvas() {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates (-1 to 1)
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#121212]">
      {/* Subtle radial ambient glows in graphite and dark emerald/cyan */}
      <div className="absolute top-[-15%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-emerald-950/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-cyan-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#121212_95%)] pointer-events-none" />

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <NeuralLattice mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
