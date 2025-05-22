"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900">
      {/* Primary animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Animated overlay with more vibrant colors */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-indigo-800/20"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "easeInOut" 
        }}
      />

      {/* Glowing orbs */}
      {Array(30).fill(0).map((_, index) => {
        const size = Math.random() * 8 + 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;
        const blur = Math.random() * 10 + 5;
        
        return (
          <motion.div 
            key={index}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              filter: `blur(${blur}px)`,
              opacity: 0.6,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: animationDuration, 
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
      
      {/* Subtle mesh grid overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      />
      
      {/* Moving stars */}
      {Array(15).fill(0).map((_, index) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 15;
        
        return (
          <motion.div 
            key={`star-${index}`}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: animationDuration, 
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
