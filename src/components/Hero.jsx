import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative bg-gradient-to-br from-white via-blue-50 to-white min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <Section className="relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 tracking-wide uppercase">
                            IT Company & Digital Partner
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Solutions</span> for Growing Businesses
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-600 font-medium mb-4"
                    >
                        Mobile App Development | Website Development | Custom Software Solutions
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        We build scalable, secure and high‑performance digital solutions that help businesses grow across India and global markets.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                            Get Free Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-semibold rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all hover:border-gray-300 shadow-sm">
                            View Services
                        </a>
                        
        
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default Hero;
