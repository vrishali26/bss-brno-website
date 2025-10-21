import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const committee = [{ name: 'Makarand Sakhare', role: 'President' },
    { name: 'Amol Deshmukh', role: 'Vice President' },
    { name: 'Amol Kshirsagar', role: 'Legal' },
    { name: 'Devesh Tayal', role: 'Public Relations Office' },
    { name: 'Aniket Ghodke', role: 'Secretary' },
    { name: 'Chirag Kheradiya', role: 'Social Media Manager' },
    { name: 'Sitaram Prabhukhot', role: 'Treasurer' }]
    return (
        <div className="w-full">

            {/* Animated Background Decorations */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>

            <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Bhartiya Sanskritik Sangh, Brno</h2>

                    {/* Tricolor Separator / Accents */}
                    <div className="flex justify-center my-8 relative">
                        <div className="h-1 w-32 bg-[#FF9933] rounded-l animate-grow-left"></div>
                        <div className="h-1 w-32 bg-white animate-grow-left"></div>
                        <div className="h-1 w-32 bg-[#138808] rounded-r animate-grow-left"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="col-span-2 bg-white p-6 rounded-xl shadow">
                            <p className="pt-2">Bharatiya Sanskritik Sangh Brno (BSSB) is a community-led cultural association of Indian expatriates and friends of India in Brno, Czech Republic. Our mission is to celebrate, promote, and preserve India's rich cultural heritage through festivals, workshops, language and music classes, and community service initiatives.</p>
                            <p className="pt-2">BSSB is a non-profit, non-political organization that serves as a bridge between the Indian and Czech communities in and around Brno. We bring together Indian citizens, people of Indian origin, and well-wishers of India to foster cultural exchange, education, and collective progress.</p>
                            <p className="pt-2">Through our activities, we aim to:</p>
                            <ul className="pt-2 list-disc pl-5">
                                <li>Celebrate Indian traditions and festivals in Brno.</li>
                                <li>Provide opportunities for learning languages, music, and arts.</li>
                                <li>Encourage cultural dialogue between Indian and Czech communities.</li>
                                <li>Support educational, charitable, and humanitarian initiatives.</li>
                                <li>Create a welcoming platform for social connection and community welfare.</li>
                            </ul>
                            <p className="pt-2">BSSB was born from a simple idea: a casual gathering of a few individuals to celebrate a cultural event in Brno. What began as a small social get-together soon blossomed into a vibrant platform that continues to unite people and celebrate Indian culture on a broader scale.</p>
                            <p className="pt-2">At BSSB, we aspire not only to serve our members but also to support and engage anyone who shares a love for Indian culture, ensuring that our traditions thrive while harmoniously embracing Czech values and heritage.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <div data-aos="fade-up">
                                <h4 className="font-semibold mb-2">Quick Facts</h4>
                                <ul className="text-slate-700 text-sm space-y-1">
                                    <li>Founded: 2023</li>
                                    <li>Members: 150+</li>
                                    <li>Annual events: 3+</li>
                                </ul>
                            </div>
                            <div data-aos="fade-up">
                                <h4 className="font-semibold mb-2 mt-8">Executive Committee 2025</h4>
                                <ul className="text-slate-700 text-sm space-y-1">
                                    {committee.map((c) => (
                                        <li key={c.name}>{c.name}, <span className="text-slate-500">{c.role}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Decorative Elements (floating) */}
            <div className="absolute top-1/3 left-5 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        </div>
    )
}

export default AboutPage;