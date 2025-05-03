import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCart";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with seamless shopping experiences and real-time inventory tracking.",
      tech: ["Express", "Js", "MongoDB"],
      image: "/images/ecommerce.webp",
      url: "https://github.com/jinu721/express-ecommerce",
    },
    {
      title: "Netflix Clone",
      description:
        "A high-performance Netflix clone with user authentication, dynamic content, and responsive UI.",
      tech: ["React", "TailwindCSS", "TMDB"],
      image: "/images/netflix.webp",
      url: "https://github.com/jinu721/netflix-clone",
    },
    {
      title: "OLX Clone",
      description:
        "A marketplace platform for buying and selling products with real-time chat and secure payments.",
      tech: ["React", "Ts", "Firebase"],
      image: "/images/olx.webp",
      url: "https://github.com/jinu721/olx-clone",
    },
    {
      title: "Emergency Ambulance App",
      description:
        "A real-time ambulance booking system ensuring quick and efficient emergency response.",
      tech: ["React", "Express", "MongoDB", "Ts"],
      image: "/images/ambulance.png",
      url: "https://github.com/jinu721/emergency-ambulance-MERN",
    },
  ];

  return (
    <section id="work" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white font-space">
            Selected Work
          </h2>
          <p className="text-white/70 text-lg max-w-2xl font-outfit leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
