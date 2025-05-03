import { motion} from 'framer-motion';
import {  Mail,} from 'lucide-react';


export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Get in Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400"/>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 font-outfit leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>
            
            <div className="space-y-4">
              <motion.a
                href="mailto:jinu8683@gmail.com"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-outfit">jinu8683@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 transition-colors font-outfit"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 transition-colors font-outfit"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none font-outfit"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg font-medium font-outfit relative group overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};