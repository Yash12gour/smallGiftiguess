import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface TuberosePreloaderProps {
  onComplete: () => void;
}

export default function TuberosePreloader({ onComplete }: TuberosePreloaderProps) {
  const [loadingText, setLoadingText] = useState("Weaving the perpetual bloom...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant narrative text transition
    const textIntervals = [
      { time: 600, text: "Gathering Yashe's letter details..." },
      { time: 1400, text: "Brewing the sweet aroma of Tuberoses..." },
      { time: 2000, text: "Polishing your permanent keepsake box..." },
      { time: 2600, text: "Ready to sprout." }
    ];

    const timeouts = textIntervals.map(({ time, text }) => 
      setTimeout(() => setLoadingText(text), time)
    );

    // Smoothly grow progress count
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    // Fade out after completion
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  // Elegant SVG path animators
  const stemVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.8,
      transition: { duration: 1.8, ease: "easeInOut" }
    }
  };

  const petalVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 1.0 + i * 0.15, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-brand-cream/95 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-rose/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-sage/5 rounded-full blur-[80px] pointer-events-none animate-pulse" />

      {/* Frame wrapper with delicate fine-art paper borders */}
      <div className="relative flex flex-col items-center bg-white/70 backdrop-blur-md px-8 py-10 md:px-12 md:py-14 rounded-[36px] shadow-xl border border-brand-rose/10 max-w-sm w-full mx-4 text-center">
        
        {/* Skipping button for premium speed */}
        <button 
          onClick={onComplete}
          className="absolute top-4 right-5 text-[9px] font-mono tracking-[0.25em] text-brand-charcoal/40 hover:text-brand-rose transition-colors uppercase leading-none z-10 cursor-pointer"
        >
          Skip Intro
        </button>

        {/* Animated Hand-drawn Tuberose Vector Spire */}
        <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-brand-rose/65">
            {/* The primary stem */}
            <motion.path 
              d="M 50 95 C 48 65 52 40 50 15" 
              stroke="#7E9362" 
              strokeWidth="1.2"
              variants={stemVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* Elegant offshoot branches */}
            <motion.path 
              d="M 50 65 Q 40 55 42 45" 
              stroke="#7E9362" 
              strokeWidth="0.8"
              variants={stemVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path 
              d="M 50 50 Q 60 42 57 32" 
              stroke="#7E9362" 
              strokeWidth="0.8"
              variants={stemVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Bloom Florets */}
            {/* Topmost elegant star bud */}
            <motion.g custom={0} variants={petalVariants} initial="hidden" animate="visible">
              <circle cx="50" cy="15" r="3" fill="#FFFDF9" stroke="#E3E0CD" strokeWidth="0.5" />
              <path d="M 48.5 15 L 51.5 15 M 50 13.5 L 50 16.5" stroke="#DECBA4" strokeWidth="0.5" />
            </motion.g>

            {/* Second bud layer */}
            <motion.g custom={1} variants={petalVariants} initial="hidden" animate="visible">
              {/* Bud cluster left */}
              <path d="M 42 45 C 38 43 36 48 42 49 Z" fill="#FAF6EE" stroke="#D3CEAD" strokeWidth="0.4" />
              <circle cx="42" cy="45" r="1.5" fill="#EADFBE" />
            </motion.g>

            <motion.g custom={2} variants={petalVariants} initial="hidden" animate="visible">
              {/* Bud cluster right */}
              <path d="M 57 32 C 61 30 63 35 57 36 Z" fill="#FAF6EE" stroke="#D3CEAD" strokeWidth="0.4" />
              <circle cx="57" cy="32" r="1.5" fill="#EADFBE" />
            </motion.g>

            {/* Fully bloated starry tuberoses on main stem */}
            <motion.g custom={3} variants={petalVariants} initial="hidden" animate="visible">
              <path d="M 50 52 C 45 42 55 42 50 52 Z" fill="#FAF9F4" stroke="#D6D3C2" strokeWidth="0.5" />
              <circle cx="50" cy="48" r="2.5" fill="#FFFFFF" stroke="#E8DCCF" strokeWidth="0.4" />
              <circle cx="50" cy="48" r="0.8" fill="#DECBA4" />
            </motion.g>

            <motion.g custom={4} variants={petalVariants} initial="hidden" animate="visible">
              <path d="M 50 72 C 43 65 57 65 50 72 Z" fill="#FAF9F4" stroke="#D6D3C2" strokeWidth="0.5" />
              <circle cx="50" cy="68" r="2.8" fill="#FFFFFF" stroke="#E8DCCF" strokeWidth="0.4" />
              <circle cx="50" cy="68" r="0.8" fill="#DECBA4" />
            </motion.g>
          </svg>

          {/* Sparkly blooming indicator */}
          <motion.div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-brand-rose"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Sparkles className="w-5 h-5 fill-brand-rose/25" />
          </motion.div>
        </div>

        {/* Brand/Poetic text */}
        <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-brand-charcoal font-bold leading-none mb-1">
          Tuberose Bouquet • 2026
        </h4>
        <p className="text-[10px] font-mono text-brand-sage uppercase tracking-wider mb-6">
          Nishi's Digital Sanctuary
        </p>

        {/* Progress percent numerical */}
        <div className="font-mono text-[11px] text-brand-rose font-bold mb-2">
          {progress}%
        </div>

        {/* Dynamic Loading Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs font-serif italic text-brand-charcoal/70 h-4 leading-none"
          >
            {loadingText}
          </motion.p>
        </AnimatePresence>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[3px] bg-brand-rose/10 rounded-full mt-5 overflow-hidden">
          <motion.div 
            className="h-full bg-brand-rose rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
