import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-indigo-500 to-cyan-500',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'from-cyan-500 to-purple-500',
    },
    {
      category: 'AI & LLM',
      skills: ['OpenAI API', 'Claude', 'Gemini', 'LangChain', 'Vector DB'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

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
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="p-6 rounded-2xl glass-dark border border-white/10 h-full hover:border-white/20 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6 group-hover:text-white transition-all duration-300`}>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover:shadow-glow transition-all`} />
                        <span className="text-slate-300 text-sm group-hover:text-white transition-all duration-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Other Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'REST APIs',
                'GraphQL',
                'WebSockets',
                'Authentication',
                'Performance Optimization',
                'Testing',
                'System Design',
                'Agile',
                'Technical Writing',
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full glass-dark text-slate-300 text-sm hover:text-white hover:shadow-glow-cyan hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
