import React from "react";
import first_img from "../../assets/my-pic.jpeg";
import { motion } from "framer-motion";

const About = () => {
  // Image variant
  const imageVariant = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

    
    // Each text element variant (slides from top)
    
  const textVariant = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      {/* Center Heading */}
      <div className="text-center mb-12">
        <h1 className="mb-6 md:mb-3 font-bold text-4xl">
          About <span className="text-purple-500">Me</span>
        </h1>
        <hr className="w-20 h-1 mx-auto bg-purple-500 border-0 mb-4" />
        <h2 className="text-xl sm:text-xl">
          Learn more about my skills, experience and passion
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src={first_img}
            alt="About me"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl grayscale"
          />
        </motion.div>

        {/* Left Side: Staggered Text */}
        <motion.div
          className="md:w-1/2 space-y-5 text-center md:text-left"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* Bold Heading First */}
          <motion.h3
            className="text-3xl font-bold text-purple-500"
            variants={textVariant}
          >
            DIT{" "}
            <span className="text-white">
              (Diploma in Information Technology)
            </span>
          </motion.h3>

          {/* Paragraphs */}
          <motion.p className="text-gray-300 text-xl" variants={textVariant}>
            DIT graduate with strong foundations in computer systems web
            development and modern software tools technologies
          </motion.p>

          <motion.p className="text-gray-300 text-xl" variants={textVariant}>
            Focused on front end development creating clean responsive user
            interfaces using React and Tailwind CSS
          </motion.p>

          <motion.p className="text-gray-300 text-xl" variants={textVariant}>
            Passionate about technology eager to learn new skills and build
            meaningful digital experiences for users.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
