import React from 'react'
import { services } from '../../../utils';

const Services = () => {

    return (
        <div className="relative z-10 bg-[#0B1D26] py-32">
            <div className="container mx-auto !block px-4">
                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <span className="text-[#64DA8D] text-center text-2xl font-bold tracking-widest">
                        SERVICES
                    </span>
                    <h2 className="text-white text-center text-[44px] font-bold">
                        You can count on us
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center gap-6 text-center">
                                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-white text-2xl font-bold">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services