"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Prompt Engineering",
    issuer: "IBM",
    description: "Certified in prompt design and optimization for generative AI models.",
    link: "#"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Tata",
    description: "Completed practical tasks in data visualization, analysis, and strategic communication.",
    link: "#"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Infosys Springboard",
    description: "Certification covering the foundational concepts of AI and its applications.",
    link: "#"
  },
  {
    title: "Space Science Awareness",
    issuer: "ISRO",
    description: "Participated in World Space Week programs on space science awareness.",
    link: "#"
  },
];

export default function Certifications() {
  return (
    <section className="relative bg-black py-32 px-8 md:px-24 text-white z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Title side */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Achievements</h3>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Certifications
            </h2>
          </motion.div>
        </div>

        {/* Content side */}
        <div className="md:w-2/3 flex flex-col gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-6">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Award className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-medium mb-1">{cert.title}</h4>
                      <p className="text-xs uppercase tracking-widest text-white/40 font-mono mb-4">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-white/60 max-w-md">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  
                  {cert.link && cert.link !== "#" && (
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white text-white group-hover:text-black transition-colors duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return cert.link && cert.link !== "#" ? (
              <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {Card}
              </a>
            ) : (
              <div key={i} className="block">
                {Card}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
