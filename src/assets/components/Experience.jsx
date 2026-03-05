import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-17 bg-linear-to-b from-black via-gray-900 to-black scroll-mt-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 
          bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Experience Cards */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <div className="backdrop-blur-lg bg-white/5 border border-purple-500/20 
            rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                MERN Stack Developer
              </h3>
              <p className="text-gray-300">
                2+ years of experience building scalable full-stack applications 
                using React, Node.js, Express, and MongoDB.
              </p>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-lg bg-white/5 border border-purple-500/20 
            rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition duration-300">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                AI & Prompt Engineering
              </h3>
              <p className="text-gray-300">
                6 months of hands-on experience in Prompt Engineering and Agentic AI,
                building intelligent automation and AI-powered applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur-lg bg-white/5 border border-purple-500/20 
            rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Education
              </h3>
              <p className="text-gray-300">
                BS Computer Science from Punjab University (CGPA: 3.11)
              </p>
            </div>
          </motion.div>

          {/* Right Side - Profile Image + Stats */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full 
            bg-linear-to-r from-purple-500 to-pink-500 p-1 shadow-2xl mb-8">
              <img
                src="images/img2.jpeg"
                alt="Experience"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-purple-400">2+</h4>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-pink-400">6M</h4>
                <p className="text-gray-400 text-sm">AI Experience</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;