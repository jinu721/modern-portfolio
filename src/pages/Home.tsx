import { useState} from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import {Github,Mail} from 'lucide-react';
import { Navbar } from '../component/Navbar';
import { Hero } from '../component/Hero';
import { Projects } from '../component/Projects';
import { Skills } from '../component/Skills';
import { Story } from '../component/Story';
import { Contact } from '../component/Contact';




export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
          >
            <div className="h-full flex flex-col justify-center items-center gap-8 p-6">
              {["Home", "Work", "Story", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-3xl font-bold text-white/80 hover:text-white transition-colors group font-space"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <motion.div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              <div className="absolute bottom-12 flex gap-6">
                <motion.a
                  href="https://github.com/jinu721/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="mailto:jinu8683@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="overflow-hidden">
        <Hero />
        <Projects />
        <Skills />
        <Story />
        <Contact />
      </main>
    </div>
  )
}
