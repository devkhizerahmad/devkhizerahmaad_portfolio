import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
  const [stats, setStats] = useState({ projects: 0, technologies: 0, experience: 0 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    const interval = setInterval(() => {
      setStats((prev) => ({
        projects: Math.min(prev.projects + 2, 50),
        technologies: Math.min(prev.technologies + 1.2, 30),
        experience: Math.min(prev.experience + 0.08, 8),
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          onViewportEnter={() => setHasStarted(true)}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm a passionate full-stack developer with a deep interest in AI and automation. With over 8 years of experience building web applications, I've worked with startups and enterprises to deliver scalable solutions.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My expertise spans modern JavaScript frameworks, backend architecture, cloud deployment, and integrating AI models into production applications. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Completed', value: stats.projects, suffix: '+' },
                { label: 'Technologies Used', value: stats.technologies, suffix: '+' },
                { label: 'Years Experience', value: stats.experience.toFixed(1), suffix: '' },
                { label: 'Clients Satisfied', value: 25, suffix: '+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl glass-dark hover:shadow-glow-cyan transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {typeof stat.value === 'number' ? Math.floor(stat.value) : stat.value}
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Specializations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Full Stack Development',
                  description: 'Building end-to-end web applications with React, Node.js, and modern databases.',
                },
                {
                  title: 'AI Integration',
                  description: 'Integrating LLMs and AI models into production applications with optimal performance.',
                },
                {
                  title: 'Automation Systems',
                  description: 'Creating intelligent automation workflows that streamline complex business processes.',
                },
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl glass-dark border border-white/10 hover:border-indigo-500 hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/0 to-cyan-600/0 group-hover:from-indigo-600/10 group-hover:to-cyan-600/10 transition-all duration-300 pointer-events-none" />
                  
                  {/* Accent glow */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/20 group-hover:to-cyan-500/20 rounded-full blur-2xl transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">{spec.title}</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-all duration-300">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
