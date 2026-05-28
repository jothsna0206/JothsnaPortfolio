"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Checkpoints:
  // 0-30%: "My Name. Creative Developer." (center)
  // 30-60%: "I build digital experiences." (left)
  // 60-100%: "Bridging design and engineering." (right)

  // Opacity transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.3], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.85, 1], [0, 1, 1, 0]);

  // Y and X transforms for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.55], [-50, 0]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24 text-white">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">
            Jothsna Sree.
          </h1>
          <p className="text-xl md:text-3xl text-white/70 font-light tracking-wide">
            Creative Developer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, x: x2 }}
          className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-2xl"
        >
          <h2 className="text-4xl md:text-7xl font-medium leading-tight tracking-tight">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-white">experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, x: x3 }}
          className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-2xl text-right"
        >
          <h2 className="text-4xl md:text-7xl font-medium leading-tight tracking-tight">
            Bridging design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-neutral-400 to-white">and engineering.</span>
          </h2>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          style={{ opacity: opacity1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
