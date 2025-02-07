import React from 'react'
import { Button } from 'rizzui'
import { motion } from 'framer-motion'
import { handleLogoClick } from '../../../utils';

const Banner = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container !block mx-auto">
                <motion.div 
                    className="flex items-center justify-start space-x-4"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="w-8 sm:w-10 h-[2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: "2rem" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <p className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-[0.25em] uppercase">
                        A Powerful Tool
                    </p>
                </motion.div>

                <motion.h1 
                    className="text-white text-[2rem] sm:text-[3.5rem] lg:text-[5.5rem] font-bold mt-4 mb-6 leading-tight"
                    variants={itemVariants}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Accelerate
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        the Cloud
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                    >
                        Experience with
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2.1 }}
                        className="relative inline-block"
                    >
                        <span className="relative z-10 bg-gradient-to-r from-[#64DA8D] to-[#2D8074] text-transparent bg-clip-text">
                            Cloudcache
                        </span>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-[#64DA8D]/20 to-[#2D8074]/20 blur-xl"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            transition={{ 
                                duration: 1,
                                delay: 1.3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    </motion.span>
                </motion.h1>

                <motion.p 
                    className="text-gray-300 text-base sm:text-xl lg:text-2xl mb-8 mx-auto font-medium"
                    variants={itemVariants}
                >
                    We're focussed on changing the way people work. 
                    Do you want in on the action?
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        variant="solid"
                        style={{border:"1px solid white"}}
                        className="bg-transparent text-white text-sm sm:text-base font-bold rounded-full hover:bg-white/90 px-6 sm:px-8 hover:bg-white hover:text-black"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                            onClick={handleLogoClick}
                        >
                            Request your demo today!
                        </motion.span>
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-1/4 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-[120px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
            />
        </motion.div>
    )
}

export default Banner