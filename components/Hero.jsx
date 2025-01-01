"use client";

import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { Kanit, Poppins } from "@next/font/google";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const kanit = Kanit({
  subsets: ["latin"], // Adjust based on the font
  weight: "700", // Choose specific weights, e.g., 400 for normal
});

const Hero = () => {
  return (
    <motion.div 
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1,  }}
        transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-text_color h-[70vh] rounded-2xl flex items-center justify-center px-12">
      <div className="">
        <div className="grid grid-cols-2 gap-6 text-white ">
        <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className={`${kanit.className}}  text-8xl text-primary font-bold`}>
              Steering your path to <span className="text-white">success<br /> in digital world</span>
            </h1>
            <motion.p
              className="text-xl text-white/60 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              We are a digital agency that specializes in creating digital products, services and experiences. We help businesses to grow and succeed in the digital world.
            </motion.p>
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button className="text-lg font-semibold mt-8 rounded-lg w-1/2  text-white border-2 border-primary bg-primary  py-6 px-12">
                Work with us
              </Button>
              <Button className="text-lg font-semibold mt-8 rounded-lg w-1/2 bg-text_color text-primary hover:text-white border-primary border-2 py-6 px-12 ">
                Work with us
              </Button>
            </motion.div>
           
          </motion.div>
          
         <div className="">
                svh
         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
