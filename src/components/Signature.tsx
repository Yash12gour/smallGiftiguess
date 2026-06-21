import { motion } from "motion/react";

export default function Signature() {
  // Cursive path drawing 'Yashe'
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2.2, bounce: 0 },
        opacity: { duration: 0.4 }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-6 py-2">
      <div className="relative w-44 h-16">
        <svg
          className="w-full h-full"
          viewBox="0 0 160 60"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cursive 'Y' */}
          <motion.path
            d="M 25 15 C 30 10, 45 8, 35 30 C 30 45, 10 50, 15 32 C 18 20, 40 25, 45 28"
            stroke="#AD6C80"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Cursive 'a' */}
          <motion.path
            d="M 50 32 C 48 24, 60 22, 62 30 C 64 36, 52 38, 54 32 C 55 28, 64 26, 68 32"
            stroke="#AD6C80"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />

          {/* Cursive 's' */}
          <motion.path
            d="M 72 32 C 73 25, 82 25, 80 30 C 78 35, 70 33, 76 38 C 82 42, 85 36, 88 32"
            stroke="#AD6C80"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          />

          {/* Cursive 'h' */}
          <motion.path
            d="M 88 32 L 92 10 C 93 8, 98 12, 95 24 C 94 28, 104 26, 106 32 C 107 35, 104 38, 108 32"
            stroke="#AD6C80"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          />

          {/* Cursive 'e' and loop tail */}
          <motion.path
            d="M 112 32 C 110 26, 120 25, 122 30 C 123 35, 114 36, 118 32 C 122 28, 135 25, 145 28"
            stroke="#AD6C80"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
          />

          {/* Underline Flourish */}
          <motion.path
            d="M 20 48 Q 80 44 140 46"
            stroke="#C0A182"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 2.0 }}
          />
        </svg>
      </div>
      <p className="font-handwritten text-xl text-brand-rose select-none mt-1 animate-pulse">
        Yashe
      </p>
    </div>
  );
}
