"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-[#FAF9F6] to-[#FAF9F6] z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Connections
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            Reserve Your Experience
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Details & Map */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-olive font-light mb-4">Garden Café Brighton</h3>
              <p className="text-sm text-olive/75 leading-relaxed font-light max-w-md">
                Step into our glass dome greenhouse sanctuary. Located in the heart of Brighton, we offer private bookings, slow breakfasts, and candlelit wine events.
              </p>
              
              <div className="space-y-4 text-xs sm:text-sm text-olive/80 font-light">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-sage" />
                  <span>14 Regent St, Brighton, BN1 1UW, United Kingdom</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+44 1273 004566</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sage" />
                  <span>hello@gardencafe-brighton.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Mon-Fri: 8am-6pm | Sat-Sun: 9am-10pm (Wine & Cocktails after 5pm)</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-[220px] rounded-3xl glass-card overflow-hidden border border-sage/12 flex items-center justify-center bg-[#FAF9F6]/50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-sage/10 blur-3xl pointer-events-none" />
              <div className="text-center p-6 z-10">
                <MapPin className="w-8 h-8 text-gold animate-bounce mx-auto mb-3" />
                <span className="text-xs uppercase tracking-widest text-olive font-medium">Brighton Lanes Map</span>
                <p className="text-[10px] text-olive/60 mt-1 font-light">14 Regent Street (Near Royal Pavilion)</p>
              </div>
              {/* Decorative grid line */}
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            </div>

            <div className="text-[10px] uppercase tracking-widest text-sage/75 italic">
              Made with passion — served with love.
            </div>
          </div>

          {/* Right Column: Glassmorphic Reservation Form */}
          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-sage/12 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-gold/5 blur-2xl pointer-events-none" />
            <h3 className="font-display text-xl text-olive font-light mb-6">Reservation Form</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-sage/10 border border-sage/20 rounded-2xl p-6 text-center h-[280px] flex flex-col justify-center items-center"
              >
                <Sparkles className="w-8 h-8 text-gold mb-3 animate-spin" />
                <h4 className="font-display text-lg text-olive mb-1">Reservation Request Logged!</h4>
                <p className="text-xs text-olive/75 font-light leading-relaxed max-w-xs">
                  We've sent a priority reservation request to the team. We will confirm your table shortly via email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full px-4 py-3 bg-sage/5 border border-sage/15 rounded-2xl focus:border-sage focus:outline-none placeholder-transparent text-xs sm:text-sm text-olive transition-all"
                    placeholder="Full Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3.5 text-olive/60 text-xs transition-all pointer-events-none
                      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs
                      peer-focus:top-[-7px] peer-focus:text-[9px] peer-focus:text-sage bg-[#FAF9F6] px-1.5 rounded
                      peer-[:not(:placeholder-shown)]:top-[-7px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-sage"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full px-4 py-3 bg-sage/5 border border-sage/15 rounded-2xl focus:border-sage focus:outline-none placeholder-transparent text-xs sm:text-sm text-olive transition-all"
                    placeholder="Email Address"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3.5 text-olive/60 text-xs transition-all pointer-events-none
                      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs
                      peer-focus:top-[-7px] peer-focus:text-[9px] peer-focus:text-sage bg-[#FAF9F6] px-1.5 rounded
                      peer-[:not(:placeholder-shown)]:top-[-7px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-sage"
                  >
                    Email Address
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 bg-sage/5 border border-sage/15 rounded-2xl focus:border-sage focus:outline-none text-xs text-olive/75"
                      required
                    />
                  </div>
                  {/* Guests */}
                  <div className="relative">
                    <select
                      id="guests"
                      className="w-full px-4 py-3 bg-sage/5 border border-sage/15 rounded-2xl focus:border-sage focus:outline-none text-xs text-olive/75 appearance-none cursor-pointer"
                      required
                    >
                      <option value="2" className="bg-[#FAF9F6]">2 Guests</option>
                      <option value="3" className="bg-[#FAF9F6]">3 Guests</option>
                      <option value="4" className="bg-[#FAF9F6]">4 Guests</option>
                      <option value="5" className="bg-[#FAF9F6]">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows={3}
                    className="peer w-full px-4 py-3 bg-sage/5 border border-sage/15 rounded-2xl focus:border-sage focus:outline-none placeholder-transparent text-xs sm:text-sm text-olive transition-all resize-none"
                    placeholder="Special Requests (Allergens, Seating Preference)"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3.5 text-olive/60 text-xs transition-all pointer-events-none
                      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs
                      peer-focus:top-[-7px] peer-focus:text-[9px] peer-focus:text-sage bg-[#FAF9F6] px-1.5 rounded
                      peer-[:not(:placeholder-shown)]:top-[-7px] peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-sage"
                  >
                    Special Requests (Allergens, Seating)
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Magnetic>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-olive text-white font-semibold text-xs uppercase tracking-widest hover:bg-sage hover:text-white transition-all duration-300 shadow-md cursor-pointer"
                    >
                      Submit Reservation Request
                    </button>
                  </Magnetic>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
