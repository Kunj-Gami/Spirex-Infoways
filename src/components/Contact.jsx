import React from 'react';
import Section from './ui/Section';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const whatsappMessage = `📩 *New Inquiry Received*%0A
👤 Name: ${name}%0A
📞 Phone: ${phone}%0A
📧 Email: ${email}%0A
💬 Message: ${message}`;

        const whatsappURL = `https://wa.me/919898608606?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <Section id="contact" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Ready To Start Your Project?
                </h2>
                <p className="text-gray-600 mt-4">
                    Contact us for a free consultation.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <MapPin className="h-6 w-6 text-blue-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                            <p className="text-gray-600 text-sm">
                                Rk Iconic B, 602, 150 Feet Ring Rd,<br />
                                near Shital Park,
                                Rajkot, Gujarat, 360006
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <Clock className="h-6 w-6 text-blue-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                            <p className="text-gray-600 text-sm">
    Open Monday to Saturday<br />
    10:00 AM – 7:00 PM
</p>

                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-4">
                            📍 Find us on Google Maps
                        </h3>
                        <div className="w-full h-64 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.914944444499!2d70.76589347553379!3d22.31905629221497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c929a7214489%3A0xea673a1a82d43514!2sSpirex%20Infoways%20%7C%20Mobile%20App%20and%20Website%20Development%20-%20IT%20Company!5e0!3m2!1sen!2sin!4v1768211144395!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Send us a Message
                    </h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                            Send on WhatsApp <Send className="ml-2 h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
