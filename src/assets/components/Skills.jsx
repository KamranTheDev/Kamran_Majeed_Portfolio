import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiPostman,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si";

import { TbCursorOff, TbRobot } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-15 bg-linear-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-15 
          bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        {/* Web Development */}
        <SkillCategory
          title="Web Development Stack"
          skills={[
            { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
            { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
            { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
            { name: "React", icon: <FaReact />, color: "text-cyan-400" },
            { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
            { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
            { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
            { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
          ]}
        />

        {/* Languages & AI */}
        <SkillCategory
          title="Languages & AI"
          skills={[
            { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
            { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
            { name: "Prompt Engineering", icon: <SiOpenai />, color: "text-green-400" },
            { name: "Agentic AI", icon: <SiOpenai />, color: "text-purple-400" },
          ]}
        />

        {/* Tools */}
        <SkillCategory
          title="Tools I Use"
          skills={[
            { name: "VS Code", icon: <VscCode />, color: "text-blue-400" },
            { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
            { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
            { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
            { name: "Cursor AI", icon: <TbCursorOff />, color: "text-purple-400" },
            { name: "Claude AI", icon: <SiAnthropic />, color: "text-green-400" },
            { name: "Lovable AI", icon: <TbRobot />, color: "text-pink-400" },
          ]}
        />
      </div>
    </section>
  );
};

/* Category Wrapper */
const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-center mb-10 text-purple-400">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
};

/* Premium Skill Card */
const SkillCard = ({ name, icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="
        relative
        flex flex-col items-center justify-center
        rounded-2xl
        backdrop-blur-lg
        bg-white/5
        border border-purple-500/20
        p-6
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
        hover:border-purple-400
      "
    >
      <div className={`text-5xl mb-4 ${color}`}>{icon}</div>
      <p className="text-sm font-medium text-gray-300 text-center">
        {name}
      </p>
    </motion.div>
  );
};

export default Skills;