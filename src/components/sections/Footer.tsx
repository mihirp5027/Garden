"use client";

import { FormEvent, useState } from "react";
import { Sparkles, ArrowRight, Mail, MessageSquare } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-[#F4F6F3] border-t border-sage/12 pt-24 pb-12 px-6 overflow-hidden z-20">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-sage/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Newsletter & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16 border-b border-sage/12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="font-display text-2xl tracking-widest text-olive font-light">
              GARDEN <span className="font-light text-gold italic">Café</span>
            </div>
            <p className="text-xs sm:text-sm text-olive/75 leading-relaxed font-light max-w-sm">
              Brighton's award-winning premium botanical retreat. Bringing together the aesthetics of Kew Gardens and organic culinary excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-sage/15 flex items-center justify-center text-olive/60 hover:text-gold hover:border-gold transition-all duration-300">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-sage/15 flex items-center justify-center text-olive/60 hover:text-gold hover:border-gold transition-all duration-300">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="mailto:hello@gardencafe-brighton.co.uk" className="w-8 h-8 rounded-full border border-sage/15 flex items-center justify-center text-olive/60 hover:text-gold hover:border-gold transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site Navigation links */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">Sanctuary</h4>
              <ul className="space-y-2 text-xs text-olive/75 font-light">
                <li><a href="#about" className="hover:text-sage-dark transition-colors">Our Roots</a></li>
                <li><a href="#services" className="hover:text-sage-dark transition-colors">Offerings</a></li>
                <li><a href="#portfolio" className="hover:text-sage-dark transition-colors">Botanical Menu</a></li>
                <li><a href="#process" className="hover:text-sage-dark transition-colors">Our Method</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">Details</h4>
              <ul className="space-y-2 text-xs text-olive/75 font-light">
                <li><a href="#gallery" className="hover:text-sage-dark transition-colors">Visual Curation</a></li>
                <li><a href="#faq" className="hover:text-sage-dark transition-colors">Queries</a></li>
                <li><a href="#contact" className="hover:text-sage-dark transition-colors">Reservations</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-1 space-y-4 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">The Journal</h4>
            <p className="text-xs text-olive/75 leading-relaxed font-light">
              Subscribe to receive updates on private botanical dining, seasonal menus, and acoustic courtyard sessions.
            </p>

            {subscribed ? (
              <div className="text-xs text-sage font-medium bg-sage/5 border border-sage/10 rounded-2xl p-4 animate-pulse">
                ✓ Joined the priority mailing list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 px-4 py-3 rounded-full bg-sage/5 border border-sage/15 text-xs text-olive focus:border-sage focus:outline-none transition-colors"
                  required
                />
                <Magnetic>
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-full bg-olive text-white flex items-center justify-center hover:bg-sage hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>

        </div>

        {/* Massive Backdrop typography display word */}
        <div className="select-none pointer-events-none mt-12 sm:mt-16 text-center">
          <span className="font-display text-[15vw] sm:text-[12vw] leading-none font-bold text-olive/[0.04] tracking-wider uppercase block">
            GARDEN
          </span>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-widest text-olive/50 mt-8 text-center sm:text-left gap-4">
          <span>© {new Date().getFullYear()} Garden Café Brighton. All Rights Reserved.</span>
          <span>Made with passion • Served with love</span>
        </div>

      </div>
    </footer>
  );
}
