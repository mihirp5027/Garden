"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Coffee, Wine, Sparkles, Croissant, Flower } from "lucide-react";

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Tilt calculations
    const multiplier = 12; // Maximum tilt angle
    const rx = ((y / height) - 0.5) * -multiplier;
    const ry = ((x / width) - 0.5) * multiplier;
    setRotateX(rx);
    setRotateY(ry);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Coffee className="w-6 h-6 text-sage" />,
      title: "Artisan Roastery",
      desc: "Carefully roasted single-origin coffee beans, extracted to highlight their organic flavour profile. Available as espresso, batch brews, and pour-overs.",
      color: "from-sage/20 to-transparent"
    },
    {
      icon: <Flower className="w-6 h-6 text-gold" />,
      title: "Botanical Matchas & Lattes",
      desc: "Pure ceremonial-grade Uji matcha blended with organic rose, lavender, or vanilla, alongside wellness lattes like turmeric and london fog.",
      color: "from-gold/20 to-transparent"
    },
    {
      icon: <Wine className="w-6 h-6 text-sage" />,
      title: "Natural Wines & Cellar",
      desc: "A carefully curated cellar showcasing biodynamic orange, organic red, and crisp local white wines from minimal intervention vineyards.",
      color: "from-sage/20 to-transparent"
    },
    {
      icon: <Croissant className="w-6 h-6 text-gold" />,
      title: "Artisan Bakery & Boards",
      desc: "Fresh morning pastries, house-baked sourdough loaves, and premium botanical charcuterie boards crafted using locally sourced Sussex farms.",
      color: "from-gold/20 to-transparent"
    }
  ];

  return (
    <section id="services" className="relative py-32 px-6 bg-gradient-to-b from-[#F4F6F3] to-[#FAF9F6] z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Our Offerings
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            Curated Culinary Art <br />
            <span className="font-sans font-bold text-sage italic">For Sophisticated Palates</span>
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <TiltCard key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl glass-card overflow-hidden h-full flex flex-col justify-between group cursor-pointer border border-sage/12 hover:border-sage/35 transition-colors"
              >
                {/* Accent Background light */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${item.color} blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />

                <div>
                  {/* Icon wrapper with hover zoom */}
                  <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl sm:text-2xl text-olive font-light mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-olive/75 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold font-semibold group-hover:text-sage-dark transition-colors duration-300">
                  <span>Explore Offerings</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
