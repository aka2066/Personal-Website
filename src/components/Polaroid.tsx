"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PolaroidProps {
  imageUrl: string;
  caption: string;
  rotation: number;
  delay: number;
}

const Polaroid: React.FC<PolaroidProps> = ({ imageUrl, caption, rotation, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-md shadow-2xl p-3 w-56 h-72 relative z-10"
      initial={{ opacity: 0, y: 100, rotate: rotation, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotate: rotation, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 10,
          duration: 1.2,
          delay: delay
        }
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        transition: { duration: 0.3 } 
      }}
      style={{
        transformOrigin: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="relative h-48 w-full mb-4 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          {caption}
        </div>
        <Image
          src={imageUrl}
          alt={caption}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          style={{ objectFit: "cover" }}
          onError={(e) => {
            // If image fails to load, we'll keep the placeholder text visible
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="text-center">
        <p className="font-medium text-gray-800 italic">{caption}</p>
      </div>
    </motion.div>
  );
};

export default Polaroid;
