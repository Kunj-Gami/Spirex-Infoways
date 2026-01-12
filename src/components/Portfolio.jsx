import React from 'react';
import Section from './ui/Section';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Development",
            description: "A full-featured online store with payment gateway and inventory system.",
            image: "bg-blue-100" // placeholder class
        },
        {
            title: "Healthcare App",
            category: "Mobile App",
            description: "Patient appointment scheduling and telemedicine mobile application.",
            image: "bg-green-100" // placeholder class
        },
        {
            title: "Corporate Dashboard",
            category: "ERP Solution",
            description: "Internal management dashboard for analytics and reporting.",
            image: "bg-purple-100" // placeholder class
        }
    ];

    return (
        <Section id="portfolio" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Success Stories</h2>
                <p className="text-gray-600 mt-4">
                    Explore some of our recent projects and how we helped our clients succeed.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-xl transition-all duration-300">
                        {/* Image Placeholder */}
                        <div className={`aspect-video w-full ${project.image} flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500`}>
                            <span>Project Screenshot</span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-blue-300 text-sm font-medium mb-1">{project.category}</span>
                            <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            <button className="self-start flex items-center text-white font-medium hover:text-blue-300 transition-colors">
                                View Live <ExternalLink className="ml-2 h-4 w-4" />
                            </button>
                        </div>

                        {/* Always visible content for mobile/when not hovering if preferred, but overlay is nice */}
                        <div className="p-6 md:hidden">
                            <h3 className="text-gray-900 text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-gray-600 text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Portfolio;
