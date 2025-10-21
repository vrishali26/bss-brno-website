import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import AwardBanner from '../components/AwardBanner';

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const tiles = [
        { to: '/about', title: 'About Us', desc: 'Who we are and our mission' },
        { to: '/events', title: 'Upcoming Events', desc: 'Cultural events, shows, workshops' },
        { to: '/gallery', title: 'Gallery', desc: 'Photos & videos from events' },
        { to: '/contact', title: 'Contact', desc: 'Get in touch' },
    ]

    return (
        <div className="w-full">
            <Hero />

            <section className="mt-8 px-4">
                <AwardBanner
                    awardName="ICFF Ratna Award (most active Indian association)"
                    organization="Bhartiya Sanskritik Sangh Brno"
                    year={2025}
                />
            </section>

            <section className="mt-8 py-16 bg-gradient-to-b from-orange-50 to-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Explore</h2>

                    {/* Tricolor Separator / Accents */}
                    <div className="flex justify-center my-8 relative">
                        <div className="h-1 w-32 bg-[#FF9933] rounded-l animate-grow-left"></div>
                        <div className="h-1 w-32 bg-white animate-grow-left"></div>
                        <div className="h-1 w-32 bg-[#138808] rounded-r animate-grow-left"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6" data-aos="fade-up">
                        {tiles.map((t) => (
                            <Link key={t.to} to={t.to} className="block rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition p-6 bg-white">
                                <div className="text-sm text-orange-600 font-semibold mb-2">{t.title}</div>
                                <div className="text-slate-700">{t.desc}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up">
                    <div className="col-span-2 bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-3">Featured: Next Big Event</h3>
                        <p className="text-slate-700">Date: Oct 24, 2025, 5:00 PM onwards — Diwali celebrations at Semilasso! <br /> <br />Brno, get ready to sparkle! Join us for a night of lights, laughter, and unforgettable vibes.
                            <br /> Free Entry | All Are Welcome
                        </p>
                        <div className="mt-4">
                            <Link to="/events" className="inline-block px-4 py-2 bg-orange-600 text-white rounded-md">See Events</Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

function Hero() {
    return (
        <section className="bg-[url('./assets/hero.png')] bg-cover bg-center overflow-hidden shadow-inner">
            <div className="bg-black/30 px-6 py-16">
                <div className="container mx-auto text-white">
                    <h1 className="text-5xl font-bold animate-fade-in-down">Bhartiya Sanskritik Sangh</h1>
                    <p className="mt-3 max-w-2xl">A community organisation dedicated to preserving, teaching and celebrating our rich cultural heritage through music, dance, language and festivals.</p>
                    <div className="mt-6" data-aos="fade-up">
                        <Link to="/events" className="inline-block px-5 py-3 bg-white text-orange-600 rounded-md font-semibold">View Events</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;