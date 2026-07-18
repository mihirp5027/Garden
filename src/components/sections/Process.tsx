"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Compass, Leaf, Droplet, GlassWater } from "lucide-react";

interface Step {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scale down the cards translate depending on width (4 cards, translate by 75%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const steps: Step[] = [
    {
      num: "01",
      icon: <Compass className="w-8 h-8 text-sage" />,
      title: "Ethical & Organic Sourcing",
      desc: "We partner with family-run micro-lots in Colombia, Ethiopia, and Kyoto. Every cherry and leaf is organically grown under direct-trade principles."
    },
    {
      num: "02",
      icon: <Leaf className="w-8 h-8 text-gold" />,
      title: "Botanical Curation",
      desc: "Our lavender extracts and rose waters are steam-distilled locally in Sussex. We select premium grade ceremonial matcha from Uji, Kyoto."
    },
    {
      num: "03",
      icon: <Droplet className="w-8 h-8 text-sage" />,
      title: "Scientific Precision Roasting",
      desc: "Beans are roasted in small batches to unlock unique floral notes. We regulate humidity and temperature to guarantee consistent roasting curves."
    },
    {
      num: "04",
      icon: <GlassWater className="w-8 h-8 text-gold" />,
      title: "Mindful Extraction & Service",
      desc: "Espressos are weighed to the tenth of a gram and matchas whisked at exactly 80°C. Served in handcrafted ceramics made with passion."
    }
  ];

  return (
    <div id="process" ref={targetRef} className="relative h-[250vh] bg-gradient-to-b from-[#FAF9F6] via-[#F4F6F3] to-[#FAF9F6] z-20">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Title */}
        <div className="max-w-7xl mx-auto w-full px-6 mb-12 text-left">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Our Method
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            Our Seed to Cup Journey
          </h2>
          <p className="text-xs text-olive/50 mt-2 font-light hidden sm:block">Scroll down to traverse our horizontal process timeline</p>
        </div>

        {/* Scroll Container */}
        <div className="flex items-center px-6">
          <motion.div style={{ x }} className="flex gap-8 w-[180vw] sm:w-[150vw] md:w-[120vw]">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="w-[85vw] sm:w-[450px] flex-shrink-0 p-8 sm:p-10 rounded-3xl glass-card border border-sage/12 flex flex-col justify-between h-[380px] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-sage/10 blur-3xl pointer-events-none group-hover:bg-sage/15 transition-colors duration-500" />
                
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-display text-5xl font-bold text-olive/15 group-hover:text-gold/60 transition-colors duration-500">
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-olive font-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-olive/75 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
