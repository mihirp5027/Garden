"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ShoppingBag, Coffee, Flame, GlassWater, Wine, Activity } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  category: string;
  desc: string;
  allergens?: string;
  pairing?: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: "all", name: "All Curations" },
    { id: "hot-drinks", name: "Hot Drinks" },
    { id: "specialty", name: "Specialty Lattes" },
    { id: "matcha", name: "Matcha Specials" },
    { id: "wines", name: "Organic Wines" },
    { id: "cocktails", name: "Cocktails" }
  ];

  const menuItems: MenuItem[] = [
    {
      name: "Espresso",
      price: "£2.9",
      category: "hot-drinks",
      desc: "Pure intense double extraction of single-origin coffee with rich crema.",
      allergens: "Dairy-free, Gluten-free",
      pairing: "Morning Croissant"
    },
    {
      name: "Latte / Cappuccino",
      price: "£3.3",
      category: "hot-drinks",
      desc: "Double shot espresso with silky smooth steamed milk and light microfoam.",
      allergens: "Contains Milk (Oat/Almond alternatives available)",
      pairing: "Almond Danishes"
    },
    {
      name: "Flat White",
      price: "£3.4",
      category: "hot-drinks",
      desc: "Strong ristretto double shot topped with velvet-textured milk foam.",
      allergens: "Contains Milk (Oat/Almond alternatives available)",
      pairing: "Lemon Tart"
    },
    {
      name: "London Fog",
      price: "£4.6",
      category: "specialty",
      desc: "A soothing blend of Earl Grey tea, steamed milk, and vanilla or lavender syrup infusions.",
      allergens: "Contains Milk",
      pairing: "Scones & Jam"
    },
    {
      name: "Rose Latte",
      price: "£4.6",
      category: "specialty",
      desc: "Delicate and floral, infused with organic rose water. Add an extra shot of espresso for a kick.",
      allergens: "Contains Milk",
      pairing: "Pistachio Cake"
    },
    {
      name: "Lavender Latte",
      price: "£4.6",
      category: "specialty",
      desc: "Soft and aromatic with calming lavender notes, handcrafted with organic syrups.",
      allergens: "Contains Milk",
      pairing: "Vanilla Madeleines"
    },
    {
      name: "Turmeric Latte",
      price: "£4.8",
      category: "specialty",
      desc: "Warm and spiced golden milk featuring organic turmeric root, cinnamon, and organic honey.",
      allergens: "Gluten-free, Dairy-free",
      pairing: "Gluten-Free Brownie"
    },
    {
      name: "Vanilla Matcha Specials",
      price: "£5.6",
      category: "matcha",
      desc: "Ceremonial Uji matcha whisked to order and sweetened with organic Madagascar vanilla bean.",
      allergens: "Dairy-free (Served with alternative milks included)",
      pairing: "Matcha Cookie"
    },
    {
      name: "Rose Matcha Specials",
      price: "£5.6",
      category: "matcha",
      desc: "Vibrant green tea matcha layered with organic rose water infusion and soft coconut milk.",
      allergens: "Dairy-free (Served with alternative milks included)",
      pairing: "Rosewater Macaron"
    },
    {
      name: "Tempranillo Organic Union",
      price: "£6 / £22",
      category: "wines",
      desc: "Rich Spanish organic red wine displaying prominent ripe fruits of the forest and smooth tannins.",
      allergens: "Contains Sulphites",
      pairing: "Cheese & Charcuterie Board"
    },
    {
      name: "Sea Change Pinot Grigio",
      price: "£7 / £24",
      category: "wines",
      desc: "Crisp Italian white or rose wine with delightful notes of white peach, pear, and citrus.",
      allergens: "Contains Sulphites",
      pairing: "Organic Olive bowl"
    },
    {
      name: "Espresso Martini",
      price: "£9.0",
      category: "cocktails",
      desc: "Freshly pulled espresso shot shaken vigorously with vodka, Kahlúa, and simple cane syrup.",
      allergens: "Alcoholic",
      pairing: "Dark Chocolate Truffles"
    },
    {
      name: "Lavender Gin Fizz",
      price: "£11.0",
      category: "cocktails",
      desc: "Local Brighton dry gin combined with garden lavender syrup, fresh lemon juice, and soda.",
      allergens: "Alcoholic",
      pairing: "Rosemary Focaccia"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case "hot-drinks": return <Coffee className="w-3.5 h-3.5" />;
      case "specialty": return <Flame className="w-3.5 h-3.5" />;
      case "matcha": return <Activity className="w-3.5 h-3.5" />;
      case "wines": return <Wine className="w-3.5 h-3.5" />;
      default: return <GlassWater className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-gradient-to-b from-[#F4F6F3] to-[#FAF9F6] z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> Botanical Menu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            Select Curated Recipes <br />
            <span className="font-sans font-bold text-sage italic">Artisanally Formulated</span>
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-sage text-white shadow-lg font-semibold"
                  : "bg-sage/5 text-olive/75 hover:bg-sage/12 border border-sage/12"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className="p-6 rounded-3xl glass-card border border-sage/12 cursor-pointer hover:border-gold/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] uppercase tracking-widest text-sage flex items-center gap-1">
                      {getCategoryIcon(item.category)} {item.category}
                    </span>
                    <span className="text-sm font-semibold text-gold font-display">{item.price}</span>
                  </div>
                  <h3 className="font-display text-lg text-olive font-medium mb-2 group-hover:text-sage-dark transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-olive/75 leading-relaxed font-light line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-[9px] uppercase tracking-widest text-gold/80 hover:text-gold flex items-center gap-1">
                    Details +
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Menu Detail Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[1000] bg-[#FAF9F6]/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg p-8 sm:p-10 rounded-3xl glass-panel border border-sage/15 cursor-default text-left relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Backlight glow */}
              <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-sage/10 blur-[60px] pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-olive/60 hover:text-olive bg-sage/10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[9px] uppercase tracking-widest text-gold mb-2 block font-semibold">
                Recipe Selection
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-olive font-light mb-4">
                {selectedItem.name}
              </h3>
              
              <p className="text-sm text-olive/75 leading-relaxed font-light mb-6">
                {selectedItem.desc}
              </p>

              <div className="space-y-4 border-t border-sage/10 pt-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-sage font-semibold mb-1">Dietary & Allergens</h4>
                  <p className="text-xs text-olive/70 font-light">{selectedItem.allergens || "Organic, Vegan and Dairy-free options available."}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-sage font-semibold mb-1">Recommended Pairing</h4>
                  <p className="text-xs text-olive/70 font-light italic">Pairs perfectly with our {selectedItem.pairing || "Fresh Sourdough Board"}.</p>
                </div>
                <div className="bg-sage/10 border border-sage/18 rounded-2xl p-4 mt-6">
                  <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" /> Dining Instructions
                  </div>
                  <p className="text-xs text-olive/75 font-light leading-relaxed">
                    Please order at the till with your table number. All special matcha and lattes include plant-based alternatives in the prices.
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
