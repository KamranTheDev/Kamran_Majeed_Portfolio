import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const moveIndicator = (el) => {
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setIndicator({ left: offsetLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { label: "Home", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] 
      backdrop-blur-lg bg-white/5 border border-purple-500/30 
      rounded-2xl shadow-lg z-50">

        <div
          ref={navRef}
          className="px-6 py-4 flex justify-between items-center relative"
        >
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Kamran Majeed
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 text-lg relative">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                className="text-gray-300 hover:text-white transition duration-300 relative"
              >
                {link.label}
              </a>
            ))}

            {/* Animated Sliding Indicator */}
            <motion.span
              className="absolute bottom-0 h-0.5 bg-linear-to-r from-purple-400 to-pink-500"
              animate={{
                left: indicator.left,
                width: indicator.width,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-400 hover:text-white transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 
            w-[90%] backdrop-blur-lg bg-black/70 
            border border-purple-500/30 rounded-2xl 
            shadow-lg px-6 py-6 space-y-4 z-40 text-center"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-purple-400 text-lg transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;