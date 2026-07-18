"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function GradientSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Gentle floating and rotation
    meshRef.current.rotation.x = Math.sin(time / 4) * 0.2;
    meshRef.current.rotation.y = time * 0.15;
    meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;
  });

  return (
    <mesh ref={meshRef} scale={1.6}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#8CA086"
        attach="material"
        distort={0.4}
        speed={1.8}
        roughness={0.15}
        metalness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}
