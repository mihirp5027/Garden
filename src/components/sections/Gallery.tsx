"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X } from "lucide-react";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

    // Stylized views based on the downloaded assets
  const galleryItems = [
    {
      id: 0,
      src: "/gallery-0.jpg",
      title: "The Garden Menu",
      desc: "Full drink selection photographed at our Brighton table.",
      aspect: "row-span-2 col-span-1",
      position: "object-center",
      zoom: "scale-100"
    },
    {
      id: 1,
      src: "/gallery-1.jpg",
      title: "Our Signature Seal",
      desc: "The organic emblem of Garden Café Brighton.",
      aspect: "row-span-1 col-span-1",
      position: "object-center",
      zoom: "scale-[0.8]"
    },
    {
      id: 2,
      src: "/gallery-2.jpg",
      title: "Matcha Specials Detail",
      desc: "Featuring our Vanilla, Rose, and Lavender Matchas.",
      aspect: "row-span-1 col-span-1",
      position: "object-right-top",
      zoom: "scale-[2.4] origin-top-right"
    },
    {
      id: 3,
      src: "/gallery-1.jpg",
      title: "Wines & Specialty Drinks",
      desc: "Botanical mixes served after 5:00 PM.",
      aspect: "row-span-1 col-span-1",
      position: "object-right",
      zoom: "scale-[2] origin-right"
    },
    {
      id: 4,
      src: "/gallery-2.jpg",
      title: "Smoothies & Soft Drinks",
      desc: "Fresh juices, organic lemonades, and green boosters.",
      aspect: "row-span-1 col-span-1",
      position: "object-left",
      zoom: "scale-[1.8] origin-left"
    },
    {
      id: 5,
      src: "/gallery-0.jpg",
      title: "Sage & Ivory Emblem",
      desc: "Minimalist brand color tone study.",
      aspect: "row-span-1 col-span-1",
      position: "object-center",
      zoom: "scale-100 grayscale opacity-80"
    }
  ];

  return (
    <section id="gallery" className="relative py-32 px-6 bg-gradient-to-b from-[#FAF9F6] to-[#FAF9F6] z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Visual Curation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            Details & Formats <br />
            <span className="font-sans font-bold text-sage italic">Captured Live at the Cafe</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setActiveImage(idx)}
              className={`group relative overflow-hidden rounded-3xl glass-card border border-sage/12 cursor-pointer ${item.aspect}`}
            >
              <div className="absolute inset-0 z-10 bg-[#FAF9F6]/20 group-hover:bg-[#FAF9F6]/5 transition-colors duration-500" />
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.position} ${item.zoom} transition-transform duration-1000 group-hover:scale-105`}
                />
              </div>

              {/* Hover Overlay Detail */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-base text-olive">{item.title}</h3>
                    <p className="text-[10px] text-olive/70 mt-0.5 font-light">{item.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-olive">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[1000] bg-[#FAF9F6]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-olive/75 hover:text-olive bg-sage/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full h-[70vh] rounded-2xl overflow-hidden border border-sage/15"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[activeImage].src}
                alt={galleryItems[activeImage].title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Image Details */}
            <div className="text-center mt-6 max-w-lg px-4">
              <h3 className="font-display text-2xl text-olive font-light">
                {galleryItems[activeImage].title}
              </h3>
              <p className="text-sm text-olive/70 mt-1 font-light">
                {galleryItems[activeImage].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
