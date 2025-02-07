import React from "react";
import { motion } from "framer-motion";
import { brandLogos, products } from "../../../utils";

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="relative z-10 bg-gradient-to-t from-[#1D7287] to-[#2D8074] py-32">
      <div className="container mx-auto !block px-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-[100px]">
          <span className="text-[#64DA8D] text-center text-2xl font-bold tracking-widest">
            KEY FEATURES
          </span>
          <h2 className="text-white text-center text-[44px] font-bold">
            Our Cloud Solutions & Products
          </h2>
        </div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="relative border-b border-white/10 pb-12"
            >
              {/* Mobile Layout (centered, stacked) - visible on small screens */}
              <div className="flex flex-col items-center text-center lg:hidden">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm mb-8">
                  {product.icon}
                </div>
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-8">
                    {product.brands.map((brand) => (
                      <motion.div
                        key={brand}
                        className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {brandLogos[brand]}
                        <span className="text-sm">{brand}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout (left-aligned) - visible on large screens */}
              <div className="hidden lg:flex items-start gap-12">
                <div className="relative w-full flex items-start gap-8">
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-bold mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      {product.description}
                    </p>
                    <div className="flex gap-6">
                      {product.brands.map((brand) => (
                        <motion.div
                          key={brand}
                          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          {brandLogos[brand]}
                          <span className="text-sm">{brand}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default KeyFeatures;
