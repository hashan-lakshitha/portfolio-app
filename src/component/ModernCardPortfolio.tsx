import React, { useState, useEffect } from 'react';
// @ts-ignore
import {
    Github,
    Gitlab,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Code,
    Briefcase,
    GraduationCap,
    User,
    ChevronUp,
    HomeIcon
} from 'lucide-react';

const ModernCardPortfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);

            const sections = ['about', 'skills', 'experience', 'education'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // @ts-ignore
    const NavItem = ({ icon, text, section }) => (
        <button
            onClick={() => scrollToSection(section)}
            className={`flex items-center p-2 rounded-full transition-all duration-300 ${
                activeSection === section ? 'bg-green-500 text-white' : 'bg-white text-green-700 hover:bg-green-200'
            }`}
        >
            {icon}
            <span className="ml-2 text-sm font-medium">{text}</span>
        </button>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <section id="home">
                <header className="bg-amber-400 text-white py-40 px-4 h-screen">

                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-2">Hashan Walauwatta</h1>
                        <p className="text-xl">Full Stack Developer</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href="https://gitlab.com/r123tharaka74" target="_blank" rel="noopener noreferrer"
                               className="text-white hover:text-purple-200">
                                <Gitlab size={24}/>
                            </a>
                            <a href="https://github.com/hashan-lakshitha" target="_blank" rel="noopener noreferrer"
                               className="text-white hover:text-purple-200">
                                <Github size={24}/>
                            </a>
                            <a href="http://www.linkedin.com/in/hashan-walauwatta-a45b332a1" target="_blank"
                               rel="noopener noreferrer" className="text-white hover:text-purple-200">
                                <Linkedin size={24}/>
                            </a>
                        </div>
                    </div>

        </header>
</section>
{/* Floating Navigation */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white rounded-full shadow-lg p-2 flex space-x-2">
                    <NavItem icon={<HomeIcon size={18} />} text="Home" section="home" />
                    <NavItem icon={<User size={18} />} text="About" section="about" />
                    <NavItem icon={<Code size={18} />} text="Skills" section="skills" />
                    <NavItem icon={<Briefcase size={18} />} text="Experience" section="experience" />
                    <NavItem icon={<GraduationCap size={18} />} text="Education" section="education" />
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <section id="about" className="mb-16 mt-16 h-screen">
                    <div className="bg-white h-2/3 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-3xl font-bold mb-4 text-center text-green-700">About Me</h2>
                        <p className="text-gray-700 text-center leading-relaxed">
                            I am a self-employed, self-motivated, and self-taught developer who is passionate about full
                            stack web development. I thrive on figuring out solutions to improve usability and functionality of
                            websites and systems. With a collaborative spirit, I enjoy working with team members to
                            deliver projects efficiently and on time.
                        </p>
                    </div>
                </section>

                <section id="skills" className="mb-16 h-screen">
                    <div className="bg-white h-2/3 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-3xl font-bold mb-4 text-green-700">Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {['Java', 'Spring Boot', 'TypeScript', 'Angular', 'MySQL', 'Firebase', 'MongoDB', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Flutter', 'Node.js'].map((skill) => (
                                <span key={skill} className="bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-105">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="experience" className="mb-16 h-screen">
                    <div className="bg-white h-2/3 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-3xl font-bold mb-4 text-green-700">Work Experience</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-green-700 pl-4">
                                <h3 className="text-xl font-semibold">Software Developer</h3>
                                <p className="text-gray-600">Tomroid Technologies (Pvt) Ltd. | 2021 - 2022</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li>Project: www.akd.lk (Gatsby JS, HTML, TypeScript, JSON, CSS, Tailwind CSS, CSV, AWS, ES, Gitlab)</li>
                                    <li>Project: www.lankaepaper.com (WordPress, AWS, PHP, CSS, HTML)</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-green-700 pl-4">
                                <h3 className="text-xl font-semibold">IT Support Technician</h3>
                                <p className="text-gray-600">PC Solutions (Pvt) Ltd. - Matale | 2018 - 2021</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700">
                                    <li>Technical Support and Repair</li>
                                    <li>Computer Repair Technician</li>
                                    <li>Network Support Specialist</li>
                                    <li>Hardware Specialist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="education" className="mb-16 h-screen">
                    <div className="bg-white h-2/3 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-3xl font-bold mb-4 text-green-700">Education</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-green-700 pl-4">
                                <h3 className="text-xl font-semibold">Bachelor of Software Engineering (Hons)</h3>
                                <p className="text-gray-600">Open University of Sri Lanka | 2023 - Present</p>
                            </div>
                            <div className="border-l-4 border-green-700 pl-4">
                                <h3 className="text-xl font-semibold">Diploma in Software Engineering</h3>
                                <p className="text-gray-600">IJSE Institute Panadura SriLanka | 2021 - 2022</p>
                            </div>
                            <div className="border-l-4 border-green-700 pl-4">
                                <h3 className="text-xl font-semibold">Diploma In Software Engineering</h3>
                                <p className="text-gray-600">Developerstack Academy SriLanka | 2023 - 2024</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Contact Information Footer */}
            <footer className="bg-amber-400 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold mb-2">Contact Me</h3>
                            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +94 772 760 674</p>
                            <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> r123tharaka74@gmail.com</p>
                            <p className="flex items-center"><MapPin size={18} className="mr-2" /> 17/1 Wademada, Ovilikanda, Matale</p>
                        </div>
                        <div className="w-full md:w-1/2 text-right">
                            <p>&copy; 2024 Hashan Walauwatta. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-green-700"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </div>
    );
};

export default ModernCardPortfolio;