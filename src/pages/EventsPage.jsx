import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Ganpati2025 from "../assets/events/past/Ganpati2025.jpg";
import IndiFest2025 from "../assets/events/past/IndiFest2025.jpg";
import Diwali2024 from "../assets/events/past/Diwali2024.jpg";

const EventsPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const events = [
        {
            id: 1, title: 'Diwali Utsav', date: '2025-10-24', shortDesc: '🪔✨ Diwali Celebrations at Semilasso! ✨🪔...', fullDesc: (
                <>🪔✨ Diwali Celebrations at Semilasso! ✨🪔<br />
                    Brno, get ready to sparkle! Join us for a night of lights, laughter, and unforgettable vibes.<br /><br />
                    📍 Venue: Semilasso, Brno <br />
                    📅 Date: 24 October 2025 <br />
                    🕕 Time: 5:00 PM onwards <br /><br />
                    🎭 Cultural Performances <br />
                    🍛 Indian Snacks & Food <br />
                    🎧 DJ & Dance Floor <br /><br />
                    🎉 Free Entry | All Are Welcome<br />
                    👗 Dress in your festive best and bring your brightest smiles!<br /><br />
                    Let's light up the night together 🌟<br />
                    Tag your squad and spread the joy! <br/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCH-Kv1MBFEgjsIhkEWez2P6si-I6_8Mqp_FAqQ37ZsMTWgA/viewform" target="_blank" className="text-orange-600 underline">Register Here</a>
                    </>)
        },
    ]
    const [expandedId, setExpandedId] = React.useState(null)
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }
    const pastEvents = [
        {
            id: 1,
            title: "Ganpati Festival 2025",
            description: "Celebrating the arrival of Lord Ganesha with devotion and joy.",
            galleryLink: "/bss-brno-website/#/gallery",
            imgSrc: Ganpati2025
        },
        {
            id: 2,
            title: "Indi Fest 2025 - an open air event",
            description: "FIRST-EVER open-air IndiFest right in the heart of the city - Zelný Trh | 24th May | 3 PM onwards!",
            galleryLink: "/bss-brno-website/#/gallery",
            imgSrc: IndiFest2025
        },
        {
            id: 3,
            title: "Diwali & Guru Purab Celebration 2024",
            description: "Festival of lights and honoring the teachings of Guru Nanak Dev Ji.",
            galleryLink: "/bss-brno-website/#/gallery",
            imgSrc: Diwali2024
        },
    ];
    return (
        <div className="w-full">

            {/* Animated Background Decorations */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>

            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>

            {/* Tricolor Separator / Accents */}
            <div className="flex justify-center my-8 relative">
                <div className="h-1 w-32 bg-[#FF9933] rounded-l animate-grow-left"></div>
                <div className="h-1 w-32 bg-white animate-grow-left"></div>
                <div className="h-1 w-32 bg-[#138808] rounded-r animate-grow-left"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" data-aos="fade-up">
                {events.map((e) => (
                    <div key={e.id} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="font-semibold">{e.title}</div>
                                <div className="text-sm text-slate-500">{e.date}</div>
                            </div>
                            <button
                                onClick={() => toggleExpand(e.id)}
                                className="text-orange-600 text-sm underline"
                            >
                                {expandedId === e.id ? 'Hide' : 'Details'}
                            </button>
                        </div>

                        <div className="mt-2 text-sm text-slate-600">
                            {expandedId === e.id ? e.fullDesc : e.shortDesc}
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-16">Past Events</h2>

            {/* Tricolor Separator / Accents */}
            <div className="flex justify-center my-8 relative">
                <div className="h-1 w-32 bg-[#FF9933] rounded-l animate-grow-left"></div>
                <div className="h-1 w-32 bg-white animate-grow-left"></div>
                <div className="h-1 w-32 bg-[#138808] rounded-r animate-grow-left"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
                {pastEvents.map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                        <a href={event.galleryLink}>
                            <div className="overflow-hidden">
                                <img
                                    src={event.imgSrc}
                                    alt={event.title}
                                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-150 group-hover:rotate-2"
                                />
                            </div>
                        </a>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-600 text-sm">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventsPage;