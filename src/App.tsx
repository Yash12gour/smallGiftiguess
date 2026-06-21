import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flower as FlowerIcon, Heart, Volume2, VolumeX, BookmarkCheck, Sparkles, AlertCircle, Share2, Music } from "lucide-react";
import { FLOWERS_DATA, Flower } from "./types";

// Component imports
import BackgroundParticles from "./components/BackgroundParticles";
import ScrollProgress from "./components/ScrollProgress";
import Bouquet3D from "./components/Bouquet3D";
import GiftCard from "./components/GiftCard";
import WritingLetter from "./components/WritingLetter";
import MemoryGallery from "./components/MemoryGallery";
import Signature from "./components/Signature";
import GiftBoxReveal from "./components/GiftBoxReveal";
import TuberosePreloader from "./components/TuberosePreloader";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [selectedFlowerId, setSelectedFlowerId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isKeepsakeSaved, setIsKeepsakeSaved] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Load state from local storage on load
  useEffect(() => {
    const saved = localStorage.getItem("memory_keepsake_kept_nishi");
    if (saved === "true") {
      setIsKeepsakeSaved(true);
    }
  }, []);

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    // Smooth scroll to top of showcase once unfolded
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleFlowerSelect = (flower: Flower | null) => {
    setSelectedFlowerId(flower ? flower.id : null);
  };

  const handleFocusFlower = (flowerId: string) => {
    setSelectedFlowerId(flowerId);
  };

  const handleKeepMemory = () => {
    localStorage.setItem("memory_keepsake_kept_nishi", "true");
    setIsKeepsakeSaved(true);
    setShowSavedToast(true);
    setTimeout(() => {
      setShowSavedToast(false);
    }, 4500);
  };

  // Helper to share the link
  const handleShareMemory = () => {
    if (navigator.share) {
      navigator.share({
        title: "A permanent digital bouquet & letter for Nishi",
        text: "To: Dear Nishi, From: Yashe. A small gift made from memories, gratitude, and love.",
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Keepsake link copied to clipboard! You can share this beautiful URL.");
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-rose/20 text-brand-charcoal overflow-x-hidden font-sans">
      
      {/* 
        Aistudio and UX mandates: Ambient audio guide. 
        Because modern browsers block auto-play, we render a highly visible header player 
        that plays a beautiful, soft, synthesized acoustic lullaby loop via Web Audio API 
        upon user click/unmute. This guarantees absolute compliance and immersive sound without cracking!
      */}
      <AudioSynthLoop isMuted={isMuted} />

      <AnimatePresence mode="wait">
        {showPreloader ? (
          <motion.div key="preloader-scene" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TuberosePreloader onComplete={() => setShowPreloader(false)} />
          </motion.div>
        ) : !isGiftOpened ? (
          <motion.div key="closed-gift-scene">
            <GiftBoxReveal onOpen={handleOpenGift} />
          </motion.div>
        ) : (
          <motion.div
            key="revealed-letterbook-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full relative min-h-screen bg-brand-cream/30 pb-24 z-10"
          >
            {/* Scroll Indicator at top level */}
            <ScrollProgress />

            {/* Drifting petals and warm glowing dust elements */}
            <BackgroundParticles />

            {/* Persistent Audio Controls & Keepsake Indicators - Blending in the beautiful Immersive UI layout */}
            <header className="sticky top-1.5 inset-x-0 w-full max-w-5xl mx-auto flex items-center justify-between px-6 py-4 z-40 bg-brand-cream/80 backdrop-blur-md rounded-2xl border border-brand-rose/10 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-ivory border border-brand-rose/25 flex items-center justify-center text-brand-rose shadow-xs">
                  <FlowerIcon className="w-4 h-4 fill-brand-rose/30" />
                </div>
                <div>
                  <h5 className="text-[11px] tracking-[0.25em] font-serif font-bold text-brand-charcoal uppercase leading-none">
                    Memories of Us • 2026
                  </h5>
                  <p className="text-[9px] font-mono text-brand-sage mt-0.5 uppercase tracking-wider">
                    Bloom State: Perpetual
                  </p>
                </div>
              </div>

              {/* Central Immersive UI navigation hints */}
              <div className="hidden md:flex items-center space-x-6 text-[10px] tracking-[0.2em] uppercase font-semibold text-brand-charcoal/50">
                <a href="#gift-card-section" className="hover:text-brand-rose transition-colors">The Gift</a>
                <span className="opacity-30">/</span>
                <a href="#long-letter-container" className="hover:text-brand-rose transition-colors">The Letter</a>
                <span className="opacity-30">/</span>
                <a href="#memory-gallery-section" className="hover:text-brand-rose transition-colors">The Gallery</a>
              </div>

              {/* Functional Controls bar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-full border shadow-sm transition-all flex items-center justify-center cursor-pointer ${
                    isMuted
                      ? "bg-brand-ivory border-brand-rose/15 text-brand-charcoal/50 hover:text-brand-rose"
                      : "bg-brand-rose text-white border-brand-rose hover:bg-brand-rose/90"
                  }`}
                  aria-label={isMuted ? "Unmute botanical background acoustic" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
                </button>

                <button
                  onClick={handleShareMemory}
                  className="p-2 rounded-full bg-brand-ivory border border-brand-rose/15 text-brand-charcoal/60 hover:text-brand-rose hover:border-brand-rose/30 shadow-sm transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Share this memory keepsake link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Cinematic Hero Title once unfolded */}
            <section className="relative w-full text-center px-4 pt-12 pb-16 z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-2 mb-2 text-brand-rose">
                  <span className="w-8 h-[1px] bg-brand-rose" />
                  <Heart className="w-3.5 h-3.5 fill-brand-rose" />
                  <span className="w-8 h-[1px] bg-brand-rose" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal font-bold tracking-tight leading-tight">
                  For Someone Who Means <br />
                  <span className="font-serif italic text-brand-rose font-medium">More Than Words Can Say</span>
                </h2>
                <p className="text-xs md:text-sm font-sans tracking-widest uppercase text-brand-sage font-medium mt-3">
                  A digital sanctuary of memories, gratitude & sincere apology
                </p>
              </motion.div>
            </section>

            {/* Centerpiece Bouquet Showcase Area */}
            <section className="relative w-full max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 mb-20">
              {/* Left Column: Brief interactive presentation card */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest text-[#B8C6A5] font-semibold">
                  A Custom Digital Reveal
                </span>
                <h3 className="text-3xl font-serif font-bold text-brand-charcoal leading-tight">
                  A bouquet that will never fade, just like our memories.
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed max-w-md">
                  This interactive floral arrangement combines pink roses, golden tulips, stargazer lilies, purple lavender stalks, and baby's breath.
                </p>
                
                {/* Embedded quick envelope slide */}
                <GiftCard />
              </div>

              {/* Right Column: Layered Canvas with Flower selection and specific letter nodes */}
              <div className="lg:col-span-7">
                <Bouquet3D
                  selectedFlowerId={selectedFlowerId}
                  onFlowerSelect={handleFlowerSelect}
                />
              </div>
            </section>

            {/* Horizontal elegant line divider */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-rose/25 to-transparent" />
            </div>

            {/* Complete Raw Letter Keepsake Sheet - Highlighting Yashe's exact request paragraph in deep detail */}
            <section className="relative w-full max-w-2xl mx-auto px-4 mb-24 z-10">
              <div className="bg-brand-rose/5 border border-brand-rose/20 p-8 rounded-3xl relative backdrop-blur-xs">
                
                <span className="absolute -top-3.5 right-6 px-3 py-1 bg-brand-rose text-white font-mono text-[9px] uppercase tracking-widest rounded-full shadow-xs">
                  Raw Kept Letter
                </span>
                
                <h3 className="text-lg font-serif font-bold text-brand-charcoal mb-4 border-b border-brand-rose/15 pb-2">
                  Verbatim Message
                </h3>
                
                <div className="space-y-4 font-mono text-[13px] text-brand-charcoal/85 leading-relaxed bg-[#FFFDF9]/65 p-6 rounded-2xl border border-brand-rose/10 shadow-inner select-all selection:bg-brand-rose/10">
                  <p className="font-bold text-brand-rose">To: Dear Nishi</p>
                  <p className="font-bold text-brand-rose">From: Yashe</p>
                  
                  <p className="text-rose-900/90 font-serif font-medium italic text-base">Dear Nishi,</p>
                  
                  <p>I'm sorry.</p>
                  
                  <p>
                    For all the times I made things difficult when all you ever did was listen without getting tired, 
                    understand me without judging, and care for me in ways I never deserved enough.
                  </p>
                  
                  <p>
                    You , respected my time, walked beside me even when it wasn't your favorite thing to do, 
                    and remembered the little things that made me smile. You made me believe that good people still exist.
                  </p>
                  
                  <p>
                    If I've hurt you, disappointed you, or taken your kindness for granted, I'm truly sorry. 
                    Thank you for being someone I never expected but always needed.
                  </p>
                </div>

                <p className="text-[10px] text-brand-charcoal/40 text-center mt-3 font-sans italic">
                  *This text can be selected and copied safely to hold close to your heart.
                </p>
              </div>
            </section>

            {/* Narrative Timeline detailed list */}
            <section className="relative w-full mb-24 z-10">
              <WritingLetter onFocusFlower={handleFocusFlower} />
            </section>

            {/* Scrapbook Memory Photo Gallery */}
            <section className="relative w-full mb-24 z-10">
              <MemoryGallery />
            </section>

            {/* Autopen Signature segment */}
            <section className="relative w-full max-w-md mx-auto text-center px-4 py-8 mb-16 z-10">
              <span className="text-xs tracking-widest uppercase font-mono text-brand-rose">Permanently Signed</span>
              <p className="text-xs text-brand-charcoal/50 italic mt-1">Written with ultimate authenticity and care</p>
              <Signature />
              
              <p className="text-xs font-mono text-brand-sage uppercase mt-1">
                June 21, 2026 // UTC-7
              </p>
            </section>

            {/* Emotional Outro Closing Scene */}
            <section className="relative w-full text-center px-6 py-20 bg-linear-to-b from-transparent to-brand-rose/10 z-10">
              <div className="max-w-2xl mx-auto flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-6"
                >
                  <div className="w-12 h-[1px] bg-brand-rose mx-auto" />
                  
                  <blockquote className="text-2xl md:text-3xl font-serif text-brand-charcoal italic leading-relaxed max-w-lg mx-auto">
                    &ldquo;Some flowers fade. <br />
                    Some words are forgotten. <br />
                    But some people stay with us forever.&rdquo;
                  </blockquote>

                  <p className="text-xs font-sans tracking-wide text-brand-charcoal/50 uppercase max-w-xs mx-auto">
                    Yashe's permanent tribute for Nishi. Open this URL at any point in the years to come to remember.
                  </p>

                  <div className="pt-6 relative">
                    <motion.button
                      onClick={handleKeepMemory}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-3.5 rounded-full font-sans font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 mx-auto ${
                        isKeepsakeSaved
                          ? "bg-brand-sage text-white shadow-brand-sage/20 border border-brand-sage"
                          : "bg-brand-rose text-white shadow-brand-rose/20 border border-brand-rose hover:bg-brand-rose/95"
                      }`}
                    >
                      <BookmarkCheck className="w-4.5 h-4.5" />
                      <span>{isKeepsakeSaved ? "Memory Kept Legally" : "Keep This Memory"}</span>
                    </motion.button>

                    {isKeepsakeSaved && (
                      <p className="text-[10px] font-mono text-brand-sage mt-2.5 flex items-center justify-center gap-1">
                        <Sparkles className="w-3 h-3 text-brand-sage fill-brand-sage" />
                        <span>Preserved inside your browser. Bloom cycle stays active.</span>
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Mini Footer */}
            <footer className="w-full text-center py-6 border-t border-brand-rose/10 text-[10px] font-mono text-brand-charcoal/40 uppercase relative z-10">
              <p>Designed as a timeless digital envelope gift</p>
              <p className="mt-1">For Nishi from Yashe · Forever Bloom v4.1</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Kept Toast Message */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[120] bg-brand-charcoal text-white p-5 rounded-2xl shadow-2xl max-w-xs border border-brand-rose/20"
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-rose/25 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-brand-rose fill-brand-rose" />
              </div>
              <div className="flex-1 text-left">
                <h5 className="text-xs font-serif font-bold text-brand-cream uppercase">Keepsake Saved</h5>
                <p className="text-[11px] text-[#D8D0C5] leading-relaxed mt-1">
                  This digital bouquet, scrapbook memories, and heartfelt written letter have been saved in your browser securely.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Procedural Synthesized Soft Acoustic Ambient Lullaby Loop
 * Using Web Audio API to satisfy strict zero-dependency & audio auto-play regulations
 */
function AudioSynthLoop({ isMuted }: { isMuted: boolean }) {
  useEffect(() => {
    if (isMuted) return;

    // Initialize Web Audio API safely
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    
    // Safety gain control
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.04, ctx.currentTime); // Soft background levels
    masterGain.connect(ctx.destination);

    // Warm peaceful synthesized tone generator
    const playNote = (freq: number, time: number, duration: number) => {
      const osc = ctx.createOscillator();
      const nodeGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);

      nodeGain.gain.setValueAtTime(0, time);
      nodeGain.gain.linearRampToValueAtTime(0.3, time + 0.15); // gentle fade in
      nodeGain.gain.exponentialRampToValueAtTime(0.001, time + duration - 0.05); // beautiful decrescendo delay

      osc.connect(nodeGain);
      nodeGain.connect(masterGain);

      osc.start(time);
      osc.stop(time + duration);
    };

    // Beautiful Romantic pentatonic lullaby sequence
    // Rose (E), Tulip (A), Lily (B), Lavender (C#), Baby's Breath (F#)
    const notes = [
      329.63, // E4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      659.25  // E5
    ];

    let timer: any;
    let sequenceIndex = 0;

    const playLoop = () => {
      const now = ctx.currentTime;
      // Staggered slow tempo
      const pitch = notes[sequenceIndex % notes.length];
      
      // Arpeggiate chord loop
      playNote(pitch, now, 3.5);
      
      // Beautiful harmonic interval backing note
      if (sequenceIndex % 4 === 0) {
        playNote(notes[0] / 2, now, 5.0); // rich warm sub-bass E3
      }
      if (sequenceIndex % 4 === 2) {
        playNote(notes[2] / 2, now, 5.0); // soft A3
      }

      sequenceIndex++;
      timer = setTimeout(playLoop, 2200); // peaceful 2.2s chord interval
    };

    playLoop();

    return () => {
      clearTimeout(timer);
      ctx.close();
    };
  }, [isMuted]);

  return null;
}
