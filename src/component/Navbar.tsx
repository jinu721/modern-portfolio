import { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import { Menu, X} from 'lucide-react';


interface NavbarIF {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean) => void;
}

export const Navbar = ({ isOpen, setIsOpen }:NavbarIF) => {
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ['Home', 'Work', 'Story', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-4 md:px-6 transition-all duration-500 ${
        scrolled ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'py-4 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.span 
          className="text-2xl md:text-3xl font-bold text-white font-space"
          whileHover={{ scale: 1.05 }}
        >
          J<span className="text-gradient">.</span>
        </motion.span>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white text-lg font-outfit relative group tracking-wide"
              whileHover={{ x: 5 }}
            >
              <span className="relative z-10">{item}</span>
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};