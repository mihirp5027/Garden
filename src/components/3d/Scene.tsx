"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import GradientSphere from "./GradientSphere";
import ParticleField from "./ParticleField";

function SceneComponent() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-[#FAF9F6] via-[#F4F6F3] to-[#E8ECE7] overflow-hidden">
      {/* Background grain noise effect */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#8ca086_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8ca086]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#baa04a]/15 blur-[100px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} color="#baa04a" intensity={3.5} />
        <pointLight position={[-5, -5, 3]} color="#8ca086" intensity={2.5} />
        <pointLight position={[0, 4, -2]} color="#566751" intensity={1.8} />
        
        <GradientSphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}

// SSR safe export wrapper
const Scene = dynamic(() => Promise.resolve(SceneComponent), { ssr: false });
export default Scene;
