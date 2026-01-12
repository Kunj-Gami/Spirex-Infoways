import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Rocket, Smile, Star, Globe, TrendingUp, Users, Award, MapPin } from 'lucide-react';

const Counter = ({ value, label, icon: Icon, color }) => {
    // Parse numeric part for animation
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    // Spring animation for the number
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 20 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    // Local state for hydration-safe display
    const [currentDisplay, setCurrentDisplay] = useState(0);

    useEffect(() => {
        const unsubscribe = displayValue.on("change", (latest) => {
            setCurrentDisplay(latest);
        });
        return () => unsubscribe();
    }, [displayValue]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => spring.set(numericValue)}
            className="relative group"
        >
            <div className="absolute inset-0 bg-blue-50 rounded-[2rem] transform rotate-3 scale-95 group-hover:rotate-6 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
            <div className="relative bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl ${color} bg-opacity-10 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                        {currentDisplay}
                    </span>
                    <span className="text-3xl font-bold text-blue-600">{suffix}</span>
                </div>

                <p className="text-slate-500 font-medium text-lg uppercase tracking-wider">{label}</p>
            </div>
        </motion.div>
    );
};

const Highlights = () => {
    const stats = [
        {
            icon: Rocket,
            value: "150+",
            label: "Projects Delivered",
            color: "bg-blue-500"
        },
        {
            icon: Users,
            value: "100+",
            label: "Happy Clients",
            color: "bg-emerald-500"
        },
        {
            icon: Star,
            value: "99%",
            label: "Client Retention",
            color: "bg-yellow-500"
        },
        {
            icon: Globe,
            value: "12+",
            label: "Countries Served",
            color: "bg-indigo-500"
        }
    ];

    return (
        <section className="bg-white py-32 relative overflow-hidden">
            {/* Background elements - Light Theme */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>

            {/* Soft Gradient Blob */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div> */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 cursor-default">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                            Constructing Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span>
                        </h2>
                        <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                            We don't just write code; we build improved digital ecosystems. Our numbers speak for the trust our industry partners place in us.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
