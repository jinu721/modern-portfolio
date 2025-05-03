import { motion, useScroll, useTransform } from 'framer-motion';
import {ArrowRight, ChevronDown } from 'lucide-react';


export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-[150px] bg-gradient-to-r from-blue-400/30 to-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
              rotate: [`${Math.random() * 360}deg`, `${Math.random() * 720}deg`],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-xl md:text-2xl text-blue-400 font-light font-outfit tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Full-Stack Developer
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-8xl font-bold leading-tight font-space tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-size-200 animate-gradient">
                Experiences
              </span>
            </motion.h1>
          </div>

          <motion.p 
            className="max-w-2xl text-base md:text-xl text-white/70 font-outfit leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Hi, I'm Jinan. I merge design and engineering to create sleek interfaces and ultra-efficient backends. Passion drives me, and excellence defines my work.
          </motion.p>

          <motion.div 
            className="flex gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://github.com/jinu721"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full font-outfit tracking-wide relative overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="http://www.linkedin.com/in/abdul-jinan-776a14305"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full font-outfit tracking-wide hover:bg-white/10 transition-colors"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y }}
          className="absolute bottom-20 left-6 flex flex-col gap-6"
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};