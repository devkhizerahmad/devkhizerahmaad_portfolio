import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

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
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-white placeholder-slate-500"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-white placeholder-slate-500"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass-dark border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-white placeholder-slate-500 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-glow hover:shadow-glow-cyan hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg glass-dark hover:shadow-glow-cyan hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-cyan-500/10 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center group-hover:shadow-glow-cyan transition-all">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <a className="font-semibold text-white" href="mailto:devkhizerahmad@gmail.com">devkhizerahmad@gmail.com</a>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-lg glass-dark hover:shadow-glow-cyan hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-cyan-500/10 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:shadow-glow-cyan transition-all duration-300">
                      <Github size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">GitHub</p>
                      <a className="font-semibold text-white" href="https://github.com/devkhizerahmad">github.com/devkhizerahmad</a>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-lg glass-dark hover:shadow-glow-cyan hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-cyan-500/10 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:shadow-glow-cyan transition-all duration-300">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">LinkedIn</p>
                      <a className="font-semibold text-white" href="https://www.linkedin.com/in/khizar-ahmed-dev/">khizar-ahmed-dev</a>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/devkhizerahmad', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Mail, href: '#', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-12 h-12 rounded-lg glass-dark flex items-center justify-center text-slate-400 hover:text-white hover:shadow-glow-cyan hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-cyan-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    title={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
