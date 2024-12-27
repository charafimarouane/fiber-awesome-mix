"use client";

import dynamic from "next/dynamic";
import { Modak } from "@next/font/google";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const modak = Modak({
  subsets: ["latin"], // Adjust based on the font
  weight: "400", // Choose specific weights, e.g., 400 for normal
});

const Hero = () => {
  return (
    <div className=" bg-hero bg-cover">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-100px)" }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: { duration: 0.4, ease: "easeIn" },
          }}
          className="text-center mt-[72px]"
        >
          <h1 className={`${modak.className} text-9xl text-primary`}>SAFIENIA</h1>
          <h2 className={`${modak.className} text-8xl text-white`}>Agency</h2>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-5 gap-6 text-white mt-16">
          {/* Left Column */}
          <div className="col-span-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, transform: "translateX(-100px)" }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="bg-gradient-to-l from-white/10 to-white/20 backdrop-blur-md rounded-md px-8 py-8 w-[250px] ml-12 shadow-lg border border-white/20"
            >
              <h1 className="text-5xl font-semibold">12 </h1>
              <p className="text-white/60">Years Experience</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, transform: "translateX(-100px)" }}
                animate={{
                    opacity: 1,
                    transform: "translateX(0px)",
                    transition: { duration: 0.4, ease: "easeIn" },
                }}
                className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md rounded-md px-8 py-8 w-[250px] ml-12 shadow-lg border border-white/20"
                >
                <h1 className="text-5xl font-semibold">12 </h1>
                <p className="text-white/60">Years Experience</p>
            </motion.div>
          </div>

          {/* Middle Column - Scene */}
          <div className="col-span-3 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="w-full h-[500px]"
            >
              <Scene />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="col-span-1 flex justify-end mt-12">
            <motion.div
              initial={{ opacity: 0, transform: "translateX(100px)" }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="w-2/3"
            >
              <p className="text-white/80">
                est simplement du faux texte employé dans la composition et la
                mise en page avant impression. Le Lorem Ipsum est 
              </p>
              <Button className="text-lg mt-8 rounded-full w-full bg-primary py-6 px-12 font-medium">
                Work with us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
