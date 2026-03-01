import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative pt-40 pb-20 bg-linear-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-linear-to-r from-purple-500 to-pink-500 p-1 shadow-2xl">
            <img
              src="images/img1.jpeg"
              alt="Kamran Majeed"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
            🚀 MERN Developer
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Aoa 👋 <br />
            I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              Kamran Majeed
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Full Stack Developer specializing in{" "}
            <span className="text-purple-400 font-semibold">
              MERN Stack
            </span>{" "}
            (React • Node.js • MongoDB • JavaScript • Python).  
            I build scalable, high-performance web applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="/Kamran_Majeed_Web_CV.pdf"
              download ="Kamran_Majeed_Web_CV.pdf"
              className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-purple-500 text-white hover:bg-purple-600 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/kamran-majeed-8b4bb9318/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/KamranTheDev"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/share/1AxHMyYTbr/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/kamranmajeed861/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;