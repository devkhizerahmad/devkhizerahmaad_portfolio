import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'AI Chat Dashboard',
      description: 'Real-time chat application powered by OpenAI with conversation history and analytics.',
      category: 'AI Projects',
      tags: ['React', 'OpenAI', 'Node.js', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Automation System',
      description: 'Automated workflow system for scheduling and executing complex business processes.',
      category: 'AI Projects',
      tags: ['Python', 'Celery', 'PostgreSQL', 'Redis'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with real-time metrics and reporting.',
      category: 'Frontend',
      tags: ['React', 'Recharts', 'TypeScript', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'Multi-model AI content generation tool with Claude and GPT-4 integration.',
      category: 'AI Projects',
      tags: ['Next.js', 'Claude API', 'OpenAI', 'Vercel'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Social media tracking and analytics platform with predictive insights.',
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'ML', 'AWS'],
      github: '#',
      demo: '#',
    },
  ];

  const filters = ['All', 'Frontend', 'Full Stack', 'AI Projects'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="opacity-0 animate-fade-in"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const buttonClass = isActive
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-glow-cyan'
                : 'glass-dark text-slate-300 hover:text-white hover:border-slate-400';
              return (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${buttonClass}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="group h-full rounded-2xl glass-dark border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 relative overflow-hidden group-hover:from-indigo-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github === '#' ? 'https://github.com/devkhizerahmad' : project.github}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass-dark hover:shadow-glow-cyan hover:bg-indigo-500/20 transition-all duration-300 text-sm font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} /> Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:shadow-glow-cyan hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 text-sm font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} /> Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
