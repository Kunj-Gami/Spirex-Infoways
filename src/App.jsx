import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Founder from './components/Founder';
import Team from './components/Team';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StaggeredMenu from './components/StaggeredMenu';
import WhatsAppButton from './components/ui/WhatsAppButton';
import About from './components/About';
import ClickSpark from './components/ClickSpark';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Clients', ariaLabel: 'Our Clients', link: '#clients' },
    { label: 'Reviews', ariaLabel: 'Reviews', link: '#reviews' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'Instagram', link: 'https://instagram.com' }
];

function App() {
    return (
        <ClickSpark
            sparkColor='#3b82f6'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div className="min-h-screen bg-white">
                <StaggeredMenu
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    menuButtonColor="#333"
                    openMenuButtonColor="#000"
                    changeMenuColorOnOpen={true}
                    colors={['#e0f2fe', '#bae6fd']} // Light blue theme
                    accentColor="#0284c7"
                    logoUrl=""
                    isFixed={true}
                />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Clients />
                    <Reviews />
                    <Highlights />
                    <Contact />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </ClickSpark>
    );
}

export default App;
