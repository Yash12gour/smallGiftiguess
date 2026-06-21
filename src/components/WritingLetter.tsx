import { motion } from "motion/react";
import { LETTER_CHAPTERS, LetterChapter, FLOWERS_DATA } from "../types";
import { Sparkles, Calendar, Heart, BookOpen } from "lucide-react";

interface WritingLetterProps {
  onFocusFlower: (flowerId: string) => void;
}

export default function WritingLetter({ onFocusFlower }: WritingLetterProps) {
  
  // Return flower details associated with a chapter's accent
  const getFlowerAccentInfo = (flowerId: string) => {
    return FLOWERS_DATA.find((f) => f.id === flowerId);
  };

  return (
    <div id="long-letter-container" className="relative w-full max-w-2xl mx-auto px-4 py-8">
      {/* Visual decorative gold lines in background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-brand-rose/15 pointer-events-none z-0" />

      {/* Narrative Intro stamp */}
      <div className="flex flex-col items-center justify-center text-center relative z-10 mb-16">
        <div className="w-10 h-10 rounded-full bg-brand-rose/10 flex items-center justify-center text-brand-rose mb-3 animate-pulse">
          <BookOpen className="w-4 h-4" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8C6A5]">Stationery Logbook</span>
        <h3 className="text-2xl font-serif text-brand-charcoal mt-1 italic">
          Scrolling Through the Letter Chapters
        </h3>
        <p className="text-xs text-brand-charcoal/40 mt-1 max-w-xs leading-relaxed">
          Take a slow deep breath, and scroll downwards to read Yashe's genuine words written especially for Nishi.
        </p>
      </div>

      {/* Chapters listing */}
      <div className="space-y-24 relative z-10">
        {LETTER_CHAPTERS.map((chapter: LetterChapter, idx: number) => {
          const flowerAccent = getFlowerAccentInfo(chapter.flowerAccent);
          
          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating Page Number bubble */}
              <div className="absolute -top-6 -left-2 bg-brand-beige text-white font-mono text-[9px] px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-widest">
                {chapter.label}
              </div>

              {/* The Parchment Sheet */}
              <div className="bg-brand-ivory p-6 md:p-10 rounded-3xl border border-brand-rose/20 shadow-lg relative overflow-hidden group">
                {/* Vintage gold leaf corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-850/15 pointer-events-none" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-850/15 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-850/15 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-850/15 pointer-events-none" />

                {/* Soft botanical outline watermarks */}
                <div className="absolute bottom-4 right-4 text-brand-rose/5 pointer-events-none text-8xl font-serif select-none select-none select-none">
                  ❀
                </div>

                {/* Chapter Title block */}
                <div className="border-b border-brand-rose/15 pb-4 mb-6">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-brand-rose">
                    {chapter.subtitle}
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-brand-charcoal leading-tight mt-1">
                    {chapter.title}
                  </h4>
                </div>

                {/* Main letter content */}
                <div className="space-y-4">
                  {chapter.content.map((para, pIdx) => {
                    const isToFrom = para.startsWith("To:") || para.startsWith("From:") || para.startsWith("Dear");
                    
                    return (
                      <p
                        key={pIdx}
                        className={`text-sm md:text-base leading-relaxed ${
                          isToFrom
                            ? "font-serif italic text-brand-rose font-bold text-lg"
                            : "font-sans text-brand-charcoal/85 font-light"
                        }`}
                      >
                        {para}
                      </p>
                    );
                  })}
                </div>

                {/* Blockquote Emphasis for storytelling highlights */}
                <div className="my-6 p-4 bg-brand-cream/40 border-l-2 border-brand-rose rounded-r-xl italic font-serif text-sm text-brand-rose/95 bg-linear-to-r from-brand-rose/5 to-transparent">
                  &ldquo;{chapter.quoteEmphasis}&rdquo;
                </div>

                {/* Flower stamp details - allows users to jump back to see flower */}
                {flowerAccent && (
                  <div className="mt-8 pt-4 border-t border-brand-rose/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {/* Interactive blooming flower link */}
                      <button
                        onClick={() => {
                          onFocusFlower(flowerAccent.id);
                          const el = document.getElementById("bouquet-3d-container");
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-rose/10 text-brand-rose hover:bg-brand-rose text-[11px] font-sans font-medium rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95"
                      >
                        <Heart className="w-3 h-3 fill-current" />
                        <span>Show {flowerAccent.name}</span>
                      </button>
                      <span className="text-[11px] font-serif text-brand-sage font-medium italic">
                        &ldquo;{flowerAccent.meaning}&rdquo;
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-brand-charcoal/30 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{idx + 1} of {LETTER_CHAPTERS.length}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Envelope folding scene indicator */}
      <div className="flex justify-center my-16 text-center">
        <div className="relative group">
          <motion.div
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="w-12 h-12 rounded-full border border-brand-rose/20 flex items-center justify-center bg-brand-ivory text-brand-rose shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-amber-200 fill-amber-300" />
          </motion.div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-rose/60 mt-1 block">
            End of written sheets
          </span>
        </div>
      </div>
    </div>
  );
}
