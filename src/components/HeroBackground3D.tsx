import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({
  position,
  color,
  speed,
  distort,
  scale,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scale: number;
  geometry: 'sphere' | 'octahedron' | 'icosahedron' | 'torus';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  const GeometryComponent = useMemo(() => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {GeometryComponent}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20;
      pos[i + 1] = (Math.random() - 0.5) * 20;
      pos[i + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#10b981"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} color="#10b981" intensity={0.5} />

      {/* Main floating shapes */}
      <FloatingShape
        position={[-4, 2, -3]}
        color="#10b981"
        speed={1.5}
        distort={0.4}
        scale={1.2}
        geometry="sphere"
      />
      <FloatingShape
        position={[4, -1, -2]}
        color="#059669"
        speed={1}
        distort={0.3}
        scale={0.8}
        geometry="octahedron"
      />
      <FloatingShape
        position={[-3, -2, -4]}
        color="#34d399"
        speed={2}
        distort={0.5}
        scale={0.6}
        geometry="icosahedron"
      />
      <FloatingShape
        position={[3, 3, -5]}
        color="#6ee7b7"
        speed={1.2}
        distort={0.2}
        scale={0.9}
        geometry="torus"
      />
      <FloatingShape
        position={[0, -3, -3]}
        color="#10b981"
        speed={0.8}
        distort={0.35}
        scale={0.7}
        geometry="sphere"
      />
      <FloatingShape
        position={[-5, 0, -6]}
        color="#059669"
        speed={1.8}
        distort={0.25}
        scale={1}
        geometry="icosahedron"
      />
      <FloatingShape
        position={[5, 1, -4]}
        color="#34d399"
        speed={1.3}
        distort={0.45}
        scale={0.5}
        geometry="octahedron"
      />

      {/* Particle field */}
      <ParticleField />
    </>
  );
};

export const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
