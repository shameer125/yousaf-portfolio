import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      {/* Footer top content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Syed Yousaf</h3>
          <p className="text-gray-400 text-xl">
            Passionate web developer creating modern and responsive web
            applications.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/syed-yousaf-b468a3391"
              className="hover:text-purple-400"
            >
              <FaLinkedin size={35} />
            </a>
            <a href="https://x.com/jaafri_s" className="hover:text-purple-400">
              <FaTwitter size={35} />
            </a>
            <a
              href="https://www.instagram.com/itx__yousaf3?igsh=anQ4bnBueXI4d3dw"
              className="hover:text-purple-400"
            >
              <FaInstagram size={35} />
            </a>
            <a
              href="https://www.facebook.com/share/1AhZVsKbv7/"
              className="hover:text-purple-400"
            >
              <FaFacebook size={35} />
            </a>
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors text-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors text-xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors text-xl"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-purple-400 transition-colors text-xl"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors text-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Services */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Services</h3>
          <ul className="space-y-2 text-gray-400 text-xl">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom line */}
      <hr className="border-gray-700 mb-4" />

      <div className="text-center text-gray-400 text-xl">
        &copy; {new Date().getFullYear()} Syed Yousaf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
