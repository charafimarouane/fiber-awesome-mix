"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardDetails = [
  { name: "Project 1", description: "Description for Project 1", bgImage: "/ga.png" },
  { name: "Project 2", description: "Description for Project 2", bgImage: "/images/project2.jpg" },
  { name: "Project 3", description: "Description for Project 3", bgImage: "/images/project3.jpg" },
  { name: "Project 4", description: "Description for Project 4", bgImage: "/images/project4.jpg" },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredName, setHoveredName] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-white relative">
      <div className="container mx-auto">
        <motion.h1
          className="heading text-4xl font-bold text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}}
        >
          Projects
        </motion.h1>
        <motion.ul
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-3 gap-6 pt-6"
        >
          {cardDetails.map((card, index) => (
            <motion.li
              className={`bg-primary h-[500px] rounded-2xl ${index === 0 || index === 3 ? 'col-span-2' : ''}`}
              style={{ backgroundImage: `url(${card.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'none' }}
              variants={cardVariants}
              key={index}
              onMouseEnter={() => {
                setIsHovering(true);
                setHoveredName(card.name);
              }}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex flex-col justify-between h-full p-4 bg-black bg-opacity-50 rounded-2xl">
                <div className="text-lg font-bold">{card.name}</div>
                <div className="text-sm">{card.description}</div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 text-white text-lg font-semibold px-4">
          {hoveredName}
        </div>
      </div>
    </div>
  );
};

export default Projects;