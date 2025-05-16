import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Polaroid Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* These divs will be positioned to simulate polaroid images */}
        <motion.div 
          className="absolute top-1/4 -left-10 w-48 h-64 bg-white rounded-md shadow-xl p-2"
          style={{ rotate: '15deg' }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 60 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}>
          <div className="h-40 bg-gray-200 mb-2">
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              Graduation Day
            </div>
          </div>
          <p className="text-center text-sm">Graduation Day</p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 -right-16 w-48 h-64 bg-white rounded-md shadow-xl p-2"
          style={{ rotate: '-10deg' }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: -40 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring" }}>
          <div className="h-40 bg-gray-200 mb-2">
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              Product Launch
            </div>
          </div>
          <p className="text-center text-sm">Product Launch</p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-[20%] w-48 h-64 bg-white rounded-md shadow-xl p-2"
          style={{ rotate: '-5deg' }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, type: "spring" }}>
          <div className="h-40 bg-gray-200 mb-2">
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              Conference
            </div>
          </div>
          <p className="text-center text-sm">Tech Conference</p>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-[15%] w-48 h-64 bg-white rounded-md shadow-xl p-2"
          style={{ rotate: '8deg' }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, type: "spring" }}>
          <div className="h-40 bg-gray-200 mb-2">
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              Coding
            </div>
          </div>
          <p className="text-center text-sm">Workspace</p>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="z-10 px-4 bg-black/30 py-10 rounded-xl backdrop-blur-sm">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ryan Rahrooh
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl text-gray-200 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Orlando, FL | ryan.rahrooh@outlook.com | 407-885-8302
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#about" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            About Me
          </Link>
          <Link href="#projects" className="px-6 py-3 border border-blue-400 text-blue-200 rounded-md hover:bg-blue-500/30 transition">
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
