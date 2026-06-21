import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MEMORIES_DATA, MemoryPoint } from "../types";
import { Ear, Footprints, Heart, Sparkles, X, ZoomIn, Camera } from "lucide-react";

export default function MemoryGallery() {
  const [selectedMemory, setSelectedMemory] = useState<MemoryPoint | null>(null);

  // Return matching icons based on name
  const renderIcon = (name: string) => {
    switch (name) {
      case "Ear":
        return <Ear className="w-5 h-5 text-brand-lavender" />;
      case "Footprints":
        return <Footprints className="w-5 h-5 text-brand-sage" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-brand-rose" fill="#E8B8C7" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-300" fill="#FDE047" opacity="0.8" />;
      default:
        return <Camera className="w-5 h-5 text-brand-rose" />;
    }
  };

  return (
    <div id="memory-gallery-section" className="relative w-full py-16 px-4 bg-brand-cream/40">
      
      {/* Botanical Decorative Overlays */}
      <div className="absolute top-12 left-10 text-[10px] uppercase font-mono tracking-widest text-[#B8C6A5]/60 pointer-events-none select-none">
        🌿 Memory Keepers
      </div>
      <div className="absolute bottom-12 right-12 text-[10px] uppercase font-mono tracking-widest text-brand-rose/60 pointer-events-none select-none">
        ❀ Permanent blooms
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-brand-rose font-medium">The Scrapbook of Gratitude</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mt-2 tracking-tight">
          Moments Worth Holding Onto
        </h2>
        <p className="text-sm md:text-base font-serif italic text-brand-charcoal/60 max-w-xl mx-auto mt-3">
          &ldquo;Because you remembered my smile, respected my time, and walked beside me. Here is how those memories shape my world.&rdquo;
        </p>
      </div>

      {/* Grid of Polaroid Frames with Layered Angles */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 relative z-10 px-2">
        {MEMORIES_DATA.map((memory) => (
          <motion.div
            key={memory.id}
            className={`flex flex-col items-center justify-self-center w-full max-w-xs ${memory.offsetX}`}
            style={{ rotate: `${memory.rotation}deg` }}
            whileHover={{ 
              scale: 1.05, 
              rotate: memory.rotation * 0.4,
              zIndex: 20,
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.04)" 
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => setSelectedMemory(memory)}
          >
            {/* Polaroid Body */}
            <div className="bg-brand-ivory p-4 pb-6 rounded-xs border border-brand-rose/10 shadow-md cursor-pointer group flex flex-col justify-between w-full h-[360px] relative">
              
              {/* Photo placeholder representing real life memories */}
              <div className={`relative w-full h-[220px] ${memory.colorBg} rounded-sm overflow-hidden border border-brand-rose/10 flex flex-col items-center justify-center text-center transition-colors group-hover:bg-brand-rose/5`}>
                
                {/* Floating tape visual */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#E8DCCF]/70 rotate-1 shadow-2xs pointer-events-none z-10" />

                {memory.imageUrl ? (
                  <>
                    <img 
                      src={memory.imageUrl} 
                      alt={memory.title}
                      className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient vignette over the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />
                    
                    {/* Content visible over image */}
                    <div className="absolute inset-x-0 bottom-0 p-3 text-left z-10 flex flex-col justify-end">
                      <span className="text-[9px] uppercase tracking-widest font-mono text-white/95 bg-brand-rose/85 px-1.5 py-0.5 rounded-xs self-start mb-1 select-none">
                        {memory.mood}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white leading-tight drop-shadow-sm select-none">
                        {memory.title}
                      </h4>
                      <p className="text-[9px] font-mono text-white/70 leading-none mt-1 select-none">
                        {memory.date}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="p-6 flex flex-col items-center justify-center w-full h-full">
                    {/* Styled illustration representing the memory */}
                    <div className="w-12 h-12 rounded-full bg-brand-ivory flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                      {renderIcon(memory.iconName)}
                    </div>

                    <p className="text-xs uppercase tracking-widest font-sans font-medium text-brand-charcoal/50">
                      {memory.mood}
                    </p>

                    <h4 className="text-base font-serif font-bold text-brand-charcoal mt-1">
                      {memory.title}
                    </h4>

                    <p className="text-[11px] font-mono text-brand-sage mt-1">
                      {memory.date}
                    </p>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ZoomIn className="w-4 h-4 text-brand-rose/60" />
                </div>
              </div>

              {/* Polaroid Bottom Label written in cursive handwritten style */}
              <div className="pt-4 text-center">
                <span className="font-handwritten text-xl text-rose-800/80 leading-tight">
                  &ldquo;{memory.quote.replace("...", "")}&rdquo;
                </span>
                <p className="text-[10px] font-mono text-brand-charcoal/30 uppercase mt-1 tracking-wider">
                  Click to open description
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Polaroid Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMemory(null)}
              className="absolute inset-0 bg-brand-charcoal/50 backdrop-blur-md"
            />

            {/* Expanded Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative bg-brand-ivory w-full max-w-lg rounded-2xl p-6 md:p-8 border border-brand-rose/30 shadow-2xl z-10 flex flex-col items-center text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-brand-cream hover:bg-brand-rose/10 text-brand-charcoal/60 hover:text-brand-rose transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="w-10 h-10 rounded-full bg-brand-rose/10 flex items-center justify-center mb-4">
                {renderIcon(selectedMemory.iconName)}
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-rose font-semibold bg-brand-rose/10 px-2.5 py-0.5 rounded-full">
                {selectedMemory.mood}
              </span>

              <h3 className="text-2xl font-serif font-bold text-brand-charcoal mt-2">
                {selectedMemory.title}
              </h3>

              <p className="text-xs font-mono text-brand-sage italic mt-0.5">
                {selectedMemory.date}
              </p>

              {selectedMemory.imageUrl && (
                <div className="relative w-full max-h-[220px] rounded-xl overflow-hidden shadow-inner border border-brand-rose/15 mt-4 bg-brand-cream flex items-center justify-center">
                  <img 
                    src={selectedMemory.imageUrl} 
                    alt={selectedMemory.title} 
                    className="w-full h-full max-h-[220px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              <div className="w-16 h-[1px] bg-brand-rose/20 my-4" />

              {/* The verbatim Quote from letter */}
              <div className="bg-brand-cream/70 px-5 py-4 rounded-xl border border-brand-rose/10 italic text-brand-charcoal leading-relaxed font-serif text-sm relative">
                <span className="absolute -top-3 left-4 text-3xl font-serif text-brand-rose/20 select-none">&ldquo;</span>
                <p className="text-rose-800/80 font-medium">
                  {selectedMemory.quote}
                </p>
                <span className="absolute -bottom-6 right-4 text-3xl font-serif text-brand-rose/20 select-none">&rdquo;</span>
              </div>

              {/* Yashe's explanatory memory reflection text */}
              <p className="text-sm font-sans text-brand-charcoal/70 leading-relaxed max-w-md mt-6">
                {selectedMemory.letterConnection}
              </p>

              <div className="w-full mt-6 pt-4 border-t border-brand-rose/15 flex justify-between items-center text-[10px] font-mono text-brand-charcoal/40">
                <span>MEM-ID: {selectedMemory.id.toUpperCase()}</span>
                <span>TO: NISHI ❀ BY: YASHE</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
