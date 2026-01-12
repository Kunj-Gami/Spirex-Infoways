import React from 'react';
import Section from './ui/Section';

const Team = () => {
    const team = [
        { name: "Team Member 1", role: "Lead Developer", skill: "Full Stack" },
        { name: "Team Member 2", role: "UX/UI Designer", skill: "Product Design" },
        { name: "Team Member 3", role: "Project Manager", skill: "Agile" },
        { name: "Team Member 4", role: "Mobile Developer", skill: "Flutter/React Native" },
    ];

    return (
        <Section id="team" className="bg-gray-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Experts</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet The Team</h2>
                <p className="text-gray-600 mt-4">
                    A group of passionate individuals working together to deliver excellence.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                        <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400">
                            <span>Photo (500x500)</span>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {member.skill}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Team;
