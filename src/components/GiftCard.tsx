import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MailOpen, Mail, Sparkles } from "lucide-react";

export default function GiftCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="gift-card-section" className="relative w-full max-w-md mx-auto py-8 px-4 flex flex-col items-center">
      
      {/* Light Rays Background Effect */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] bg-gradient-radial from-brand-rose/15 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <p className="text-xs uppercase tracking-widest text-brand-rose font-medium text-center mb-4 relative z-10">
        The Personalized Keepsake
      </p>
      
      {/* Interactive Envelope Container */}
      <div 
        className="relative w-full aspect-[4/3] bg-brand-beige/25 rounded-3xl p-6 border border-brand-rose/20 shadow-lg backdrop-blur-sm flex flex-col justify-between overflow-hidden cursor-pointer selection:bg-rose-100 z-10"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Envelope backing and paper crease */}
        <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-brand-rose/10 pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-36 h-36 rounded-full bg-brand-lavender/10 pointer-events-none" />

        {/* Envelope Top Header visual */}
        <div className="flex items-center justify-between border-b border-brand-rose/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-rose" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sage" />
            <span className="text-xs font-mono text-brand-charcoal/50">Yashe to Nishi</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen ? (
              <MailOpen className="w-4.5 h-4.5 text-brand-rose" />
            ) : (
              <Mail className="w-4.5 h-4.5 text-brand-charcoal/40" />
            )}
          </motion.div>
        </div>

        {/* Envelope Body / Card Animation Area */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-visible">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope-closed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-6"
              >
                <div className="inline-block px-3 py-1 bg-brand-rose/10 text-brand-rose rounded-full text-[11px] font-sans font-medium mb-2.5">
                  HAND DELIVERED
                </div>
                <h3 className="text-xl font-serif text-brand-charcoal">
                  Click to slide out the letter card
                </h3>
                <p className="text-xs text-brand-charcoal/50 mt-1 font-sans">
                  A message that remains forever
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="card-open"
                initial={{ y: 80, opacity: 0, rotate: -2 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="bg-brand-ivory p-6 rounded-2xl border border-brand-rose/25 shadow-md w-full relative z-10 text-center"
              >
                {/* Embedded Pressed Flower vector icon */}
                <span className="absolute top-2 right-4 text-xs font-serif italic text-brand-rose/30">pressed rose petal</span>
                
                {/* Heartfelt gift card text */}
                <p className="text-sm font-sans tracking-wide text-brand-charcoal/60 leading-relaxed italic z-10">
                  &ldquo;A bouquet that will never fade, just like the memories it represents.&rdquo;
                </p>
                
                <div className="mt-4 flex flex-col items-center">
                  <div className="w-8 h-[1px] bg-brand-rose/30 mb-2" />
                  <p className="font-handwritten text-2xl text-brand-rose select-none">
                    With ultimate warmth
                  </p>
                </div>

                <motion.div 
                  className="absolute -top-3 -left-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sparkles className="w-5 h-5 text-amber-200 fill-amber-350" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Envelope Footer visual */}
        <div className="flex items-center justify-between text-[11px] font-mono text-brand-charcoal/40 pt-2 border-t border-brand-rose/10">
          <span>COORDINATES: NISHI-06</span>
          <span>DATE: JUNE 21, 2026</span>
        </div>
      </div>

      <p className="text-xs text-brand-charcoal/40 mt-3 italic">
        *Press the sleeve/envelope to open the message and reveal details.
      </p>
    </div>
  );
}
