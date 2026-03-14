import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// @ts-ignore
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Suspense, lazy } from 'react';

const HeroVisual = lazy(() => import('./HeroVisual'));

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 gradient-animate opacity-20 blur-3xl -z-10" />

      <div className="container flex justify-center">
        {/* Center Content */}
        <motion.div
          className="z-10 flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-slate-300">Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Full Stack &{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Developer
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-slate-400 mb-8 min-h-12">
            <TypeAnimation
              sequence={[
                'Building scalable modern applications',
                2000,
                'Crafting AI-powered solutions',
                2000,
                'Automating complex workflows',
                2000,
                'Creating beautiful user experiences',
                2000,
              ]}
              repeat={Infinity}
              cursor={true}
              speed={50}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed"
          >
            I specialize in building production-ready applications with React, Node.js, and cutting-edge AI technologies. Let's create something extraordinary together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12 justify-center">
            <motion.button
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold flex items-center gap-2 shadow-glow hover:shadow-glow-cyan hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="px-8 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 justify-center">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/devkhizerahmad' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Mail, label: 'Email', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
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
          </motion.div>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
