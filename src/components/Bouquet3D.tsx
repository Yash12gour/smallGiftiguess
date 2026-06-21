import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FLOWERS_DATA, Flower } from "../types";
import { Sparkles, Info, Heart } from "lucide-react";

interface BouquetProps {
  onFlowerSelect?: (flower: Flower | null) => void;
  selectedFlowerId: string | null;
}

export default function Bouquet3D({ onFlowerSelect, selectedFlowerId }: BouquetProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Trigger selection handler
  const handleSelect = (flower: Flower) => {
    if (selectedFlowerId === flower.id) {
      if (onFlowerSelect) onFlowerSelect(null);
    } else {
      if (onFlowerSelect) onFlowerSelect(flower);
    }
  };

  return (
    <div id="bouquet-3d-container" className="relative w-full max-w-lg mx-auto flex flex-col items-center">
      
      {/* Visual Indicator of Hovered or Selected Flower Meaning */}
      <div className="absolute -top-12 z-20 bg-brand-ivory/95 backdrop-blur-md px-4 py-2 rounded-full border border-brand-rose/20 shadow-sm text-center transition-all duration-300 pointer-events-none">
        <p className="text-xs font-serif italic text-brand-charcoal flex items-center gap-1.5">
          <Heart className="w-3 h-3 text-brand-rose animate-pulse fill-brand-rose" />
          {hoveredId 
            ? `${FLOWERS_DATA.find(f => f.id === hoveredId)?.name}: "${FLOWERS_DATA.find(f => f.id === hoveredId)?.meaning}"`
            : selectedFlowerId
              ? `${FLOWERS_DATA.find(f => f.id === selectedFlowerId)?.name}: "${FLOWERS_DATA.find(f => f.id === selectedFlowerId)?.meaning}"`
              : "Tap any flower to unlock Yashe's memories & thoughts"}
        </p>
      </div>

      {/* Main Bouquet Breathing Canvas with Immersive UI thick white Polaroid border and soft rotation */}
      <div className="relative z-10 p-1 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-2 border-[12px] border-white max-w-[360px] md:max-w-none">
        <motion.div
          className="relative w-[310px] h-[340px] md:w-[350px] md:h-[360px] select-none cursor-pointer bg-brand-cream/40 rounded-2xl overflow-hidden"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
        {/* Shadow Casting */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-brand-charcoal/10 rounded-full blur-xl pointer-events-none" />

        {/* ================= BACKGROUND WRAPPING PAPER ================= */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 450">
          <defs>
            <linearGradient id="kraft-grad-back" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFD2C0" />
              <stop offset="100%" stopColor="#C4B39B" />
            </linearGradient>
            <linearGradient id="silk-ribbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAA9BD" />
              <stop offset="50%" stopColor="#F9C3D3" />
              <stop offset="100%" stopColor="#D58E9F" />
            </linearGradient>
          </defs>
          
          {/* Paper outer fold left */}
          <path d="M 120 400 L 50 120 L 150 150 L 120 400" fill="url(#kraft-grad-back)" opacity="0.9" />
          {/* Paper outer fold right */}
          <path d="M 280 400 L 350 120 L 250 150 L 280 400" fill="url(#kraft-grad-back)" opacity="0.9" />
          {/* Paper backing fan */}
          <path d="M 100 400 L 60 170 Q 200 110 340 170 L 300 400 Z" fill="#EADBC8" opacity="0.8" />
        </svg>

        {/* ================= FLOWERS LAYERING INTERACTIVE ================= */}

        {/* 1. LAVENDER (Rear Stems) */}
        <motion.div
          onClick={() => handleSelect(FLOWERS_DATA.find(f => f.id === "lavender")!)}
          onMouseEnter={() => setHoveredId("lavender")}
          onMouseLeave={() => setHoveredId(null)}
          className="absolute inset-0 z-1"
          style={{ filter: (selectedFlowerId === "lavender" || hoveredId === "lavender") ? "drop-shadow(0 0 8px #CAB5EC)" : "none" }}
          animate={{ scale: hoveredId === "lavender" ? 1.03 : 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 450">
            {/* Lavender stem paths */}
            {/* Left Lavender */}
            <path d="M 130 180 Q 90 120 70 80 M 130 180 Q 110 110 100 70" stroke="#7A8E61" strokeWidth="2.5" fill="none" opacity="0.8" />
            {/* Right Lavender */}
            <path d="M 270 180 Q 310 120 330 80 M 270 180 Q 290 110 300 70" stroke="#7A8E61" strokeWidth="2.5" fill="none" opacity="0.8" />
            
            {/* Lavender Purple Buds */}
            {/* Left sprays */}
            <circle cx="70" cy="80" r="4.5" fill="#BCA2E1" />
            <circle cx="68" cy="72" r="4" fill="#A88BCE" />
            <circle cx="73" cy="65" r="4" fill="#9C7CBD" />
            <circle cx="66" cy="58" r="3" fill="#D2C3EC" />
            
            <circle cx="100" cy="70" r="4.5" fill="#BCA2E1" />
            <circle cx="98" cy="62" r="4" fill="#A88BCE" />
            <circle cx="103" cy="55" r="4" fill="#9C7CBD" />
            <circle cx="97" cy="48" r="3" fill="#D2C3EC" />

            {/* Right sprays */}
            <circle cx="330" cy="80" r="4.5" fill="#BCA2E1" />
            <circle cx="332" cy="72" r="4" fill="#A88BCE" />
            <circle cx="327" cy="65" r="4" fill="#9C7CBD" />
            <circle cx="334" cy="58" r="3" fill="#D2C3EC" />

            <circle cx="300" cy="70" r="4.5" fill="#BCA2E1" />
            <circle cx="302" cy="62" r="4" fill="#A88BCE" />
            <circle cx="297" cy="55" r="4" fill="#9C7CBD" />
            <circle cx="303" cy="48" r="3" fill="#D2C3EC" />
          </svg>
        </motion.div>


        {/* 2. WHITE LILIES (Middle Layer) */}
        <motion.div
          onClick={() => handleSelect(FLOWERS_DATA.find(f => f.id === "lily")!)}
          onMouseEnter={() => setHoveredId("lily")}
          onMouseLeave={() => setHoveredId(null)}
          className="absolute inset-0 z-2"
          style={{ filter: (selectedFlowerId === "lily" || hoveredId === "lily") ? "drop-shadow(0 0 10px #FAF7F2)" : "none" }}
          animate={{ scale: hoveredId === "lily" ? 1.03 : 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 450">
            {/* Center lily stems */}
            <path d="M 200 240 L 160 140 M 200 240 L 240 140" stroke="#87996D" strokeWidth="3" fill="none" />
            
            {/* Lily Left (Centered around x: 160, y: 140) */}
            <g transform="translate(160, 140)">
              {/* Petals */}
              <path d="M 0 0 C -25 -25 -10 -55 0 -40 C 10 -55 25 -25 0 0" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              <path d="M 0 0 C -40 -10 -60 10 -40 2" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              <path d="M 0 0 C 40 -10 60 10 40 2" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              <path d="M 0 0 C -25 35 -10 50 0 35 C 10 50 25 35 0 0" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              {/* Stamen (yellow tips) */}
              <line x1="0" y1="0" x2="-10" y2="-25" stroke="#BF9E5A" strokeWidth="2" />
              <line x1="0" y1="0" x2="10" y2="-25" stroke="#BF9E5A" strokeWidth="2" />
              <line x1="0" y1="0" x2="0" y2="-30" stroke="#A37E3A" strokeWidth="2" />
              <circle cx="-10" cy="-25" r="2.5" fill="#7C5D14" />
              <circle cx="10" cy="-25" r="2.5" fill="#7C5D14" />
              <circle cx="0" cy="-30" r="2.5" fill="#7C5D14" />
            </g>

            {/* Lily Right (Centered around x: 240, y: 140) */}
            <g transform="translate(240, 140) rotate(15)">
              <path d="M 0 0 C -25 -25 -10 -55 0 -40 C 10 -55 25 -25 0 0" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              <path d="M 0 0 C -40 -10 -60 10 -40 2" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              <path d="M 0 0 C 40 -10 60 10 40 2" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              <path d="M 0 0 C -25 35 -10 50 0 35 C 10 50 25 35 0 0" fill="#FFFDF9" stroke="#E6DFD3" strokeWidth="1" />
              {/* Stamen */}
              <line x1="0" y1="0" x2="-8" y2="-23" stroke="#BF9E5A" strokeWidth="2" />
              <line x1="0" y1="0" x2="8" y2="-23" stroke="#BF9E5A" strokeWidth="2" />
              <circle cx="-8" cy="-23" r="2" fill="#7C5D14" />
              <circle cx="8" cy="-23" r="2" fill="#7C5D14" />
            </g>
          </svg>
        </motion.div>


        {/* 3. TULIPS (Middle Layer) */}
        <motion.div
          onClick={() => handleSelect(FLOWERS_DATA.find(f => f.id === "tulip")!)}
          onMouseEnter={() => setHoveredId("tulip")}
          onMouseLeave={() => setHoveredId(null)}
          className="absolute inset-0 z-3"
          style={{ filter: (selectedFlowerId === "tulip" || hoveredId === "tulip") ? "drop-shadow(0 0 10px #ECCEA1)" : "none" }}
          animate={{ scale: hoveredId === "tulip" ? 1.03 : 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 450">
            {/* Tulip stems */}
            <path d="M 200 240 L 110 130 M 200 240 L 290 130 M 200 240 L 200 120" stroke="#7E9362" strokeWidth="3.5" fill="none" />
            
            {/* Left Tulip (Goblet shape, warm yellow/orange) */}
            <g transform="translate(110, 130) rotate(-15)">
              <path d="M -15 -25 C -25 0 -15 25 0 25 C 15 25 25 0 15 -25 C 15 -25 5 -10 0 -25 C -5 -10 -15 -25 -15 -25 Z" fill="#EED9B3" stroke="#DCBD8D" strokeWidth="1" />
              <path d="M -8 -22 C -3 -5 3 -5 8 -22" fill="#F4E8D4" stroke="#DCBD8D" strokeWidth="0.5" />
            </g>
            
            {/* Right Tulip */}
            <g transform="translate(290, 130) rotate(15)">
              <path d="M -15 -25 C -25 0 -15 25 0 25 C 15 25 25 0 15 -25 C 15 -25 5 -10 0 -25 C -5 -10 -15 -25 -15 -25 Z" fill="#EED9B3" stroke="#DCBD8D" strokeWidth="1" />
              <path d="M -8 -22 C -3 -5 3 -5 8 -22" fill="#F4E8D4" stroke="#DCBD8D" strokeWidth="0.5" />
            </g>

            {/* Middle Tulip */}
            <g transform="translate(200, 105)">
              <path d="M -15 -25 C -25 0 -15 25 0 25 C 15 25 25 0 15 -25 C 15 -25 5 -10 0 -25 C -5 -10 -15 -25 -15 -25 Z" fill="#EEC887" stroke="#DCAB5E" strokeWidth="1" />
              <path d="M -8 -22 C -3 -5 3 -5 8 -22" fill="#F6DCAE" stroke="#DCAB5E" strokeWidth="0.5" />
            </g>
          </svg>
        </motion.div>


        {/* 3.5. TUBEROSE (Graceful cream-white spires) */}
        <motion.div
          onClick={() => handleSelect(FLOWERS_DATA.find(f => f.id === "tuberose")!)}
          onMouseEnter={() => setHoveredId("tuberose")}
          onMouseLeave={() => setHoveredId(null)}
          className="absolute inset-0 z-3"
          style={{ filter: (selectedFlowerId === "tuberose" || hoveredId === "tuberose") ? "drop-shadow(0 0 10px #FAF7EE)" : "none" }}
          animate={{ scale: hoveredId === "tuberose" ? 1.03 : 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 450">
            {/* Tuberose tall stems peaking out */}
            <path d="M 200 240 L 140 90 M 200 240 L 260 90" stroke="#7E9362" strokeWidth="2.5" fill="none" opacity="0.85" />
            
            {/* Tuberose Left spike (Centered along stem ending 140, 90) */}
            <g transform="translate(140, 90)">
              {/* Star-shaped florets on stem */}
              <g transform="translate(0, 0)">
                <circle cx="0" cy="0" r="5" fill="#F9FAF6" stroke="#D6D3C2" strokeWidth="0.5" />
                <path d="M -4 -4 L 4 4 M -4 4 L 4 -4" stroke="#FFFFFF" strokeWidth="1.2" />
              </g>
              <g transform="translate(-10, 16) rotate(-20)">
                <circle cx="0" cy="0" r="5" fill="#F6F5EE" stroke="#CFCBAA" strokeWidth="0.5" />
                <path d="M -3 -3 L 3 3 M -3 3 L 3 -3" stroke="#FFFFFF" strokeWidth="1" />
              </g>
              <g transform="translate(9, 28) rotate(15)">
                <circle cx="0" cy="0" r="5.5" fill="#F9FAF6" stroke="#CFCBAA" strokeWidth="0.5" />
                <path d="M -4 -4 L 4 4" stroke="#FFFFFF" strokeWidth="1" />
              </g>
              <g transform="translate(-5, 42) rotate(-10)">
                <circle cx="0" cy="0" r="4.5" fill="#F6F5EE" stroke="#D6D3C2" strokeWidth="0.5" />
              </g>
              {/* Delicate pinkish bud tips */}
              <circle cx="0" cy="-10" r="2.5" fill="#DECBA4" />
              <circle cx="-3" cy="-6" r="2" fill="#EAE0C1" />
              <circle cx="3" cy="-5" r="1.5" fill="#EAE0C1" />
            </g>

            {/* Tuberose Right spike (Centered along stem ending 260, 90) */}
            <g transform="translate(260, 90) rotate(8)">
              <g transform="translate(0, 0)">
                <circle cx="0" cy="0" r="5" fill="#F9FAF6" stroke="#D6D3C2" strokeWidth="0.5" />
                <path d="M -4 -4 L 4 4 M -4 4 L 4 -4" stroke="#FFFFFF" strokeWidth="1.2" />
              </g>
              <g transform="translate(-8, 18) rotate(-15)">
                <circle cx="0" cy="0" r="5" fill="#F6F5EE" stroke="#CFCBAA" strokeWidth="0.5" />
                <path d="M -3 -3 L 3 3" stroke="#FFFFFF" strokeWidth="1" />
              </g>
              <g transform="translate(8, 30) rotate(15)">
                <circle cx="0" cy="0" r="5" fill="#F9FAF6" stroke="#CFCBAA" strokeWidth="0.5" />
              </g>
              {/* Bud tips */}
              <circle cx="0" cy="-10" r="2.5" fill="#DECBA4" />
              <circle cx="-3" cy="-6" r="2" fill="#EAE0C1" />
            </g>
          </svg>
        </motion.div>


        {/* 4. PINK ROSES (Front & Bold centerpiece) */}
        <motion.div
          onClick={() => handleSelect(FLOWERS_DATA.find(f => f.id === "rose")!)}
          onMouseEnter={() => setHoveredId("rose")}
          onMouseLeave={() => setHoveredId(null)}
          className="absolute inset-0 z-4"
          style={{ filter: (selectedFlowerId === "rose" || hoveredId === "rose") ? "drop-shadow(0 0 12px #EB9DB5)" : "none" }}
          animate={{ scale: hoveredId === "rose" ? 1.03 : 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 450">
            {/* Center Rose stems */}
            <path d="M 200 240 L 150 190 M 200 240 L 250 190 M 200 240 L 200 200" stroke="#6F8354" strokeWidth="4" strokeLinecap="round" fill="none" />
            
            {/* Left Rose (Beautiful vector swirls) */}
            <g transform="translate(145, 185) scale(0.95)">
              <circle cx="0" cy="0" r="28" fill="#E8B8C7" stroke="#D392AA" strokeWidth="1" />
              <path d="M -20 -10 C -15 -25 15 -25 20 -10 C 25 15 -25 15 -20 -10" fill="#EAA7BE" />
              <path d="M -10 -5 C -8 -15 8 -15 10 -5 C 12 10 -12 10 -10 -5" fill="#DC8CA6" />
              <path d="M -4 -2 C -3 -7 3 -7 4 -2 C 5 4 -5 4 -4 -2" fill="#C86D8B" />
              {/* Outer petal overlapping */}
              <path d="M -25 5 C -25 35 25 35 25 5" fill="none" stroke="#D392AA" strokeWidth="2.5" />
              <path d="M -28 -5 C -40 15 -10 40 10 30" fill="none" stroke="#D392AA" strokeWidth="1.5" />
            </g>

            {/* Right Rose */}
            <g transform="translate(255, 185) scale(0.95)">
              <circle cx="0" cy="0" r="28" fill="#E8B8C7" stroke="#D392AA" strokeWidth="1" />
              <path d="M -20 -10 C -15 -25 15 -25 20 -10 C 25 15 -25 15 -20 -10" fill="#EAA7BE" />
              <path d="M -10 -5 C -8 -15 8 -15 10 -5 C 12 10 -12 10 -10 -5" fill="#DC8CA6" />
              <path d="M -4 -2 C -3 -7 3 -7 4 -2 C 5 4 -5 4 -4 -2" fill="#C86D8B" />
              <path d="M -25 5 C -25 35 25 35 25 5" fill="none" stroke="#D392AA" strokeWidth="2.5" />
            </g>

            {/* Center Main Rose */}
            <g transform="translate(200, 205) scale(1.15)">
              <circle cx="0" cy="0" r="30" fill="#E8B8C7" stroke="#C47A95" strokeWidth="1" />
              {/* Overlapping organic swirls */}
              <path d="M -22 -12 C -17 -28 17 -28 22 -12 C 27 18 -27 18 -22 -12" fill="#EFA2BB" />
              <path d="M -13 -7 C -10 -20 10 -20 13 -7 C 16 12 -16 12 -13 -7" fill="#E188A7" />
              <path d="M -6 -3 C -5 -11 5 -11 6 -3 C 8 6 -8 6 -6 -3" fill="#D36C91" />
              <path d="M -27 5 C -27 35 27 35 27 5" fill="none" stroke="#C47A95" strokeWidth="2.5" />
              <path d="M -30 -5 C -42 15 -10 40 10 32" fill="none" stroke="#C47A95" strokeWidth="1.5" />
              <path d="M 30 -5 C 42 15 10 40 -10 32" fill="none" stroke="#C47A95" strokeWidth="1.5" />
            </g>
          </svg>
        </motion.div>


        {/* 5. BABY'S BREATH (Aesthetic Sparkle Details, Surrounding/Interwoven) */}
        <motion.div
          onClick={() => handleSelect(FLOWERS_DATA.find(f => f.id === "babys_breath")!)}
          onMouseEnter={() => setHoveredId("babys_breath")}
          onMouseLeave={() => setHoveredId(null)}
          className="absolute inset-0 z-5"
          style={{ filter: (selectedFlowerId === "babys_breath" || hoveredId === "babys_breath") ? "drop-shadow(0 0 10px #FFFFFF)" : "none" }}
          animate={{ scale: hoveredId === "babys_breath" ? 1.03 : 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 450">
            {/* Little delicate white clusters with soft green thread stems */}
            {/* Left Top Group */}
            <path d="M 120 160 L 80 110" stroke="#8EA473" strokeWidth="1" opacity="0.75" />
            <circle cx="80" cy="110" r="3.5" fill="#FFF5F7" stroke="#E6DFE3" strokeWidth="0.5" />
            <circle cx="75" cy="105" r="3" fill="#FFFDF9" />
            <circle cx="85" cy="107" r="2.5" fill="#FFFDF9" />
            <circle cx="78" cy="115" r="3" fill="#FFF5F7" />

            {/* Right Top Group */}
            <path d="M 280 160 L 320 110" stroke="#8EA473" strokeWidth="1" opacity="0.75" />
            <circle cx="320" cy="110" r="3.5" fill="#FFF5F7" stroke="#E6DFE3" strokeWidth="0.5" />
            <circle cx="325" cy="105" r="3" fill="#FFFDF9" />
            <circle cx="315" cy="107" r="2.5" fill="#FFFDF9" />
            <circle cx="322" cy="115" r="3" fill="#FFF5F7" />

            {/* Inner Center clusters peaking between roses */}
            <path d="M 200 240 L 170 170" stroke="#8EA473" strokeWidth="0.8" opacity="0.6" />
            <circle cx="170" cy="170" r="3" fill="#FFF5F7" />
            <circle cx="165" cy="166" r="2" fill="#FFF" />
            <circle cx="173" cy="173" r="2.5" fill="#FFF" />

            <path d="M 200 240 L 230 170" stroke="#8EA473" strokeWidth="0.8" opacity="0.6" />
            <circle cx="230" cy="170" r="3" fill="#FFF5F7" />
            <circle cx="234" cy="165" r="2.5" fill="#FFF" />
            <circle cx="226" cy="172" r="2.5" fill="#FFF" />

            <path d="M 200 240 L 200 150" stroke="#8EA473" strokeWidth="0.8" opacity="0.5" />
            <circle cx="200" cy="150" r="3" fill="#FFFDF9" />
            <circle cx="196" cy="146" r="2" fill="#FFFDF9" />
            <circle cx="204" cy="147" r="2.5" fill="#FFF5F7" />
          </svg>
        </motion.div>


        {/* ================= FOREGROUND WRAPPING & SILK RIBBON ================= */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 450">
          <defs>
            <linearGradient id="kraft-grad-front-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFD2C0" />
              <stop offset="100%" stopColor="#AD9B81" />
            </linearGradient>
            <linearGradient id="kraft-grad-front-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EADBC8" />
              <stop offset="100%" stopColor="#B3A287" />
            </linearGradient>
          </defs>

          {/* Underlay shading */}
          <path d="M 110 320 L 200 420 L 290 320 Z animate" fill="#1C1C1C" opacity="0.08" />

          {/* Foreground Kraft fold left (comes over stems) */}
          <path d="M 110 240 L 200 420 L 50 170 Z" fill="url(#kraft-grad-front-left)" stroke="#B3A287" strokeWidth="0.5" />

          {/* Foreground Kraft fold right */}
          <path d="M 290 240 L 200 420 L 350 170 Z" fill="url(#kraft-grad-front-right)" stroke="#B3A287" strokeWidth="0.5" />

          {/* Wrap cone binding seam */}
          <line x1="200" y1="360" x2="200" y2="420" stroke="#7A6F5C" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />

          {/* Elegant Satin Ribbon (Pink Ribbon wrapping around the stem grip) */}
          {/* Main ribbon wrap */}
          <path d="M 160 310 Q 200 315 240 310 Q 240 325 200 328 Q 160 325 160 310 Z" fill="url(#silk-ribbon)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
          
          {/* Beautiful bow tie */}
          <path d="M 200 319 C 170 300 175 335 200 319 Z" fill="url(#silk-ribbon)" stroke="#D4869A" strokeWidth="0.5" />
          <path d="M 200 319 C 230 300 225 335 200 319 Z" fill="url(#silk-ribbon)" stroke="#D4869A" strokeWidth="0.5" />
          {/* Bow central knot */}
          <circle cx="200" cy="319" r="6" fill="#F4BAC9" stroke="#C57589" strokeWidth="0.8" />
          {/* Ribbon tails falling down */}
          <path d="M 197 323 C 185 345 190 375 180 395" stroke="url(#silk-ribbon)" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 203 323 C 215 345 210 375 220 395" stroke="url(#silk-ribbon)" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>

        {/* Small floating sparkles on selected flower */}
        <AnimatePresence>
          {(selectedFlowerId || hoveredId) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none z-30"
            >
              <Sparkles className="w-5 h-5 text-amber-200 absolute top-12 left-16 animate-bounce" />
              <Sparkles className="w-4 h-4 text-pink-300 absolute top-28 right-20 animate-pulse" />
              <Sparkles className="w-4 h-4 text-purple-200 absolute bottom-32 left-24 animate-pulse" style={{ animationDelay: "1s" }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </div>

      {/* Flower Details Panel underneath, showing letter mapping */}
      <div className="w-full mt-6 bg-brand-ivory/80 backdrop-blur-sm border border-brand-rose/20 p-5 rounded-2xl shadow-sm text-center">
        <AnimatePresence mode="wait">
          {selectedFlowerId ? (
            <motion.div
              key={selectedFlowerId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs tracking-widest uppercase font-sans text-brand-rose font-medium">Selected Flower Symbol</span>
              <h4 className="text-lg font-serif font-semibold text-brand-charcoal mt-1">
                {FLOWERS_DATA.find(f => f.id === selectedFlowerId)?.name} 
                <span className="text-xs font-mono text-brand-sage ml-2 italic">
                  ({FLOWERS_DATA.find(f => f.id === selectedFlowerId)?.scientificName})
                </span>
              </h4>
              <p className="text-sm font-serif italic text-brand-sage font-medium mt-1">
                &ldquo;{FLOWERS_DATA.find(f => f.id === selectedFlowerId)?.meaning}&rdquo;
              </p>
              
              <div className="w-12 h-[1px] bg-brand-rose/30 my-3" />
              
              {/* Handwritten Quote connection */}
              <div className="bg-brand-cream/60 p-3.5 rounded-xl border border-brand-rose/10 max-w-sm">
                <p className="text-sm font-serif italic text-rose-800/80 leading-relaxed font-medium">
                  &ldquo;{FLOWERS_DATA.find(f => f.id === selectedFlowerId)?.symbolicLetterFragment}&rdquo;
                </p>
                <div className="text-right text-[11px] text-brand-sage font-mono mt-2">- yashe to nishi</div>
              </div>

              <button
                onClick={() => { if (onFlowerSelect) onFlowerSelect(null); }}
                className="mt-4 text-xs font-sans text-brand-charcoal hover:text-brand-rose underline transition-colors cursor-pointer"
              >
                Show entire bouquet
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-4 text-sm font-serif text-brand-charcoal/70 flex flex-col items-center gap-2"
            >
              <Info className="w-4 h-4 text-brand-rose opacity-80" />
              <p className="max-w-xs leading-relaxed">
                Each blossom carries a dedicated value. Click on any colored petal group to reveal the specific thought Yashe held for Nishi.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
