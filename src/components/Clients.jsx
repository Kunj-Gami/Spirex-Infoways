import { motion } from 'framer-motion';
import Section from './ui/Section';

const Clients = () => {
    // Array of client logos
    const clients = [
        { name: "Hexa Core", logo: "/src/assets/client-1.png" },
        { name: "Synapse Flow", logo: "/src/assets/client-2.png" },
        { name: "Apex Capital", logo: "/src/assets/client-3.png" },
        { name: "Neuraflow AI", logo: "/src/assets/client-4.png" },
        { name: "Hexa Core", logo: "/src/assets/client-1.png" }, // Repeat for length if needed
        { name: "Synapse Flow", logo: "/src/assets/client-2.png" }
    ];

    // Duplicate clients for seamless loop
    const duplicatedClients = [...clients, ...clients];

    return (
        <Section id="clients" className="bg-white py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Network</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Trusted by Industry Leaders</h2>
                </div>

                <div className="relative group">
                    {/* Faded edges effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-16 items-center"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                            style={{ width: 'fit-content' }}
                        >
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-48 h-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Clients;
