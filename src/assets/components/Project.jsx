import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  // =========================
  // MERN STACK PROJECTS
  // =========================
  {
    id: 1,
    title: "Tourism Platform (FYP)",
    image: "images/Proj1.jpg",
    description:
      "Final Year Project – A full-featured tourism platform connecting travelers with local guides, tours, and services. Users can browse destinations, book tours, and interact with local guides.",
    tech: "MERN Stack • Tailwind CSS • MongoDB • REST APIs • Authentication",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "images/Proj2.png",
    description:
      "A dynamic e-commerce web application with product listings, shopping cart, user authentication, and backend integration for order management.",
    tech: "MERN Stack • Tailwind CSS • React Hooks • MongoDB • Express APIs",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
  {
    id: 3,
    title: "Quick Chat",
    image: "images/proj3.png",
    description:
      "A real-time chat application allowing users to send messages instantly. Built with Socket.IO for live messaging and fully responsive design.",
    tech: "MERN Stack • Tailwind CSS • Real-Time Chat • MongoDB • Express APIs",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },

  // =========================
  // REACT + TAILWIND PROJECTS
  // =========================
  {
    id: 4,
    title: "Sourcify Chemicals Website",
    image: "images/proj4.png",
    description:
      "A responsive company website showcasing products and services with modern UI design, built using React and Tailwind CSS.",
    tech: "React.js • Tailwind CSS • Responsive Layout • Component-Based",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
  {
    id: 5,
    title: "Real Estate Website",
    image: "images/proj5.png",
    description:
      "A property listing platform with clean UI, reusable components, and smooth interactions for browsing and filtering real estate properties.",
    tech: "React.js • Tailwind CSS • Reusable Components • Responsive Design",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
  {
    id: 6,
    title: "Todo List Application",
    image: "images/proj7.png",
    description:
      "A task management app that helps users efficiently organize daily tasks with add, edit, delete, and filter functionalities.",
    tech: "React.js • Tailwind CSS • State Management • Responsive UI",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },

  // =========================
  // HTML • CSS • JAVASCRIPT
  // =========================
  {
    id: 7,
    title: "Currency Converter",
    image: "images/proj6.png",
    description:
      "A real-time currency converter using JavaScript and API integration to provide accurate exchange rates and conversions.",
    tech: "HTML • CSS • JavaScript • API Integration • Responsive Design",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
  {
    id: 8,
    title: "Clock Website",
    image: "images/proj8.png",
    description:
      "A digital clock displaying the current time and allowing users to set alarms, built with pure HTML, CSS, and JavaScript.",
    tech: "HTML • CSS • JavaScript • DOM Manipulation • Responsive Layout",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
  {
    id: 9,
    title: "Tic Tac Toe Game",
    image: "images/proj9.png",
    description:
      "A classic Tic Tac Toe game developed with JavaScript, allowing two players to play interactively with win/draw detection.",
    tech: "HTML • CSS • JavaScript • Game Logic • Interactive UI",
    github: "https://github.com/KamranTheDev",
    linkedin: "https://www.linkedin.com/in/kamran-majeed-8b4bb9318/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" scroll-mt-20 bg-back">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-15 
          bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                flex flex-col lg:flex-row
                rounded-3xl shadow-2xl
                overflow-hidden
                transform transition-transform duration-500
                hover:scale-105
                w-full lg:h-72
              "
            >
              {/* Image Box */}
              <div className="lg:w-1/2 p-4 flex items-center justify-center bg-white border-4 border-purple-500 rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Description Box */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center gap-4 bg-black text-white rounded-r-3xl">
                <h3 className="text-2xl font-bold text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <p className="text-gray-400 text-sm">{project.tech}</p>

                <div className="flex gap-4 mt-3 text-purple-400 text-2xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;