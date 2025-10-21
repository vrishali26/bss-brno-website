import React from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

/* ---------- Header / Nav ---------- */
const Header = () => {
    const nav = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/events', label: 'Events' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <header className="bg-white shadow-sm w-full">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="bg-[url('assets/logo.png')] bg-cover bg-center rounded-xl overflow-hidden shadow-inner w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">&nbsp;</div>
                    <div>
                        <div className="text-sm sm:text-lg font-semibold">Bhartiya Sanskritik Sangh, Brno</div>
                        <div className="text-sm text-slate-500">Preserving & Celebrating Culture</div>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-4">
                    {nav.map((n) => (
                        <NavLink key={n.to} to={n.to} label={n.label} />
                    ))}
                </nav>

                <MobileMenu nav={nav} />
            </div>
        </header>
    )
}

function NavLink({ to, label }) {
    const location = useLocation()
    const active = location.pathname === to
    return (
        <Link
            to={to}
            className={`px-3 py-2 rounded-md text-sm font-medium ${active ? 'bg-orange-100 text-orange-700' : 'text-slate-700 hover:bg-slate-100'}`}>
            {label}
        </Link>
    )
}

function MobileMenu({ nav }) {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="md:hidden relative">
            {/* Toggle button */}
            <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md border flex items-center justify-center"
                aria-label="Menu"
            >
                {open ? (
                    // Close (X) icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50 transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                {nav.map((n) => (
                    <Link
                        key={n.to}
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 border-b last:border-b-0 hover:bg-slate-100"
                    >
                        {n.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header;