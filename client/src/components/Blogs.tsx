import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ArrowRight, Calendar, User, Search, X } from 'lucide-react';
import { blogsData } from '@/lib/blogsData';

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(blogsData.map(b => b.category)))];

  const filteredBlogs = useMemo(() => {
    return blogsData.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
    <section id="blogs" className="relative py-20 md:py-32 overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
            <p className="text-slate-400 text-lg mt-4 max-w-2xl">
              Insights and tutorials on web development, AI integration, and automation systems.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg glass-dark border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  (category === 'All' && !selectedCategory) || selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-glow-cyan'
                    : 'glass-dark text-slate-300 border border-white/10 hover:border-indigo-500/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.a
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="group rounded-2xl glass-dark border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {blog.author}
                      </div>
                    </div>

                    {/* Read Time & Link */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                        {blog.readTime}
                      </span>
                      <motion.div
                        className="flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Read More <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-slate-400 text-lg">No articles found matching your search.</p>
            </motion.div>
          )}

          {/* Results Count */}
          {filteredBlogs.length > 0 && (
            <motion.div variants={itemVariants} className="text-center mt-12 text-slate-400">
              <p>Showing {filteredBlogs.length} of {blogsData.length} articles</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
