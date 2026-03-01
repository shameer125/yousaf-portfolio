import React from "react";
import { FaPaintBrush, FaMicrosoft } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Microsoft Office",
    desc: "Proficient in Word, Excel, PowerPoint & Outlook for professional documents and presentations.",
    icon: <FaMicrosoft size={40} />,
  },
  {
    id: 2,
    title: "Graphic Design",
    desc: "Create logos, posters, and social media graphics with Adobe Photoshop, Illustrator, and Canva.",
    icon: <FaPaintBrush size={40} />,
  },
  {
    id: 3,
    title: "MySQL",
    desc: "Manage databases, write SQL queries, and optimize relational databases for web applications.",
    icon: <SiMysql size={40} />,
  },
];

// Parent container variant (stagger cards)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // stagger each card
    },
  },
};

// Card variant (slide from top)
const cardVariant = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Inner elements variant (icon, title, desc)
const innerVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section id="services" className="bg-gray-800 text-white py-20 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-purple-500">Services</span>
        </h2>
        <hr className="w-20 h-1 mx-auto bg-purple-500 border-0 mb-4" />
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          These are the services I offer to help you build strong and modern
          digital products.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group bg-gray-900 rounded-xl p-8 h-[320px] text-center shadow-lg hover:scale-105 hover:bg-gray-700"
            variants={cardVariant}
          >
            <motion.div className="space-y-4" variants={containerVariant}>
              {/* Icon */}
              <motion.div
                className="text-purple-500 flex justify-center"
                variants={innerVariant}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <motion.h3 className="text-2xl font-bold" variants={innerVariant}>
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-xl"
                variants={innerVariant}
              >
                {service.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
