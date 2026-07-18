"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Globe } from "lucide-react";

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

interface Member {
  initials: string;
  name: string;
  role: string;
  bio: string;
  socials: {
    instagram: string;
    mail: string;
    website: string;
  };
}

export default function Team() {
  const members: Member[] = [
    {
      initials: "EL",
      name: "Evelyn Laurent",
      role: "Founder & Curator",
      bio: "Sourcing biodynamic wines and styling our indoor glasshouse botanicals.",
      socials: { instagram: "#", mail: "mailto:evelyn@garden.cafe", website: "#" }
    },
    {
      initials: "DO",
      name: "Daniel Owens",
      role: "Head Roaster",
      bio: "Crafting organic roast profiles and monitoring extraction precision.",
      socials: { instagram: "#", mail: "mailto:daniel@garden.cafe", website: "#" }
    },
    {
      initials: "MC",
      name: "Maeve Cleary",
      role: "Lead Herbalist",
      bio: "Steeping specialty matchas and distilling lavender-rose botanical syrups.",
      socials: { instagram: "#", mail: "mailto:maeve@garden.cafe", website: "#" }
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#FAF9F6] to-[#FAF9F6] z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sage" /> The Artisans
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-olive tracking-wide">
            The Minds Behind <br />
            <span className="font-sans font-bold text-sage italic">Our Botanical Curation</span>
          </h2>
        </div>

        {/* Circular Profiles Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
          {members.map((member, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx}
              className="flex flex-col items-center"
            >
              {/* Circular Card Container */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border border-sage/15 bg-sage/5 backdrop-blur-md flex items-center justify-center group cursor-pointer transition-all duration-500 hover:border-sage/40 hover:bg-sage/15">
                
                {/* Default View: Monogram */}
                <div className="flex flex-col items-center transition-all duration-500 group-hover:scale-75 group-hover:opacity-0">
                  <span className="font-display text-4xl font-light text-olive group-hover:text-sage-dark transition-colors duration-500">
                    {member.initials}
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-gold mt-1.5">Artisan</span>
                </div>

                {/* Hover View: Bio & Socials */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <p className="text-[10px] text-olive/75 font-light leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a href={member.socials.instagram} className="text-olive/50 hover:text-gold transition-colors">
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.socials.mail} className="text-olive/50 hover:text-gold transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.socials.website} className="text-olive/50 hover:text-gold transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Name & Role below circle */}
              <h3 className="font-display text-lg text-olive mt-6 font-medium">
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-gold mt-1 font-semibold">
                {member.role}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
