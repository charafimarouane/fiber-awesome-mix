"use client";
import React, { useEffect, useRef } from 'react';
import { Progress } from './ui/progress';
import StarRating from './StarRating';
import { ScrollArea } from './ui/scroll-area';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  { id: 1, name: 'John Doe', review: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries', rating: 5, image: '/images/profile.png' },
  { id: 2, name: 'Jane Smith', review: 'Very useful and well made.', rating: 4, image: '/images/profile2.jpg' },
  { id: 3, name: 'Sam Johnson', review: 'Good value for money.', rating: 4, image: '/images/profile3.jpg' },
];

const reviewVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });



  return (
    <div className="container mx-auto my-[120px]" ref={ref}>
      <motion.div
        className="grid grid-cols-5 gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="col-span-3 rounded-md glass p-8"
          variants={reviewVariants}
        >
          <motion.h2
            className="text-3xl text-white font-semibold"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}}
          >
            Reviews and ratings
          </motion.h2>
          <div className="flex items-center space-x-6 pt-4">
            <motion.h1
              className="text-5xl font-semibold text-white"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}}
            >
              4.7
            </motion.h1>
            <div className="justify-center">
              <StarRating filledStars={4.5} />
              <p className="text-white">Based on 3 reviews</p>
            </div>
          </div>
          <div className="pt-14 mb-4 space-y-2">
            <h3 className="text-white">Reliability</h3>
            <Progress value={70} className="bg-black/70" />
          </div>
          <div className="mb-4 space-y-2">
            <h3 className="text-white">Positive review</h3>
            <Progress value={80} className="bg-black/70" />
          </div>
          <div className="mb-4 space-y-2">
            <h3 className="text-white">Reliability</h3>
            <Progress value={90} className="bg-black/70" />
          </div>
        </motion.div>
        <motion.div
          className='col-span-2'
          variants={reviewVariants}
        >
          <ScrollArea className="h-[450px] pr-3 overflow-y-auto scrollbar-thin scrollbar-track-gray-900">
            <ul className="space-y-4">
              {reviews.map((review) => (
                <motion.li
                  key={review.id}
                  className="glass p-4 rounded-md flex"
                  variants={reviewVariants}
                >
                    <div className='flex flex-col items-center'>
                        <Image
                            src={review.image}
                            width={150}
                            height={150}
                            className="rounded-full bg-primary/20 p-4"
                            alt={review.name}
                        />
                        <h3 className="text-xl font-semibold text-white mt-2">{review.name}</h3>
                        <StarRating filledStars={review.rating} />
                    </div>
                    <div className="p-6 text-center my-auto">
                        <p className="text-white">{review.review}</p>
                    </div>
                </motion.li>
              ))}
            </ul>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Reviews;