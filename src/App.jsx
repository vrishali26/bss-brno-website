import React, { Suspense, lazy  } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import Footer from './common/Footer';
import Header from './common/Header';
import NotFound from './pages/NotFound';

// Lazy pages (keeps App file tidy — small demo pages included below too)
const Home = lazy(() => Promise.resolve({ default: HomePage }))
const About = lazy(() => Promise.resolve({ default: AboutPage }))
const Events = lazy(() => Promise.resolve({ default: EventsPage }))
const Gallery = lazy(() => Promise.resolve({ default: GalleryPage }))
const Contact = lazy(() => Promise.resolve({ default: ContactPage }))

export default function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        <Header />

        <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-8">
          <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

