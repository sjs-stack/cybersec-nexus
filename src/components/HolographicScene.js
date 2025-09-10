import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Text, OrbitControls, Effects } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader materials for advanced effects
const GlowMaterial = {
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color() },
    intensity: { value: 1.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color;
    uniform float intensity;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      float glow = sin(time * 2.0) * 0.3 + 0.7;
      vec3 finalColor = color * intensity * glow;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Central glowing text component
function CentralText() {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0, 0]}
      fontSize={2.5}
      maxWidth={20}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      font="/fonts/inter-bold.woff"
      anchorX="center"
      anchorY="middle"
    >
      A New Era of Cybersecurity
      <shaderMaterial
        attach="material"
        args={[GlowMaterial]}
        uniforms-color-value={[1, 0.2, 0.2]}
        uniforms-intensity-value={1.5}
        transparent
      />
    </Text>
  );
}

// Glassmorphic navigation panels
function NavigationPanel({ text, position, orbitRadius, speed }) {
  const panelRef = useRef();
  const textRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime * speed;
    const x = Math.cos(time) * orbitRadius;
    const z = Math.sin(time) * orbitRadius;
    const y = Math.sin(time * 0.5) * 0.5;
    
    if (panelRef.current) {
      panelRef.current.position.set(x, y, z);
      panelRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={panelRef}>
      {/* Glass panel background */}
      <mesh>
        <planeGeometry args={[3, 1]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color={new THREE.Color(0.2, 0.4, 0.8)}
        />
      </mesh>
      
      {/* Panel border glow */}
      <mesh>
        <planeGeometry args={[3.1, 1.1]} />
        <meshBasicMaterial
          transparent
          opacity={0.3}
          color={new THREE.Color(0, 0.5, 1)}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Panel text */}
      <Text
        ref={textRef}
        position={[0, 0, 0.01]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-medium.woff"
      >
        {text}
      </Text>
    </group>
  );
}

// Data stream particles
function DataStreams() {
  const streamRef = useRef();
  const particleCount = 200;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Alternating colors (blue and red)
      if (Math.random() > 0.5) {
        colors[i3] = 0.2;     // R
        colors[i3 + 1] = 0.6; // G
        colors[i3 + 2] = 1.0; // B (electric blue)
      } else {
        colors[i3] = 1.0;     // R (crimson red)
        colors[i3 + 1] = 0.2; // G
        colors[i3 + 2] = 0.3; // B
      }
    }
    
    return { positions, colors, velocities };
  }, []);
  
  useFrame(() => {
    if (streamRef.current) {
      const positions = streamRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Update positions with flowing motion
        positions[i3] += particles.velocities[i3];
        positions[i3 + 1] += particles.velocities[i3 + 1];
        positions[i3 + 2] += particles.velocities[i3 + 2];
        
        // Reset particles that go too far
        const distance = Math.sqrt(
          positions[i3] ** 2 + 
          positions[i3 + 1] ** 2 + 
          positions[i3 + 2] ** 2
        );
        
        if (distance > 20) {
          const radius = Math.random() * 5 + 5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i3 + 2] = radius * Math.cos(phi);
        }
      }
      
      streamRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={streamRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Volumetric lighting effect
function VolumetricLighting() {
  return (
    <>
      {/* Main spotlight */}
      <spotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        color={new THREE.Color(1, 0.3, 0.3)}
        castShadow
      />
      
      {/* Ambient blue fill light */}
      <ambientLight intensity={0.1} color={new THREE.Color(0.2, 0.4, 0.8)} />
      
      {/* Rim lighting */}
      <directionalLight
        position={[-5, 0, -5]}
        intensity={0.5}
        color={new THREE.Color(0.3, 0.6, 1)}
      />
    </>
  );
}

// Main holographic scene component
export default function HolographicScene() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        {/* Lighting setup */}
        <VolumetricLighting />
        
        {/* Central glowing text */}
        <CentralText />
        
        {/* Orbiting navigation panels */}
        <NavigationPanel 
          text="Home" 
          position={[0, 0, 0]} 
          orbitRadius={6} 
          speed={0.3} 
        />
        <NavigationPanel 
          text="Tools" 
          position={[0, 0, 0]} 
          orbitRadius={8} 
          speed={-0.2} 
        />
        
        {/* Background data streams */}
        <DataStreams />
        
        {/* Camera controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Post-processing effects */}
        <fog attach="fog" args={['#000000', 10, 50]} />
      </Canvas>
    </div>
  );
}

export default HolographicScene