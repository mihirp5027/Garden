"use client";

import { Star, Sparkles } from "lucide-react";

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const row1: Review[] = [
    {
      name: "Sophia Lindqvist",
      role: "Botanical Designer",
      text: "The Rose Matcha is absolute poetry. You can taste the organic quality of the rose water, and the greenhouse glass setting makes it a total escape.",
      rating: 5
    },
    {
      name: "Marcus Kincaid",
      role: "Wine Curator",
      text: "Garden Café is in a league of its own. The biodynamic Orange Wine selection is curated with immaculate taste, and the atmosphere is organic luxury.",
      rating: 5
    },
    {
      name: "Eleanor Sterling",
      role: "Specialty Writer",
      text: "Sipping a single-origin flat white under cascading palm leaves has become my absolute weekend ritual. Brighton's best hidden sanctuary.",
      rating: 5
    }
  ];

  const row2: Review[] = [
    {
      name: "Julian Royston",
      role: "Gastronomy Critic",
      text: "The Lavender Gin Fizz is crisp, fresh, and perfectly balanced. The botanical charcuterie pairing highlights Sussex's finest organic produce.",
      rating: 5
    },
    {
      name: "Liam Montgomery",
      role: "Architectural Lead",
      text: "The glasshouse structure matches the elegance of their menu. A masterclass in luxury minimal hospitality and botanical styling.",
      rating: 5
    },
    {
      name: "Clara Vance",
      role: "Matcha Enthusiast",
      text: "The ceremonial-grade matcha from Uji is whisked to perfection. It is incredibly smooth, sweet, and has zero bitterness. Simply exceptional.",
      rating: 5
    }
  ];

  const renderCard = (review: Review, idx: number) => (
    <div
      key={idx}
      className="w-[320px] sm:w-[400px] flex-shrink-0 p-6 rounded-3xl glass-card border border-sage/12 flex flex-col justify-between select-none hover:border-sage/35 transition-colors"
    >
      <div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-olive/80 leading-relaxed font-light italic">
          "{review.text}"
        </p>
      </div>
      <div className="mt-6 border-t border-sage/10 pt-4 flex items-center justify-between">
        <div>
          <h4 className="text-xs text-olive font-medium">{review.name}</h4>
          <p className="text-[10px] text-olive/60 font-light mt-0.5">{review.role}</p>
        </div>
        <span className="text-[10px] text-gold uppercase tracking-wider font-semibold font-mono">Verified Guest</span>
      </div>
    </div>
  );

  return (
    <section className="relative py-32 bg-[#FAF9F6] overflow-hidden z-20">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-sage" /> Guest Journals
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
          Whispers & Acclaims <br />
          <span className="font-sans font-bold text-sage italic">From Brighton Locals</span>
        </h2>
      </div>

      {/* Row 1: Left Direction */}
      <div className="flex overflow-hidden gap-6 w-full mb-6">
        <div className="flex gap-6 animate-marquee">
          {row1.map((r, i) => renderCard(r, i))}
          {row1.map((r, i) => renderCard(r, i + 100))}
        </div>
      </div>

      {/* Row 2: Right Direction */}
      <div className="flex overflow-hidden gap-6 w-full">
        <div className="flex gap-6 animate-marquee-reverse">
          {row2.map((r, i) => renderCard(r, i))}
          {row2.map((r, i) => renderCard(r, i + 100))}
        </div>
      </div>

    </section>
  );
}
