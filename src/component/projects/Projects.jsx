import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import img_11 from "../../assets/img1.jpeg";
import img_22 from "../../assets/img2.jpeg";
import img_33 from "../../assets/img3.jpeg";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: img_11,
    github: "https://github.com/yourusername/project1",
    live: "https://yourproject1.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    image: img_22,
    github: "https://github.com/yourusername/project2",
    live: "https://yourproject2.com",
  },
  {
    id: 3,
    title: "Dashboard UI",
    image: img_33,
    github: "https://github.com/yourusername/project3",
    live: "https://yourproject3.com",
  },
];

// Motion variants for project cards
const cardVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }, // stagger each card
  },
};

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 text-white py-20 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <hr className="w-20 h-1 mx-auto bg-purple-500 border-0 mb-4" />
        <p className="text-gray-300 max-w-2xl text-xl mx-auto">
          Here are some of the projects I have worked on, showcasing my skills
          in web development, design, and problem solving.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group border border-gray-500 rounded-xl overflow-hidden shadow-lg"
            variants={cardVariant}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-bold">{project.title}</h3>

              <div className="flex gap-4">
                <a
                  // href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  // href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
