import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-orange-200 via-white to-orange-50 h-96 flex items-center justify-center overflow-hidden">
                {/* Decorative SVG / Mandala */}
                <svg
                    className="absolute top-0 left-0 w-64 h-64 opacity-20 animate-spin-slow"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="orange"
                >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                </svg>

                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 z-10 drop-shadow-lg">
                    Contact Us
                </h1>
            </section>

            {/* Tricolor Separator / Accents */}
            <div className="flex justify-center my-8 relative">
                <div className="h-1 w-32 bg-[#FF9933] rounded-l animate-grow-left"></div>
                <div className="h-1 w-32 bg-white animate-grow-left"></div>
                <div className="h-1 w-32 bg-[#138808] rounded-r animate-grow-left"></div>
            </div>

            {/* Animated Background Decorations */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                        <div
                            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                            data-aos="fade-up"
                        >
                            <h3 className="text-xl font-semibold mb-2">Address</h3>
                            <p>
                                <span>Bhartiya Sanskritik Sangh, Brno, z.s
                                    Labská 252/19, Starý Lískovec (Brno-Starý Lískovec), 625 00 Brno
                                </span>
                            </p>
                        </div>
                        <div
                            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p><span>pr@bssb.cz</span></p>
                        </div>
                        <div
                            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                            <p><span>+420 775 549 192</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 container mx-auto px-4">
                <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    data-aos="fade-up"
                >
                    <iframe
                        className="w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.2341119698744!2d16.5600885156743!3d49.17167381285134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471290b9c1f538d1%3A0x0!2zNDnCsDEwJzEzLjgiTiAxNsKwMzMnMzkuOSJF!5e0!3m2!1sen!2scz!4v1695782978546!5m2!1sen!2scz"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-4 max-w-2xl" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                            rows={5}
                        ></textarea>
                        <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Decorative Elements (floating) */}
            <div className="absolute top-1/3 left-5 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        </div>
    );
};

export default ContactPage;
