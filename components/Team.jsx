"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Social from "./Social";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger child animations
    },
  },
};

const teamData = [
  {
    name: "Marouane Charafi",
    role: "Frontend Dev",
    image: "/images/profile.png",
  },
  {
    name: "John Doe",
    role: "Backend Dev",
    image: "/images/profile2.png",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: "/images/profile3.png",
  },
  {
    name: "David Lee",
    role: "Project Manager",
    image: "/images/profile4.png",
  },
];

const Team = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="text-white">
      <div className="container mx-auto py-12 space-y-4">
        <motion.h1
          className="heading text-4xl font-bold text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}}
        >
          Our Team
        </motion.h1>

        <motion.div
          ref={ref}
          className="grid grid-cols-4 gap-6 pt-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="glass"
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={member.image} // Use image from teamData
                  width={250}
                  height={250}
                  className="rounded-full bg-primary/20 p-4"
                  alt={member.name}
                />
                <h1 className="font-bold text-2xl mt-4">{member.name}</h1>
                <p className="text-white/60 mb-6">{member.role}</p>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-white hover:transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;