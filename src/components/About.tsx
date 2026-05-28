"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black py-32 px-8 md:px-24 text-white z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Title side */}
        <div className="md:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              Driven by <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-white">Curiosity</span>
            </h2>
          </motion.div>
        </div>

        {/* Content side */}
        <div className="md:w-7/12 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-2xl font-light leading-relaxed text-white/80"
          >
            <p className="mb-6">
              I am a passionate developer with a drive to create meaningful digital experiences. I enjoy exploring how technology shapes the world and constantly challenge myself to learn, build, and innovate through hands-on projects and real-world problem-solving.
            </p>
            <p>
              When I'm not coding, you'll find me studying new design patterns, exploring creative technologies, and finding ways to turn inspiration into innovation. I believe that the best products are built at the intersection of robust engineering and beautiful design.
            </p>
          </motion.div>

          {/* Core Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-8"
          >
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">Core Qualities</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Problem Solver', 'Continuous Learner', 'Detail Oriented', 'Creative Thinker', 'Adaptable', 'Collaborative'].map((quality, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <span className="text-sm md:text-base text-white/70">{quality}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
