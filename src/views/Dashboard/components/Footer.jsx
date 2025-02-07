import React from 'react';
import { footerLinks, socialLinks } from '../../../utils';

const Footer = () => {
    return (
        <footer className="relative z-50 bg-[#0B1D26] text-gray-400 py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1D26] pointer-events-none" />
            <div className="container mx-auto !block px-4 relative">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12 justify-items-center">
                    {/* Logo Column */}
                    <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                        <img 
                            src="https://cloudcacheconsulting.com/public/images/cloudlogo.png" 
                            alt="CloudCache Logo"
                        />
                    </div>

                    <div className="col-span-1 sm:col-span-3 lg:col-span-5 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-auto justify-items-center">
                            {Object.entries(footerLinks).map(([title, links]) => (
                                <div key={title} className="w-full text-center sm:text-center">
                                    <h3 className="text-white font-semibold text-lg mb-4 sm:mb-6">
                                        {title}
                                    </h3>
                                    <ul className="space-y-3 sm:space-y-4">
                                        {links.map((link) => (
                                            <li key={link.name}>
                                                <a 
                                                    href={link.href}
                                                    className="text-sm sm:text-base hover:text-white transition-colors duration-200"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
                        © 2024 CloudCache Consulting, Inc. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 order-1 sm:order-2">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-lg sm:text-xl">
                                    {link.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="h-6 sm:h-0" />
            </div>
        </footer>
    );
};

export default Footer;