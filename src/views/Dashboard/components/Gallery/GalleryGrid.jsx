import React from 'react';
import GalleryItem from './GalleryItem';
import { motion } from 'framer-motion';

const GalleryGrid = ({ posts, loading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-[320px] bg-white/5 rounded-2xl animate-pulse backdrop-blur-sm"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          variants={itemVariants}
          className={`transform ${index % 3 === 1 ? 'lg:translate-y-8' : ''}`}
        >
          <GalleryItem post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid; 