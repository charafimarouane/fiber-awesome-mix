import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = [
  {
    icon: <FaHtml5 />,
    name: "html 5",
  },
  {
    icon: <FaJs />,
    name: "javascript",
  },
  {
    icon: <SiNextdotjs />,
    name: "next.js",
  },
  {
    icon: <SiTailwindcss />,
    name: "tailwind.css",
  },
  {
    icon: <FaNodeJs />,
    name: "node.js",
  },
  {
    icon: <FaFigma />,
    name: "figma",
  },
];

const Trusted = () => {
  return (
    <div className="trusted">
      <div className="container mx-auto px-12">
        <div className="flex items-center gap-4 py-16">
        <motion.div
            className="w-1/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white/50 text-lg font-semibold text-center">
              Trusted by fast-growing companies around the world
            </h1>
          </motion.div>

          <div className="grid grid-cols-6 gap-6 w-2/3">
            {Tech.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-6xl text-gray-500 hover:text-primary transition-colors duration-300">
                  {tech.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;