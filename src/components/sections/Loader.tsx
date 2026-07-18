"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to([textRef.current, numberRef.current], {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.inOut",
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#FAF9F6] p-8 sm:p-12 select-none"
    >
      <div className="flex w-full items-center justify-between text-[10px] sm:text-xs tracking-[0.2em] text-sage-dark/60 uppercase">
        <span>Brighton, UK</span>
        <span>Est. 2024</span>
      </div>

      <div ref={textRef} className="flex flex-col items-center gap-4 text-center">
        <div className="font-display text-4xl sm:text-6xl text-olive tracking-wider font-light flex items-center gap-2">
          <span className="text-sage font-bold">G</span>ARDEN
          <span className="text-gold font-serif italic">Café</span>
        </div>
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-sage-dark uppercase">
          Served with Passion • Served with Love
        </div>
      </div>

      <div
        ref={numberRef}
        className="flex w-full items-end justify-between"
      >
        <div className="text-[10px] sm:text-xs font-light text-sage-dark/80 tracking-widest font-mono">
          PREMIUM EXPERIENCE
        </div>
        <div className="font-display text-8xl sm:text-[12rem] leading-none font-bold text-olive select-none opacity-90 flex items-baseline">
          <span>{progress}</span>
          <span className="text-2xl sm:text-4xl text-gold font-light ml-1">%</span>
        </div>
      </div>
    </div>
  );
}
