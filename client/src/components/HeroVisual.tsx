import { motion } from 'framer-motion';

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663059319107/Q9gq6bWUS6EYCQ7n9EDjGP/hero-tech-visual-h3gPwLeAdJt6KKgSLfqoqS.webp"
          alt="Tech Visual"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/50" />
    </div>
  );
}
