"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "What are your operating hours in Brighton?",
      a: "We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday & Sunday from 9:00 AM to 10:00 PM. Our curated organic wine cellar and botanical cocktail services commence at 5:00 PM."
    },
    {
      q: "Do I need to make a reservation in advance?",
      a: "Walk-ins are always welcome for morning coffees and afternoon matchas. However, for evening wine pairings, weekend brunch, or groups of 4+, we recommend booking a table via our online form."
    },
    {
      q: "Are alternative milks included in the specialty prices?",
      a: "Yes, completely! As shown on our physical menu specials, alternative milks (oat, almond, coconut) are included at no additional charge for all specialty drinks and matcha. We believe organic wellness should be accessible."
    },
    {
      q: "Do you offer gluten-free and vegan food options?",
      a: "Absolutely. We offer a curated selection of house-made vegan and gluten-free pastries, sourdough toppings, and salads. Ask our team or check the specials board at the till for daily curations."
    },
    {
      q: "Is the botanical glasshouse pet-friendly?",
      a: "Yes! We welcome well-behaved pets in both our outdoor courtyard oasis and the main glasshouse building. We even keep organic dog treats at the till!"
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-32 px-6 bg-[#F4F6F3] z-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Queries
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card overflow-hidden border border-sage/12"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className="font-display text-base sm:text-lg text-olive font-light hover:text-sage-dark transition-colors duration-300">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-gold"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-olive/75 leading-relaxed font-light border-t border-sage/10 pt-4 bg-[#FAF9F6]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
