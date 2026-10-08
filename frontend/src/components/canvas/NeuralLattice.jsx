import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Pure deterministic pseudo-random generator for stable particle positioning
function createSeededRandom(seed = 42) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export default function NeuralLattice({ mousePosition }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const groupRef = useRef();

  // Generate particle constellation
  const { positions, colors, linePositions } = useMemo(() => {
    const rng = createSeededRandom(42);
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const emerald = new THREE.Color('#10b981');
    const cyan = new THREE.Color('#06b6d4');
    const zinc = new THREE.Color('#52525b');

    // Create 3D distribution
    for (let i = 0; i < count; i++) {
      const radius = 18 + rng() * 22;
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(rng() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.6; // Slight flattening for perspective
      const z = radius * Math.cos(phi) - 10;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color distribution: mostly subtle zinc with emerald and cyan highlights
      let chosenColor = zinc;
      const rand = rng();
      if (rand > 0.85) {
        chosenColor = emerald;
      } else if (rand > 0.70) {
        chosenColor = cyan;
      }

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    // Connect subset of nearby nodes to create subtle neural pathways
    const lineCoords = [];
    const maxDistance = 4.2;
    const sampleCount = Math.min(count, 320);

    for (let i = 0; i < sampleCount; i++) {
      for (let j = i + 1; j < sampleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          lineCoords.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }

    return {
      positions,
      colors,
      linePositions: new Float32Array(lineCoords)
    };
  }, []);

  // Frame loop for subtle motion and mouse interaction
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow ambient rotation
    groupRef.current.rotation.y += delta * 0.035;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.08;

    // Responsive mouse parallax
    if (mousePosition && mousePosition.current) {
      const targetX = (mousePosition.current.x * 0.4);
      const targetY = (mousePosition.current.y * 0.3);

      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (-targetY - groupRef.current.position.y) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Particle Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Neural Pathway Interconnect Lines */}
      {linePositions.length > 0 && (
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
      )}
    </group>
  );
}
