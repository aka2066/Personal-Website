import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-violet-900">
        {/* Animated gradient overlays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/30"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 to-blue-700/30"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
        />
        
        {/* Light dots/stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const opacity = Math.random() * 0.5 + 0.3;
            const left = `${Math.random() * 100}%`;
            const top = `${Math.random() * 100}%`;
            const animationDelay = `${Math.random() * 10}s`;
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left,
                  top,
                  opacity,
                  animationDelay,
                  animationDuration: '3s',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
