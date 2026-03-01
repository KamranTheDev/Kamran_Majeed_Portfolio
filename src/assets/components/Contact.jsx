import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4f502mp", // your service ID
        "template_jaovh6h", // your template ID
        form.current,
        "KESsucPI9CDCk_bmI" // your public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 scroll-mt-20 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-16 right-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 
          bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white/5 backdrop-blur-lg border border-purple-500/30
            p-10 rounded-3xl shadow-lg
            flex flex-col gap-6
            hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]
            transition-all duration-500
          "
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="
              w-full px-4 py-3
              bg-black/40
              border border-purple-500/50
              rounded-xl
              text-white
              placeholder-purple-300
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="
              w-full px-4 py-3
              bg-black/40
              border border-purple-500/50
              rounded-xl
              text-white
              placeholder-purple-300
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="
              w-full px-4 py-3
              bg-black/40
              border border-purple-500/50
              rounded-xl
              text-white
              placeholder-purple-300
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(168,85,247,0.8)",
            }}
            className="
              bg-purple-600
              text-white
              px-8 py-3
              rounded-xl
              font-medium
              hover:bg-purple-700
              transition-all duration-300
            "
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-white mb-4">
            &copy; 2025 Kamran Majeed. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 text-3xl text-white">
            <a
              href="https://www.linkedin.com/in/kamran-majeed-8b4bb9318/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/KamranTheDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/share/1AxHMyYTbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/kamranmajeed861/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;