import React from 'react';
import { Button } from 'rizzui';

const GetStarted = () => {
    return (
        <section className="relative z-10 bg-gradient-to-b from-[#1D7287] to-[#0B1D26] py-32 overflow-hidden">
            <div className="container mx-auto !block px-4">
                <div
                    className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#64DA8D] text-xl font-bold mb-4 tracking-wider">
                        Get started
                    </span>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        <span className="relative inline-block">
                            Boost your productivity.
                        </span>
                        <br />
                        Start using our app today.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
                        veniam aliqua proident excepteur commodo do ea.
                    </p>
                    <div>
                        <Button
                            size="lg"
                            className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Get started
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GetStarted; 