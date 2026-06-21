export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  meaning: string;
  count: number;
  color: string;
  borderColor: string;
  symbolicLetterFragment: string;
}

export interface MemoryPoint {
  id: string;
  title: string;
  date: string;
  mood: string;
  quote: string;
  letterConnection: string;
  rotation: number; // degrees
  offsetX: string; // Tailwind offset class
  colorBg: string;
  iconName: string;
  imageUrl?: string;
}

export interface LetterChapter {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  content: string[];
  flowerAccent: string;
  quoteEmphasis: string;
}

export const FLOWERS_DATA: Flower[] = [
  {
    id: "rose",
    name: "Rose Pink",
    scientificName: "Rosa rubiginosa",
    meaning: "Grace, gratitude, and a tender apology",
    count: 5,
    color: "#E8B8C7",
    borderColor: "#D297A9",
    symbolicLetterFragment: "For all the times I made things difficult, and for caring for me in ways I never deserved enough."
  },
  {
    id: "tuberose",
    name: "Tuberose",
    scientificName: "Agave amica",
    meaning: "Passionate loyalty, divine protection, and pure warmth",
    count: 4,
    color: "#F6F5EE",
    borderColor: "#D6D3C2",
    symbolicLetterFragment: "Thank you for being someone I never expected but always needed."
  },
  {
    id: "tulip",
    name: "Golden Tulip",
    scientificName: "Tulipa sylvestris",
    meaning: "Loyalty, respect, and steadfast companionship",
    count: 3,
    color: "#EED9B3",
    borderColor: "#D5B888",
    symbolicLetterFragment: "You respected my time, and walked beside me even when it wasn't your favorite thing to do."
  },
  {
    id: "lily",
    name: "White Lily",
    scientificName: "Lilium candidum",
    meaning: "Pure restoration and restored faith in goodness",
    count: 2,
    color: "#FFFDF9",
    borderColor: "#E5DEC9",
    symbolicLetterFragment: "You made me believe that good people still exist in this world."
  },
  {
    id: "lavender",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    meaning: "Serene devotion, listening, and non-judgmental comfort",
    count: 8,
    color: "#D8C7F0",
    borderColor: "#BCA2E1",
    symbolicLetterFragment: "All you ever did was listen without getting tired, and understand me without judging."
  },
  {
    id: "babys_breath",
    name: "Baby's Breath",
    scientificName: "Gypsophila paniculata",
    meaning: "Everlasting adoration and holding onto the little moments",
    count: 12,
    color: "#FFF5F7",
    borderColor: "#E8DFE2",
    symbolicLetterFragment: "Remembering the little things that made me smile."
  }
];

export const MEMORIES_DATA: MemoryPoint[] = [
  {
    id: "memory-listening",
    title: "Always Listening",
    date: "An Endless Gift",
    mood: "Comfort & Peace",
    quote: "All you ever did was listen without getting tired...",
    letterConnection: "No matter how busy or tired you were, your patience never wavered. Having someone who truly hears you is a rare luxury.",
    rotation: -4,
    offsetX: "lg:-ml-8",
    colorBg: "bg-brand-lavender/10",
    iconName: "Ear"
  },
  {
    id: "memory-shared-view",
    title: "Our Shared Path",
    date: "A Warm Sight",
    mood: "Treasured Detail",
    quote: "...and remembered the little things that made me smile.",
    letterConnection: "A beautiful perspective of moments spent together. Looking back at this photo fills me with peace and appreciation.",
    rotation: 5,
    offsetX: "lg:mr-12",
    colorBg: "bg-brand-sage/10",
    iconName: "Sparkles",
    imageUrl: "https://lh3.googleusercontent.com/d/1j1gMz3B2Qk2on83wFXNyNZq4MOahAeTz=w600"
  },
  {
    id: "memory-good-people",
    title: "Faith in Goodness",
    date: "A Quiet Realization",
    mood: "Restored Hope",
    quote: "You made me believe that good people still exist.",
    letterConnection: "Your genuine nature and gentle soul became my anchor. You showed me that sincerity is still real, simple and absolute.",
    rotation: -2,
    offsetX: "lg:ml-6",
    colorBg: "bg-brand-ivory border border-rose-200/55",
    iconName: "Heart"
  },
  {
    id: "memory-cherished-moment",
    title: "Your Warm Light",
    date: "Sweetest Memory",
    mood: "Warm Remembrance",
    quote: "...care for me in ways I never deserved enough.",
    letterConnection: "This captured snapshot is a peaceful reminder of the genuine care and comfort you bring into my life every single day.",
    rotation: 3,
    offsetX: "lg:mr-4",
    colorBg: "bg-brand-rose/10",
    iconName: "Heart",
    imageUrl: "https://lh3.googleusercontent.com/d/1SS6qhzxoPEXvJ4mAyJdVSfB8VpAAq4nP=w600"
  }
];

export const LETTER_CHAPTERS: LetterChapter[] = [
  {
    id: "intro",
    label: "Chapter I",
    title: "The Beginning",
    subtitle: "A silent arrival that changed everything",
    content: [
      "To: Dear Nishi",
      "From: Yashe",
      "There are moments in life that arrive without warning, yet shift the ground beneath our feet forever. That is how you entered my life—someone I never expected, but always, always needed."
    ],
    flowerAccent: "babys_breath",
    quoteEmphasis: "Thank you for being someone I never expected but always needed."
  },
  {
    id: "apology",
    label: "Chapter II",
    title: "Things I Never Said",
    subtitle: "The weight of silent appreciation",
    content: [
      "Dear Nishi,",
      "I'm sorry.",
      "For all the times I made things difficult when all you ever did was listen without getting tired, understand me without judging, and care for me in ways I never deserved enough."
    ],
    flowerAccent: "rose",
    quoteEmphasis: "I'm sorry... for all the times I made things difficult."
  },
  {
    id: "walk",
    label: "Chapter III",
    title: "The Steadfast Companion",
    subtitle: "Walking of paths & shared moments",
    content: [
      "You respected my time, walked beside me even when it wasn't your favorite thing to do, and remembered the little things that made me smile.",
      "You were there in moments both simple and complex, offering a silent strength that required no explanations."
    ],
    flowerAccent: "tulip",
    quoteEmphasis: "You walked beside me even when it wasn't your favorite thing to do."
  },
  {
    id: "faith",
    label: "Chapter IV",
    title: "Believing in Goodness",
    subtitle: "A light in a skeptic world",
    content: [
      "You made me believe that good people still exist. In a world crowded with noise, your quiet kindness has been a sanctuary.",
      "The sheer safety of your presence made me realize how rare it is to find a soul as genuinely gentle as yours."
    ],
    flowerAccent: "lily",
    quoteEmphasis: "You made me believe that good people still exist."
  },
  {
    id: "gratitude",
    label: "Chapter V",
    title: "An Everlasting Thank You",
    subtitle: "A bouquet that blooms forever",
    content: [
      "If I've hurt you, disappointed you, or taken your kindness for granted, I'm truly sorry.",
      "Thank you for being my sanctuary, for holding space when things got difficult, and for being the wonderful human being you are.",
      "These flowers will never fade, just like my gratitude for each and every memory you've given me."
    ],
    flowerAccent: "lavender",
    quoteEmphasis: "Thank you for being someone I never expected but always needed."
  }
];
