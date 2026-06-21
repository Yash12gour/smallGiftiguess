import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Heart } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-brand-cream/60 backdrop-blur-sm z-50">
      {/* Scroll indicator bar */}
      <motion.div
        className="h-full bg-linear-to-r from-brand-rose via-brand-lavender to-brand-sage origin-left relative"
        style={{ scaleX }}
      >
        {/* Floating Heart bulb tracker at the end of the scroll width */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4.5 h-4.5 rounded-full bg-brand-rose hover:bg-brand-sage shadow-md flex items-center justify-center transition-all duration-300"
          style={{ cursor: "ew-resize" }}
        >
          <Heart className="w-2.5 h-2.5 text-white fill-white" />
        </div>
      </motion.div>

      {/* Floating subtle percentage pill in corner */}
      <div className="absolute right-4 top-4 bg-brand-ivory/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-brand-rose/10 shadow-xs text-[10px] font-mono font-medium text-brand-charcoal/60 pointer-events-none select-none">
        Journey: {percentage}%
      </div>
    </div>
  );
}
