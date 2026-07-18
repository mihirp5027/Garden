"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, Calendar, Award, Star } from "lucide-react";

function Counter({ value, duration = 1.2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalDuration = duration * 1000;
    const increment = Math.ceil(end / (totalDuration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const timeline = [
    { year: "2024", title: "The Sanctuary Opens", desc: "Laid roots in Brighton's historic lanes as a botanical glasshouse retreat." },
    { year: "2025", title: "Award Recognition", desc: "Voted Brighton's Best Artisan Roaster and Curated Wine Cellar." },
    { year: "2026", title: "Sustainable Promise", desc: "Achieved zero-waste certification with 100% locally sourced organic menus." }
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-[#FAF9F6] to-[#F4F6F3] z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Our Roots
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            A Sanctuary Crafted <br />
            <span className="font-sans font-bold text-sage italic">For Organic Devotees</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Our Story / Philosophy (Large Block) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between min-h-[350px]"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-sage/10 blur-[80px] pointer-events-none" />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-sage mb-4 block font-medium">Philosophy</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-olive leading-snug mb-4">
                We believe that great taste is grown, <span className="text-gold italic font-serif">not manufactured</span>.
              </h3>
              <p className="text-sm text-olive/75 leading-relaxed font-light max-w-xl">
                Every drop of espresso, every glass of organic wine, and every artisan matcha served at Garden Café is sourced from organic growers who share our respect for the soil. Inside our lush botanical glasshouse, we combine natural aesthetics with modern culinary design.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 border-t border-sage/10 pt-6">
              <div>
                <div className="text-2xl font-bold text-gold font-display">
                  <Counter value={15000} suffix="+" />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-sage/70 mt-1">Cups Sourced</div>
              </div>
              <div className="w-px h-8 bg-sage/20" />
              <div>
                <div className="text-2xl font-bold text-sage font-display">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-sage/70 mt-1">Organic Sourced</div>
              </div>
              <div className="w-px h-8 bg-sage/20" />
              <div>
                  <div className="text-2xl font-bold text-olive font-display">
                    <Counter value={4.9} suffix="/5.0" />
                  </div>
                <div className="text-[9px] uppercase tracking-wider text-sage/70 mt-1">Google Rating</div>
              </div>
            </div>
          </motion.div>
          {/* Card 2: Image Reveal Card */}
          <motion.div
            variants={cardVariants}
            className="p-1 rounded-3xl glass-card overflow-hidden relative group min-h-[350px]"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#F4F6F3] via-[#F4F6F3]/10 to-transparent pointer-events-none" />
            <div className="relative w-full h-full min-h-[340px]">
              <Image
                src="/menu.png"
                alt="Cafe Menu Detail"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[10px] uppercase tracking-widest text-gold mb-1 block font-semibold">Artisanal Curation</span>
                <h4 className="font-display text-lg text-olive font-medium">From the Soil of Sussex</h4>
                <p className="text-[11px] text-olive/70 mt-1 font-light">View curated options listed on our special boards daily.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Timeline (Small Block) */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl glass-card flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-sage mb-4 block font-medium">Our Milestones</span>
              <h3 className="font-display text-xl text-olive font-light mb-6">Our Journey</h3>
            </div>
            <div className="relative border-l border-sage/15 pl-5 space-y-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-gold border border-[#FAF9F6]" />
                  <span className="text-[10px] font-bold text-gold font-mono">{item.year}</span>
                  <h4 className="text-xs text-olive font-medium mt-0.5">{item.title}</h4>
                  <p className="text-[11px] text-olive/70 font-light mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Curated Spaces (Large Block) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-gold/10 blur-[70px] pointer-events-none" />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold mb-4 block font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-sage" /> Botanical Glasshouse
              </span>
              <h3 className="font-display text-2xl font-light text-olive mb-4">
                A botanical sanctuary inspired by the glasshouses of Kew Gardens.
              </h3>
              <p className="text-sm text-olive/75 leading-relaxed font-light">
                Designed to let sunlight cascade over exotic green foliage, the Garden Café feels alive. Soft acoustic sessions play in the background, making it the perfect setting for coworking, slow afternoons, or romantic candlelit evenings.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full border border-sage/15 bg-sage/5 text-[10px] uppercase tracking-wider text-sage-dark font-medium">
                Indoor Glasshouse
              </span>
              <span className="px-3.5 py-1.5 rounded-full border border-sage/15 bg-sage/5 text-[10px] uppercase tracking-wider text-sage-dark font-medium">
                Courtyard Oasis
              </span>
              <span className="px-3.5 py-1.5 rounded-full border border-sage/15 bg-sage/5 text-[10px] uppercase tracking-wider text-sage-dark font-medium">
                Private Workspaces
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
