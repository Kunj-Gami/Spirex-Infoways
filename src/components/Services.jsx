import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Monitor, Smartphone, Database, Users, Briefcase, GraduationCap, ShoppingCart, Cpu, Code2, ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Monitor className="h-6 w-6" />,
            title: "Website Design & Development",
            description: "Custom, responsive, and SEO-friendly websites tailored to your brand identity."
        },
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: "Mobile App Development",
            description: "Native and hybrid mobile applications for premium iOS and Android experiences."
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: "Custom ERP Software",
            description: "Streamline your business operations with robust, tailored ERP solutions."
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "CRM Solutions",
            description: "Manage customer relationships effectively with analytical CRM systems."
        },
        {
            icon: <Briefcase className="h-6 w-6" />,
            title: "HRMS Systems",
            description: "Automate HR processes including attendance, payroll, and recruitment cycles."
        },
        {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "LMS Platforms",
            description: "Interactive learning management systems for institutions and corporate training."
        },
        {
            icon: <ShoppingCart className="h-6 w-6" />,
            title: "E-commerce Development",
            description: "Scalable online stores with secure checkout and advanced inventory management."
        },
        {
            icon: <Cpu className="h-6 w-6" />,
            title: "Automation Tools",
            description: "Smart dashboards and automation tools to boost your operational speed."
        },
        {
            icon: <Code2 className="h-6 w-6" />,
            title: "API Integrations",
            description: "Seamlessly connect third-party platforms to expand your software's power."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <Section id="services" className="bg-gradient-to-b from-slate-50 to-blue-50/30 py-32 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-[#FFFFFF] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] opacity-70 -z-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[100px] opacity-70 -z-10 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="h-px w-8 bg-blue-600"></span>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
                                Expertise & Solutions
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
                        >
                            Innovating Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experiences</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 max-w-xl leading-relaxed"
                        >
                            We combine strategic design with enterprise-grade engineering to deliver products that drive measurable business impact and scale with your growth.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-900/20">
                            <div className="absolute inset-0 w-full h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative flex items-center gap-2">
                                View Full Portfolio
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Border Effect on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-50 rounded-3xl transition-all duration-300 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-blue-600 font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <span className="mr-2">Explore Solution</span>
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>

                            {/* Decorative Background Blob */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Services;
