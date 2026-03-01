// import React, { useEffect, useState } from "react";
// import { FaDownload } from "react-icons/fa";
// import { motion } from "framer-motion";
// import my_img from "../../assets/my-pic.jpeg";

// const roles = [
//   "DIT Expert",
//   "Graphic Designer",
//   "Web Developer",
//   "UI / UX Designer",
//   "React Frontend Developer",
// ];

// const fromTop = {
//   hidden: { opacity: 0, y: -60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7 },
//   },
// };

// const imageFromTop = {
//   hidden: { opacity: 0, y: -70, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.8 },
//   },
// };

// /* ================= HERO ================= */

// const Hero = () => {
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [text, setText] = useState("");
//   const [cursor, setCursor] = useState(true);

//   /* Cursor Blink */
//   useEffect(() => {
//     const blink = setInterval(() => {
//       setCursor((prev) => !prev);
//     }, 500);
//     return () => clearInterval(blink);
//   }, []);

//   /* Typing Effect */
//   useEffect(() => {
//     const currentRole = roles[roleIndex];

//     if (charIndex < currentRole.length) {
//       const timeout = setTimeout(() => {
//         setText((prev) => prev + currentRole.charAt(charIndex));
//         setCharIndex((prev) => prev + 1);
//       }, 90);

//       return () => clearTimeout(timeout);
//     }

//     // Pause before next role
//     const pause = setTimeout(() => {
//       setText("");
//       setCharIndex(0);
//       setRoleIndex((prev) => (prev + 1) % roles.length);
//     }, 1200);

//     return () => clearTimeout(pause);
//   }, [charIndex, roleIndex]);

//   return (
//     <section
//       id="home"
//       className="flex flex-col md:flex-row items-center justify-between bg-gray-800 px-6 sm:px-8 text-white"
//       style={{ height: "100vh" }}
//     >
//       {/* LEFT SIDE */}
//       <div className="md:w-1/2 space-y-6 text-center md:text-left">
//         {/* TYPING ROLES */}
//         <div className="space-y-3 pt-10 sm:pt-0">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//             I'm Syed
//           </h1>

//           <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">
//             Yousaf
//           </span>

//           <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
//             <span className="text-white">I'm Into </span>
//             <span className="text-purple-500">
//               {text}
//               <span className="ml-1">{cursor && "|"}</span>
//             </span>
//           </h2>
//         </div>

//         {/* BUTTONS (FROM TOP + REPEAT ON SCROLL) */}
//         <motion.div
//           className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start"
//           variants={fromTop}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.4 }}
//         >
//           <motion.a
//             href="#projects"
//             whileHover={{ scale: 1.05 }}
//             className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-medium text-center"
//           >
//             Explore Projects
//           </motion.a>

//           <motion.a
//             href="/resume.pdf"
//             download
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center justify-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-medium"
//           >
//             <FaDownload className="mr-2" /> Resume
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* RIGHT IMAGE (FROM TOP + REPEAT ON SCROLL) */}
//       <motion.div
//         className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
//         variants={imageFromTop}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.4 }}
//       >
//         <img
//           src={my_img}
//           alt="Inam"
//           className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import my_img from "../../assets/my-pic.jpeg";

const roles = [
  "DIT Expert",
  "Graphic Designer",
  "Web Developer",
  "UI / UX Designer",
  "React Frontend Developer",
];

const fromTop = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const imageFromTop = {
  hidden: { opacity: 0, y: -70, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(true);

  /* Cursor Blink */
  useEffect(() => {
    const blink = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  /* Typing Effect */
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 90);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1200);

    return () => clearTimeout(pause);
  }, [charIndex, roleIndex]);

  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center">
      {/* CENTERED CONTAINER — THIS CONTROLS THE DISTANCE */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* LEFT SIDE */}
        <div className="md:w-[48%] space-y-5 text-center md:text-left">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              I'm Syed
            </h1>

            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">
              Yousaf
            </span>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              <span className="text-white">I'm Into </span>
              <span className="text-purple-500">
                {text}
                <span className="ml-1">{cursor && "|"}</span>
              </span>
            </h2>
          </div>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start"
            variants={fromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-medium text-center"
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-medium"
            >
              <FaDownload className="mr-2" /> Resume
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="md:w-[48%] flex justify-center"
          variants={imageFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src={my_img}
            alt="Yousaf"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;