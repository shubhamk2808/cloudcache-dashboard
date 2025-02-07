import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const GalleryItem = ({ post }) => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  const randomGradient = `linear-gradient(135deg, ${randomColor}, hsl(${
    Math.random() * 360
  }, 70%, 80%))`;

  return (
    <motion.div
      className="relative group rounded-2xl bg-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-[320px] flex flex-col"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-8 flex flex-col flex-1">
        <div
          className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shrink-0"
          style={{ background: randomGradient }}
        >
          <div className="text-2xl font-bold text-white">
            {post.title.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-white text-xl font-semibold mb-4 line-clamp-2 group-hover:text-[#64DA8D] transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-300 line-clamp-4 mb-6 text-sm flex-1">
            {post.body}
          </p>
          <motion.button
            className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-sm mt-auto"
            whileHover={{ x: 5 }}
          >
            Read More
            <FiArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: randomGradient }}
      />
    </motion.div>
  );
};

export default GalleryItem;
