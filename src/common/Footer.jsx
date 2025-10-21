import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


/* ---------- Footer ---------- */
const Footer = () => {
  return (
    <footer className="bg-white border-t w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col text-sm text-slate-600">
          <span>© {new Date().getFullYear()} Bhartiya Sanskritik Sangh, Brno. All rights reserved.</span>
          <span>Designed & Developed by <span className="font-semibold"><a href="https://vrishali-portfolio.vercel.app/" target="blank">Vrishali Joshi</a></span>.</span>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61551816197970&locale=cs_CZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaFacebook size={30} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bhartiyasanskritiksangh?igsh=dWUzdDB1cDdkMmRm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram size={30} />
          </a>

          {/* Email */}
          <a
            href="mailto:pr@bssb.cz"
            className="text-red-500 hover:scale-110 transition-transform"
          >
            <MdEmail size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;