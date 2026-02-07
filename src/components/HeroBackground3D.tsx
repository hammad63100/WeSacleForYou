import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface MousePosition {
  x: number;
  y: number;
}

const FloatingShape = ({
  position,
  color,
  speed,
  scale,
  geometry,
  mouseInfluence = 0.5,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  geometry: 'sphere' | 'octahedron' | 'icosahedron' | 'torus' | 'box' | 'cone';
  mouseInfluence?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation animation
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;

      // Subtle mouse-follow effect on position
      const mouseX = state.mouse.x * mouseInfluence;
      const mouseY = state.mouse.y * mouseInfluence;

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        initialPosition.current[0] + mouseX,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        initialPosition.current[1] + mouseY,
        0.05
      );
    }
  });

  const GeometryComponent = useMemo(() => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'box':
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      case 'cone':
        return <coneGeometry args={[0.8, 1.5, 16]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {GeometryComponent}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.85}
          roughness={0.15}
          metalness={0.9}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 40; // Reduced from 80

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 25;
      pos[i + 1] = (Math.random() - 0.5) * 25;
      pos[i + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.008;

      // Subtle mouse influence on particles
      particlesRef.current.rotation.z = state.mouse.x * 0.05;
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
        size={0.08}
        color="#10b981"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const CameraController = () => {
  const { camera } = useThree();

  useFrame((state) => {
    // Subtle camera movement based on mouse
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.y * 0.3, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Scene = () => {
  return (
    <>
      <CameraController />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <directionalLight position={[-10, -5, 5]} intensity={0.4} color="#10b981" />
      <pointLight position={[0, 0, 10]} intensity={0.3} color="#ffffff" />

      {/* Reduced number of floating shapes for performance */}
      <FloatingShape
        position={[-5, 2.5, -4]}
        color="#10b981"
        speed={1.2}
        scale={1.1}
        geometry="sphere"
        mouseInfluence={0.8}
      />
      <FloatingShape
        position={[5, -1.5, -3]}
        color="#059669"
        speed={0.8}
        scale={0.9}
        geometry="octahedron"
        mouseInfluence={0.6}
      />
      <FloatingShape
        position={[-4, -2.5, -5]}
        color="#34d399"
        speed={1.5}
        scale={0.7}
        geometry="box"
        mouseInfluence={0.4}
      />
      <FloatingShape
        position={[4, 3, -6]}
        color="#6ee7b7"
        speed={1}
        scale={0.8}
        geometry="torus"
        mouseInfluence={0.7}
      />

      {/* Particle field */}
      <ParticleField />
    </>
  );
};

export const HeroBackground3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render 3D on mobile for better performance
  if (isMobile) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    );
  }

  return (
    <div className="absolute inset-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]} // Reduced from [2, 2] for better performance
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
