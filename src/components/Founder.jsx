import React from 'react';
import Section from './ui/Section';
import { Quote } from 'lucide-react';

const Founder = () => {
    return (
        <Section id="founder" className="bg-white">
            <div className="max-w-5xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        {/* Image Placeholder */}
                        <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                            <span className="text-lg font-medium">Founder Photo<br />(600x600)</span>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <Quote className="h-10 w-10 text-blue-600 mb-6 opacity-20" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Founder Name</h2>
                        <p className="text-blue-600 font-medium mb-6">Founder & CEO</p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            "We believe in building more than just software; we build partnerships. Our vision is to empower businesses with technology that is not only robust and scalable but also intuitive and future-ready. With years of experience in the IT industry, I lead Spirex Infoways with a commitment to quality, innovation, and client success."
                        </p>

                        <div className="flex gap-4 pt-4 border-t border-blue-100">
                            <div>
                                <span className="block text-2xl font-bold text-gray-900">10+</span>
                                <span className="text-sm text-gray-600">Years Experience</span>
                            </div>
                            <div className="w-px bg-blue-200"></div>
                            <div>
                                <span className="block text-2xl font-bold text-gray-900">150+</span>
                                <span className="text-sm text-gray-600">Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Founder;
