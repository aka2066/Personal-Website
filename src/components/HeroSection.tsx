"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import Polaroid from './Polaroid';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Central content with name and title */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Semi-transparent overlay for name and title */}
        <motion.div 
          className="bg-black/40 backdrop-blur-md rounded-2xl px-8 py-6 mb-12 w-full max-w-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-3 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ryan Rahrooh
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl text-gray-200 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Software Engineer
          </motion.h2>
        </motion.div>
        
        {/* Polaroid Images Container */}
        <div className="relative w-full h-[450px]">
          {/* Top left polaroid */}
          <div className="absolute top-[-50px] left-[5%]">
            <Polaroid 
              imageUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdyYWR1YXRpb24gRGF5PC90ZXh0Pjwvc3ZnPg==" 
              caption="Graduation Day" 
              rotation={15} 
              delay={0.3} 
            />
          </div>
          
          {/* Top right polaroid */}
          <div className="absolute top-[-20px] right-[5%]">
            <Polaroid 
              imageUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2R1Y3QgTGF1bmNoPC90ZXh0Pjwvc3ZnPg==" 
              caption="Product Launch" 
              rotation={-10} 
              delay={0.5} 
            />
          </div>
          
          {/* Bottom left polaroid */}
          <div className="absolute bottom-[-20px] left-[15%]">
            <Polaroid 
              imageUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZhbWlseSBWaXNpdHM8L3RleHQ+PC9zdmc+" 
              caption="Family Visits" 
              rotation={-8} 
              delay={0.7} 
            />
          </div>
          
          {/* Bottom right polaroid */}
          <div className="absolute bottom-[-50px] right-[15%]">
            <Polaroid 
              imageUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vbnRlcmV5IEJlYWNoPC90ZXh0Pjwvc3ZnPg==" 
              caption="Monterey Beach" 
              rotation={12} 
              delay={0.9} 
            />
          </div>
        </div>
        
        {/* Location indicator */}
        <motion.div 
          className="absolute bottom-8 flex items-center text-white text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>Orlando, FL</span>
        </motion.div>
        
        {/* Navigation buttons for main sections */}
        <motion.div 
          className="absolute -bottom-12 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Link href="#about" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            About Me
          </Link>
          <Link href="#projects" className="px-6 py-3 border border-blue-400 text-white rounded-md hover:bg-blue-500/30 transition">
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
