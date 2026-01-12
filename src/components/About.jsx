import { motion } from 'framer-motion';
import Section from './ui/Section';
import { CheckCircle2, Target, Eye, ShieldCheck, Rocket } from 'lucide-react';

const About = () => {
    const features = [
        "Highly Skilled Development Team",
        "Secure & Scalable Architecture",
        "Fast Delivery & Reliable Support",
        "Enterprise-Level Quality"
    ];

    const cards = [
        {
            icon: <Target className="h-6 w-6 text-blue-600" />,
            title: "Our Mission",
            text: "To empower businesses with innovative technology solutions that drive growth and excellence.",
            bg: "bg-blue-50/50"
        },
        {
            icon: <Eye className="h-6 w-6 text-indigo-600" />,
            title: "Our Vision",
            text: "To be the leading technology partner for organizations seeking digital transformation.",
            bg: "bg-indigo-50/50"
        }
    ];

    return (
        <Section id="about" className="bg-white py-32 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            <span>About Spirex Infoways</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-tight">
                            Engineering <span className="text-blue-600">Tomorrow's</span> Digital Landscape
                        </h2>

                        <p className="text-xl text-gray-900 font-medium mb-6 leading-relaxed">
                            Spirex Infoways is a technology-driven firm specializing in scalable enterprise solutions and custom digital products.
                        </p>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            With a team of expert developers and architects, we build high-performance systems that empower businesses across India and global markets. We focus on clean architecture, secure deployment, and long-term tech growth.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center space-x-3 p-4 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-blue-200 transition-colors"
                                >
                                    <div className="bg-white p-1 rounded-full shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-semibold text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visuals */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative z-10 grid gap-6"
                        >
                            {/* Geometric Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                            </div>

                            {cards.map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className={`${card.bg} backdrop-blur-sm p-10 rounded-[3rem] border border-white shadow-xl shadow-blue-900/5 group`}
                                >
                                    <div className="w-14 h-14 bg-white rounded-[1.5rem] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-black mb-3">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{card.text}</p>
                                </motion.div>
                            ))}

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-20 -left-30 md:-left-20 bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-2xl transition-transform hover:scale-105"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                                        <Rocket className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black">10+</div>
                                        <div className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Years Experience</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Abstract backdrop shape */}
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[200px] w-[%] h-[120%] bg-blue-600/5 rounded-[5rem] rotate-12 -z-20"></div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
