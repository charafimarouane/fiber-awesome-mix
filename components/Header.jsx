"use client";

import Link from 'next/link';
import { Modak } from "@next/font/google";
import Nav from './Nav';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

const modak = Modak({
  subsets: ["latin"], // Adjust based on the font
  weight: "400", // Choose specific weights, e.g., 400 for normal
});

const Header = () => {
  return (
    <div className='container mx-auto'>
      <motion.header
        className='bg-text_color rounded-2xl px-12 py-6 text-white mt-4 mb-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex items-center justify-between'>
          {/* logo */}
          <Link href='/'>
            <motion.h1
              className={`font-bold text-4xl text-white`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Safeinia<span className='text-primary'> .</span>
            </motion.h1>
          </Link>

          {/* Navigation */}
          <motion.div
            className='hidden xl:flex items-center gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Nav />
          </motion.div>

          {/* mobile nav */}
          <motion.div
            className='xl:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MobileNav />
          </motion.div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;