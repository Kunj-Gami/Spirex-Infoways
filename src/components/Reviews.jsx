import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Section from './ui/Section';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Reviews = () => {
    const controls = useAnimation();

    const reviews = [
        {
            name: "Rikin Patel",
            role: "Director, Fintech Startup (Ahmedabad)",
            text: "Spirex Infoways delivered exactly what they promised. Their ERP solution helped us streamline operations and improve reporting accuracy.",
            rating: 5,
            initial: "R"
        },
        {
            name: "Het Shah",
            role: "Founder, E-Commerce Brand (Surat)",
            text: "Their transparency and technical guidance saved us time and cost. Highly reliable team.",
            rating: 5,
            initial: "H"
        },
        {
            name: "Kiran Dhalani",
            role: "Operations Head, Logistics Firm (Rajkot)",
            text: "The system automated nearly 40% of our manual work. Post-delivery support is excellent.",
            rating: 5,
            initial: "K"
        },
        {
            name: "Nilesh Vora",
            role: "Partner, Manufacturing Unit (Morbi)",
            text: "They understood our factory workflow and delivered a practical solution.",
            rating: 5,
            initial: "N"
        },
        {
            name: "Amit Bhatt",
            role: "CEO, IT Services Firm (Vadodara)",
            text: "Excellent UI, solid backend, and very professional execution.",
            rating: 5,
            initial: "A"
        }
    ];

    // Duplicate reviews for infinite effect
    const sliderData = [...reviews, ...reviews];

    useEffect(() => {
        controls.start({
            x: ['0%', '-50%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 12,
                    ease: "linear"
                }
            }
        });
    }, [controls]);

    return (
        <Section id="reviews" className="py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Heading */}
                <div className="max-w-2xl mb-20">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
                        Trusted by Gujarat’s <span className="text-blue-600">Growing Businesses</span>
                    </h2>
                </div>

                {/* Auto Slider */}
                <motion.div
                    className="flex gap-8"
                    animate={controls}
                    onMouseEnter={() => controls.stop()}
                    onMouseLeave={() =>
                        controls.start({
                            x: ['0%', '-50%'],
                            transition: {
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear"
                                }
                            }
                        })
                    }
                >
                    {sliderData.map((review, index) => (
                        <div
                            key={index}
                            className="min-w-[380px] bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Quote className="w-14 h-14 text-blue-100 mb-6 rotate-180" />

                            <div className="flex gap-1 text-yellow-400 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                “{review.text}”
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl font-bold">
                                    {review.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-sm text-slate-500">{review.role}</p>
                                    <div className="flex items-center gap-1 text-xs text-blue-500 mt-1">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Verified Client
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Reviews;
