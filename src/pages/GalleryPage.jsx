import React, { useState, useEffect } from "react";
import { galleryData } from "../data/galleryData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [carouselImages, setCarouselImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const openCarousel = (images, index = 0) => {
        setCarouselImages(images);
        setStartIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="container mx-auto px-4 py-12">

            {/* Animated Background Decorations */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>


            {Object.entries(galleryData)
                .sort((a, b) => b[0] - a[0])
                .map(([year, events], yearIdx) => (
                    <div key={year} className="mb-16">
                        {/* Tricolor Separator / Accents */}
                        <div className="flex justify-center my-8 relative">
                            <div className="h-1 w-32 bg-[#FF9933] rounded-l animate-grow-left"></div>
                            <div className="h-1 w-32 bg-white animate-grow-left"></div>
                            <div className="h-1 w-32 bg-[#138808] rounded-r animate-grow-left"></div>
                            <div className="absolute left-1/2 top-[-18px] transform -translate-x-1/2 bg-white px-4 py-1 shadow-md rounded-full text-gray-800 text-xl font-semibold">
                                {year}
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {events.map((event, idx) => (
                                <div key={idx} className="cursor-pointer" data-aos="fade-up">
                                    <div
                                        className="relative overflow-hidden rounded-xl shadow-lg group"
                                        onClick={() => openCarousel(event.images)}
                                    >
                                        <img
                                            src={event.highlight}
                                            alt={event.event}
                                            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Hover overlay for year */}
                                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <p className="text-white text-lg font-semibold">{event.event} - {year}</p>
                                        </div>
                                    </div>

                                    {/* Styled Event Name */}
                                    <h3 className="mt-2 text-center text-lg font-semibold bg-white bg-opacity-70 px-3 py-1 shadow-md transition-transform duration-300 group-hover:scale-105">
                                        {event.event}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            {/* Carousel Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <button
                        className="absolute top-6 right-6 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                    <div className="w-full max-w-4xl">
                        <Carousel
                            selectedItem={startIndex}
                            showThumbs={false}
                            infiniteLoop
                            useKeyboardArrows
                        >
                            {carouselImages.map((img, idx) => (
                                <div key={idx}>
                                    <img
                                        src={img}
                                        alt={`carousel-${idx}`}
                                        className="object-contain max-h-[80vh] mx-auto"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}

        </div>
    );
};

export default GalleryPage;
