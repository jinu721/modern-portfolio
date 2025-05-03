import { motion } from 'framer-motion';


interface ProjectIF {
    title: string;
    description:string;
    tech: string[],
    image:string,
    url: string,
}

export const ProjectCard = ({ project, index }:{project:ProjectIF,index:number}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-2 font-space">
              {project.title}
            </h3>
            <p className="text-white/70 mb-4 font-outfit">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-outfit backdrop-blur-sm border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
