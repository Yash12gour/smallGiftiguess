import { motion } from "motion/react";
import { Sparkles, Gift, Heart, ArrowDownCircle } from "lucide-react";

interface GiftBoxRevealProps {
  onOpen: () => void;
}

export default function GiftBoxReveal({ onOpen }: GiftBoxRevealProps) {
  return (
    <div className="fixed inset-0 w-full h-full bg-linear-to-b from-[#252220] via-brand-charcoal to-[#1C1A19] flex flex-col items-center justify-center text-center px-4 overflow-hidden z-[100]">
      {/* Sparkly Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={`gold-star-${i}`}
            className="absolute rounded-full bg-amber-250"
            style={{
              width: Math.random() * 4 + 1.5,
              height: Math.random() * 4 + 1.5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.35,
            }}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
        {/* Soft glowing ambient lighting behind the box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-brand-rose/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-xl">
        
        {/* Soft Floating Crown Heart Accent */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-rose text-[11px] uppercase tracking-widest mb-6 select-none"
        >
          <Heart className="w-3 h-3 fill-current animate-pulse text-brand-rose" />
          <span>A Handcrafted Present For Nishi</span>
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-4xl md:text-5xl font-serif text-[#FFF7EC] font-bold tracking-tight px-1"
        >
          For Someone Who Means <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-lavender to-brand-beige">
            More Than Words
          </span> Can Say
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-sm md:text-base font-serif italic text-brand-cream/80 max-w-sm mt-4 leading-relaxed"
        >
          A tiny digital escape woven from permanent flowers, cherished memories, and an honest hand-written letter.
        </motion.p>

        {/* Elegant Animated Gift Box Render */}
        <motion.div
          className="relative w-56 h-56 my-8 cursor-pointer flex items-center justify-center group"
          onClick={onOpen}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Glowing Shadow underneath */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 rounded-full blur-md" />

          {/* Luxury Gift Box SVG Artwork with Gold Gilded Ornaments */}
          <svg className="w-44 h-44 drop-shadow-2xl z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="box-base" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF7F2" />
                <stop offset="100%" stopColor="#E2D4C2" />
              </linearGradient>
              <linearGradient id="box-lid" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="100%" stopColor="#DACBB7" />
              </linearGradient>
              <linearGradient id="ribbon-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DCAE6C" />
                <stop offset="50%" stopColor="#F9DFB0" />
                <stop offset="100%" stopColor="#BF924F" />
              </linearGradient>
            </defs>

            {/* Main Box body */}
            <rect x="40" y="80" width="120" height="90" rx="6" fill="url(#box-base)" />
            
            {/* Box Lid */}
            <rect x="34" y="65" width="132" height="18" rx="3" fill="url(#box-lid)" stroke="#C6B5A1" strokeWidth="0.5" />
            
            {/* Gold Ribbon Vertical wrap */}
            <rect x="92" y="65" width="16" height="105" fill="url(#ribbon-gold)" />
            
            {/* Gold Ribbon Horizontal wrap */}
            <rect x="40" y="115" width="120" height="16" fill="url(#ribbon-gold)" />

            {/* Rose gold bow tie */}
            {/* Left loop */}
            <path d="M 100 65 Q 70 30 85 45 Q 98 60 100 65 Z" fill="#E8B8C7" stroke="#DC93AB" strokeWidth="0.5 animate" />
            {/* Right loop */}
            <path d="M 100 65 Q 130 30 115 45 Q 102 60 100 65 Z" fill="#E8B8C7" stroke="#DC93AB" strokeWidth="0.5 animate" />
            
            {/* Center knot */}
            <circle cx="100" cy="65" r="7" fill="#F4BAC9" stroke="#CC7C93" strokeWidth="1" />
            
            {/* Hanging tails */}
            <path d="M 97 68 C 88 84 80 95 85 110" stroke="#E8B8C7" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M 103 68 C 112 84 120 95 115 110" stroke="#E8B8C7" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.9" />
          </svg>

          {/* Interactive Sparkle Elements hovering */}
          <motion.div 
            className="absolute top-2 left-6 z-20 pointer-events-none"
            animate={{ scale: [0.9, 1.25, 0.9], rotate: 180 }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            <Sparkles className="w-5 h-5 text-amber-200 fill-amber-200" />
          </motion.div>
          <motion.div 
            className="absolute bottom-4 right-4 z-20 pointer-events-none"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          >
            <Sparkles className="w-4.5 h-4.5 text-brand-rose fill-brand-rose" />
          </motion.div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          onClick={onOpen}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-brand-rose to-brand-beige border border-brand-rose/25 font-sans font-bold text-white shadow-xl hover:shadow-brand-rose/20 rounded-full cursor-pointer transition-all hover:brightness-105 active:scale-97 group z-10 select-none text-[15px]"
        >
          <Gift className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform" />
          <span>Open Your Gift</span>
        </motion.button>

        <p className="text-[10px] font-mono tracking-widest text-[#FFF7EC]/40 uppercase mt-5 select-none flex items-center gap-1.5">
          <ArrowDownCircle className="w-3 h-3 animate-bounce" />
          <span>Tap anywhere on the box or click the button to unfold</span>
        </p>
      </div>
    </div>
  );
}
