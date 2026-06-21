import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface Petal {
  id: number;
  x: number; // percentage
  size: number;
  delay: number;
  duration: number;
  rotateStart: number;
  swayAmplitude: number;
  color: string;
}

export default function BackgroundParticles() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate constant stream of falling petals
    const list: Petal[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 18 + 10, // 10px to 28px
      delay: Math.random() * -20, // Negative delay so some start midway
      duration: Math.random() * 12 + 15, // 15s to 27s
      rotateStart: Math.random() * 360,
      swayAmplitude: Math.random() * 30 + 15,
      color: getRandomPetalColor(),
    }));
    setPetals(list);
  }, []);

  function getRandomPetalColor() {
    const r = Math.random();
    if (r < 0.4) return "#FCE7EC"; // Soft rose pink
    if (r < 0.7) return "#EED8F7"; // Soft lavender
    return "#FFFBF2"; // Soft warm white
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft overlay gradients to give depth and romantic warmth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cream/80 via-transparent to-brand-rose/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-rose/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-lavender/5 blur-[150px]" />

      {/* Elegant, hand-drawn floral botanical line doodles on the margins of the screen */}
      {/* Tuberose stem doodle top left */}
      <div className="absolute -top-12 -left-12 w-64 h-64 text-brand-rose/15 pointer-events-none transform select-none hidden lg:block opacity-65">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
          <path d="M 20,20 Q 30,50 60,30" />
          <path d="M 23,28 Q 15,30 20,38 Q 28,32 23,28" fill="rgba(232, 184, 199, 0.05)" />
          <path d="M 32,35 Q 26,45 35,48 Q 40,40 32,35" fill="rgba(232, 184, 199, 0.05)" />
          <path d="M 45,34 Q 45,22 55,25 Q 52,35 45,34" fill="rgba(232, 184, 199, 0.05)" />
          <path d="M 52,32 Q 62,38 68,30 Q 60,25 52,32" fill="rgba(232, 184, 199, 0.05)" />
          {/* Leaves */}
          <path d="M 26,38 Q 30,42 22,46 Q 16,42 26,38" />
          <path d="M 40,34 Q 46,38 38,42 Q 32,38 40,34" />
        </svg>
      </div>

      {/* Elegant rose branch doodle right side */}
      <div className="absolute top-1/3 -right-16 w-80 h-80 text-brand-rose/12 pointer-events-none transform rotate-45 select-none hidden md:block opacity-65">
        <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-full">
          <path d="M 60,10 C 50,30 30,60 40,110" />
          {/* Central delicate bloom */}
          <circle cx="62" cy="18" r="6" fill="rgba(232, 184, 199, 0.06)" />
          <path d="M 56,18 C 50,14 62,6 68,12 C 74,18 64,26 56,18 Z" />
          <path d="M 58,16 C 62,10 70,14 64,20 C 58,22 54,14 58,16 Z" />
          {/* Secondary buds */}
          <path d="M 48,38 Q 40,38 45,30 Q 51,32 48,38 Z" fill="rgba(232, 184, 199, 0.03)" />
          <path d="M 48,38 L 41,45" />
          {/* Leaves with handwrought veins */}
          <path d="M 40,65 Q 22,60 30,50 Q 42,55 40,65 Z" />
          <path d="M 30,50 L 37,58" />
          <path d="M 41,80 Q 58,85 50,95 Q 36,90 41,80 Z" />
          <path d="M 50,95 L 44,87" />
        </svg>
      </div>

      {/* Tuberose delicate blooms at the bottom left */}
      <div className="absolute -bottom-16 -left-16 w-96 h-96 text-brand-sage/12 pointer-events-none transform -rotate-12 select-none hidden lg:block opacity-65">
        <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-full h-full">
          <path d="M 20,100 L 80,40" />
          {/* Cluster of tubular sweet flowers */}
          <path d="M 50,70 Q 40,68 45,60 T 55,68 Z" fill="rgba(246, 245, 238, 0.1)" />
          <path d="M 53,67 L 46,72" />
          
          <path d="M 62,58 Q 52,56 57,48 T 67,56 Z" fill="rgba(246, 245, 238, 0.1)" />
          <path d="M 65,55 L 58,60" />

          <path d="M 72,48 Q 65,42 70,36 T 78,44 Z" fill="rgba(246, 245, 238, 0.1)" />
          <path d="M 75,45 L 68,50" />
          
          {/* Long grass-like botanical leaves */}
          <path d="M 20,100 Q 15,60 35,50" />
          <path d="M 20,100 Q 38,75 42,55" />
          <path d="M 20,100 Q 46,90 52,70" />
        </svg>
      </div>

      {/* Floating Petal Stream */}
      {petals.map((petal) => (
        <motion.svg
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            width: petal.size,
            height: petal.size,
            opacity: 0.65,
          }}
          viewBox="0 0 24 24"
          initial={{
            y: "-10%",
            x: 0,
            rotate: petal.rotateStart,
          }}
          animate={{
            y: "110vh",
            rotate: petal.rotateStart + 360,
            x: [0, petal.swayAmplitude, -petal.swayAmplitude, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          {/* Real organic petal path shape with elegant shadows */}
          <path
            d="M12 21c-4.42 0-8-3.58-8-8c0-3.21 2.22-6.53 4.21-8.5c.98-.97 2.19-1.5 3.79-1.5s2.81.53 3.79 1.5c1.99 1.97 4.21 5.29 4.21 8.5c0 4.42-3.58 8-8 8z"
            fill={petal.color}
            stroke="#000"
            strokeOpacity={0.06}
            strokeWidth={0.5}
          />
          {/* Highlight for organic petal sheen */}
          <path
            d="M12 4c1 .8 2 2.5 2.5 4.5"
            fill="none"
            stroke="#FFF"
            strokeWidth={0.8}
            strokeOpacity={0.5}
          />
        </motion.svg>
      ))}

      {/* Tender glowing dust sparkles (particles) */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-amber-200/40 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.2, 0.8],
              y: [0, -Math.random() * 30 - 10],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
