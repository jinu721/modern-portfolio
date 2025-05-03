import { motion } from 'framer-motion';



export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Redux", level: 80 },
        { name: "TailwindCSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQL", level: 75 },
        { name: "JWT", level: 80 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 75 },
        { name: "Git", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Nginx", level: 70 },
        { name: "Java", level: 60 },
        { name: "C", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400"/>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6 font-space">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-outfit">{skill.name}</span>
                      <span className="text-sm text-white/60 font-outfit">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
        >
          <h3 className="text-xl font-semibold text-white mb-4 font-space">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Data Modeling",
              "RESTful APIs",
              "Figma",
              "Postman",
              "Team Collaboration",
              "Code Review",
              "API Documentation"
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm border border-white/20 font-outfit"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
