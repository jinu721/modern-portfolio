import { motion} from 'framer-motion';


export const Story = () => {
    return (
      <section id="story" className="py-32 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">My Story</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400" />
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 font-outfit leading-relaxed">
                As an 18-year-old full-stack developer, my story began when I fell in love with equations and the mysteries hidden within computers. What started as pure curiosity soon transformed into an obsession with solving problems and building seamless digital experiences.
              </p>
              <p className="text-lg text-white/80 font-outfit leading-relaxed">
                I specialize in crafting visually stunning and highly intuitive front-end experiences using React, ensuring seamless user interactions. On the backend, I build scalable and efficient solutions with structured (SQL) and unstructured (NoSQL) databases, leveraging Express to create robust APIs.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  'Scalability', 
                  'Performance', 
                  'Elegance', 
                  'Innovation', 
                  'Precision', 
                  'Efficiency', 
                  'Resilience', 
                  'Optimization'
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm border border-white/20 font-outfit"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl transform rotate-3" />
              <img
                src="/api/placeholder/600/600"
                alt="Working on code"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  };