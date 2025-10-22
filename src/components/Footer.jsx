import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Title */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-white">My Project</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="/terms" className="hover:text-white transition">Terms</a>
          <a href="/privacy" className="hover:text-white transition">Privacy</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};
