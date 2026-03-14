import { motion } from 'framer-motion';
import { useRoute } from 'wouter';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { blogsData } from '@/lib/blogsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogDetail() {
  const [match, params] = useRoute('/blog/:id');
  
  if (!match) return null;
  
  const blog = blogsData.find(b => b.id === parseInt(params?.id || '0'));
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <motion.a
            href="/#blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold hover:shadow-glow-cyan transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft size={20} /> Back to Blogs
          </motion.a>
        </div>
        <Footer />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <article className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

        <div className="container max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Back Button */}
            <motion.a
              href="/#blogs"
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-dark text-slate-300 hover:text-white hover:bg-indigo-500/10 transition-all mb-8"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={18} /> Back to Blogs
            </motion.a>

            {/* Hero Image */}
            <motion.div
              variants={itemVariants}
              className="mb-8 rounded-2xl overflow-hidden h-96 md:h-[500px]"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Category Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
                {blog.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/10"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={18} />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="prose prose-invert max-w-none mb-12"
            >
              <div
                className="text-slate-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: blog.content
                    .replace(/<h2>/g, '<h2 class="text-3xl font-bold mt-8 mb-4 text-white">')
                    .replace(/<h3>/g, '<h3 class="text-2xl font-bold mt-6 mb-3 text-white">')
                    .replace(/<p>/g, '<p class="text-lg leading-relaxed">')
                    .replace(/<li>/g, '<li class="ml-6 list-disc">')
                    .replace(/<ul>/g, '<ul class="space-y-2">'),
                }}
              />
            </motion.div>

            {/* Share Section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 p-6 rounded-2xl glass-dark border border-white/10"
            >
              <Share2 size={20} className="text-indigo-400" />
              <span className="text-slate-300 font-semibold">Share this article:</span>
              <div className="flex gap-3 ml-auto">
                {[
                  { name: 'Twitter', href: '#' },
                  { name: 'LinkedIn', href: '#' },
                  { name: 'Facebook', href: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="px-4 py-2 rounded-lg glass-dark text-slate-300 hover:text-white hover:bg-indigo-500/10 transition-all text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-white/10">
              <h2 className="text-2xl font-bold mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogsData
                  .filter(b => b.id !== blog.id && b.category === blog.category)
                  .slice(0, 2)
                  .map((relatedBlog) => (
                    <motion.a
                      key={relatedBlog.id}
                      href={`/blog/${relatedBlog.id}`}
                      className="group rounded-2xl glass-dark border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="h-40 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-slate-400 mt-2">{relatedBlog.readTime}</p>
                      </div>
                    </motion.a>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
