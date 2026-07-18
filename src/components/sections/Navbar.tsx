"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Coffee, Wine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#portfolio", hasMega: true },
    { name: "Our Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#FAF9F6]/75 backdrop-blur-xl border-b border-sage/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sage/30 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Garden Cafe Brighton Logo"
                fill
                className="object-cover scale-110"
                priority
              />
            </div>
            <span className="font-display text-sm sm:text-base tracking-widest text-olive group-hover:text-sage transition-colors">
              GARDEN <span className="font-light text-gold italic">Café</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                onMouseLeave={() => link.hasMega && setActiveMenu(null)}
              >
                <a
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest text-olive/75 hover:text-olive flex items-center gap-1 py-2 transition-colors"
                >
                  {link.name}
                  {link.hasMega && <ChevronDown className="w-3 h-3 text-sage" />}
                </a>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {link.hasMega && activeMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] p-6 glass-panel rounded-2xl border border-sage/15 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-6 text-left">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-gold mb-3 font-semibold flex items-center gap-1.5 border-b border-sage/10 pb-1">
                            <Coffee className="w-3.5 h-3.5 text-sage" /> Beverages
                          </div>
                          <ul className="space-y-2.5">
                            <li>
                              <a href="#portfolio" className="group block">
                                <span className="text-xs text-olive group-hover:text-sage transition-colors block font-medium">Specialty Coffee</span>
                                <span className="text-[10px] text-olive/45 block">Latte, London Fog, Flat White</span>
                              </a>
                            </li>
                            <li>
                              <a href="#portfolio" className="group block">
                                <span className="text-xs text-olive group-hover:text-sage transition-colors block font-medium">Matcha Specials</span>
                                <span className="text-[10px] text-olive/45 block">Vanilla, Rose & Lavender Matcha</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-gold mb-3 font-semibold flex items-center gap-1.5 border-b border-sage/10 pb-1">
                            <Wine className="w-3.5 h-3.5 text-sage" /> Wine & Cocktails
                          </div>
                          <ul className="space-y-2.5">
                            <li>
                              <a href="#portfolio" className="group block">
                                <span className="text-xs text-olive group-hover:text-sage transition-colors block font-medium">Artisanal Wines</span>
                                <span className="text-[10px] text-olive/45 block">Tempranillo, Pinot Grigio, Malbec</span>
                              </a>
                            </li>
                            <li>
                              <a href="#portfolio" className="group block">
                                <span className="text-xs text-olive group-hover:text-sage transition-colors block font-medium">Botanical Cocktails</span>
                                <span className="text-[10px] text-olive/45 block">Lavender Gin Fizz, Mimosa</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Reservation Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative px-6 py-2.5 rounded-full overflow-hidden text-[10px] uppercase tracking-widest text-olive font-medium group border border-sage/40 transition-all duration-300 hover:border-gold/60"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sage/20 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              Book a Table
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-olive hover:text-sage transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center p-8"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl tracking-widest text-olive hover:text-sage transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-3 rounded-full bg-sage text-white font-semibold text-xs uppercase tracking-widest hover:bg-gold transition-colors"
              >
                Book a Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
