"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SKILLS = [
  { name: "Java", level: "Expert", description: "Object-oriented programming, data structures, and backend development." },
  { name: "MERN Stack", level: "Advanced", description: "Building full-stack web applications using MongoDB, Express, React, and Node.js." },
  { name: "TypeScript", level: "Advanced", description: "Writing scalable, type-safe code for large front-end codebases." },
  { name: "HTML & CSS", level: "Expert", description: "Crafting semantic, accessible, and highly responsive web layouts." },
  { name: "Tailwind CSS", level: "Expert", description: "Crafting beautiful, responsive layouts rapidly without leaving the HTML." },
  { name: "Framer Motion", level: "Intermediate", description: "Implementing fluid animations and complex scroll-linked interactions." },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-32 px-8 md:px-24 text-white z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">My Skills</h3>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-white/40 text-sm">Hover to glow, Click to see details</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveSkill(activeSkill === i ? null : i)}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 cursor-pointer overflow-hidden transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 blur-[50px] rounded-full" />
              </div>

              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-medium mb-1 group-hover:text-white transition-colors">{skill.name}</h4>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-mono">{skill.level}</p>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeSkill === i ? "auto" : 0,
                    opacity: activeSkill === i ? 1 : 0,
                    marginTop: activeSkill === i ? "1rem" : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-white/60 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
