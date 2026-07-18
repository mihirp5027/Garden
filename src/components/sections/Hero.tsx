"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { x, y } = useMousePosition();

  // Mouse parallax coefficients
  const parallaxX = (x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * -0.02;
  const parallaxY = (y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * -0.02;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-32 px-6">
      {/* Global Mouse spotlight glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(140, 160, 134, 0.15), rgba(186, 160, 74, 0.06), transparent 70%)`,
        }}
      />

      <div className="max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Tagline */}
          <motion.div
            variants={titleVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage/20 bg-sage/10 backdrop-blur-md text-[10px] sm:text-xs uppercase tracking-[0.25em] text-sage font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            Brighton's Botanical Escape
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            className="text-4xl sm:text-7xl md:text-8xl font-light text-olive tracking-tight leading-[1.05] flex flex-col items-center"
          >
            <span className="font-display font-light">Where Artistry</span>
            <span className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-sage via-gold to-sage text-glow">
              Meets Nature.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={titleVariants}
            className="max-w-2xl text-sm sm:text-lg text-olive/70 leading-relaxed font-light mt-4"
          >
            A premium sanctuary crafting organic luxury. Experience award-winning specialty coffee, artisanal matchas, and curated natural wines inside an immersive glass greenhouse environment.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={titleVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6"
          >
            <Magnetic>
              <a
                href="#portfolio"
                className="relative px-8 py-3.5 rounded-full bg-sage text-white font-semibold text-xs uppercase tracking-widest group overflow-hidden transition-all duration-300 hover:bg-gold hover:text-white shadow-lg block"
              >
                Explore Curated Menu
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="relative px-8 py-3.5 rounded-full border border-olive/20 text-olive font-medium text-xs uppercase tracking-widest group overflow-hidden transition-all duration-300 hover:border-sage/50 flex items-center gap-2"
              >
                <span>Reserve A Table</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Parallax elements */}
      <div
        className="hidden md:block absolute top-[25%] left-[15%] w-12 h-12 rounded-full border border-sage/20 bg-sage/10 backdrop-blur-sm pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
      />
      <div
        className="hidden md:block absolute bottom-[30%] right-[15%] w-16 h-16 rounded-full border border-gold/20 bg-gold/10 backdrop-blur-sm pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${parallaxX * -1.5}px, ${parallaxY * -1.5}px)` }}
      />
    </section>
  );
}
