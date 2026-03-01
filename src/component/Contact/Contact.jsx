import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, useInView } from "framer-motion";


const Contact = () => {
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mpqqqbdr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Thanks! Your message has been sent.");
        e.target.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Oops! There was a problem sending your message.");
      }
    } catch {
      setStatus("Oops! There was a problem sending your message.");
    }
  };

    
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Contact <span className="text-purple-500">Me</span>
        </h2>
        <hr className="w-20 h-1 mx-auto bg-purple-500 border-0 mb-4" />
        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          Get in touch to discuss your project or just say hello.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8 overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-500 text-3xl" />
            <p className="text-xl">
              <span>Location</span>
              <br /> Peshawar, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-500 text-3xl" />
            <p className="text-xl">
              <span>Email</span>
              <br /> razayousaf209@mail.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-purple-500 text-3xl" />
            <p className="text-xl">
              <span>Phone</span>
              <br /> 03313224247
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 resize-none"
            />

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-medium transition-colors"
            >
              Send Message
            </button>

            {status && (
              <p
                className={`mt-2 text-center ${
                  status.includes("Thanks") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
