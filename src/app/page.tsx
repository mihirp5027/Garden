"use client";

import { useState } from "react";
import Scene from "@/components/3d/Scene";
import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#FAF9F6] text-olive">
      {/* Dynamic 3D interactive background loaded when loader is complete */}
      {!loading && <Scene />}
      
      {/* Page Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* Content layout */}
      {!loading && (
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Portfolio />
          <Process />
          <Testimonials />
          <Team />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}
