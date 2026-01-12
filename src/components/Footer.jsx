import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            Spirex Infoways
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Smart digital solutions for growing businesses. We build scalable, secure, and high-performance applications.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Rk Iconic B, 602, 150 Feet Ring Rd, Rajkot, Gujarat</li>
                            <li>+91 9898608606</li>
                            <li>info@spirexinfoways.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row gap-[10px] items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Spirex Infoways. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
