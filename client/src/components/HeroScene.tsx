import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x += 0.0005;
      meshRef.current.rotation.y += 0.001;
      
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#6366F1"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.8}
      />
    </Sphere>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 2.5], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#06B6D4" />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}
