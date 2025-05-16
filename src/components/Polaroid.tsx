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
      className="absolute w-48 h-64 bg-white rounded shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 100, rotate: rotation }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ 
        duration: 1.5, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
      }}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={caption}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 text-center">
        <p className="font-medium text-gray-800">{caption}</p>
      </div>
    </motion.div>
  );
};

export default Polaroid;
