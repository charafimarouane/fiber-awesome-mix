import { useRef } from "react";
import { useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

const about = {
  description: "We are deeply passionate about helping businesses navigate and succeed in the ever-evolving digital world. In today’s fast-paced and competitive landscape, we understand the challenges companies face, and we are committed to being a trusted partner every step of the way. Our mission is to deliver innovative, high-quality solutions that are not only tailored to meet the unique needs of each client but also drive meaningful results. We take the time to truly understand your business goals, offering personalized strategies that foster growth, enhance efficiency, and improve your overall digital presence. Whether you're looking to enhance customer experiences, streamline operations, or expand your reach, we are here to provide the expertise and support necessary to ensure your success in the digital age"
};

const WhoWeAre = () => {
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

    const handleClick = () => {
      
    }
  
    useEffect(() => {
      if (inView) {
       setTimeout(() => {
        handleClick()
      }, 500);
      }
    }, [inView]);

  return (
    <div className="bg-text_color p-12 rounded-2xl space-y-12 flex gap-12">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center">
        {/* Title */}
        <motion.h1
          ref={ref}
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
        >
          Who We Are
        </motion.h1>

        {/* Description */}
        <motion.p
          ref={ref}
          className="text-white/40 text-xl mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, transition: { duration: 0.6 } } : {}}
        >
          {about.description}
        </motion.p>
      </div>

      {/* Right Side - Tabs */}
      <div className="w-1/2">
        <Tabs defaultValue="experience" className="flex flex-col gap-6">
          
          <TabsContent value="experience">
            <motion.div
              className="bg-primary/50 rounded-2xl p-6 h-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/images/profile.png" width={200} height={200} alt="Who We Are" />  

            </motion.div>
          </TabsContent>
          <TabsContent value="education">
            <motion.div
              className="bg-primary/50 rounded-2xl p-6 h-[300px] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center my-auto space-x-4">
                <Image src="/images/profile1.png" width={200} height={200} alt="Who We Are"  className="rounded-full"/>  
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl text-white font-semibold">Education</h3>
                  <p className="text-md text-white/60">
                    We are a team of highly skilled professionals with a passion for learning and growth. Our team members have backgrounds in computer science, design, and marketing, and we are constantly expanding our knowledge and expertise to better serve our clients.
                  </p>
                </div>
              </div>
              
            </motion.div>
          </TabsContent>
          <TabsContent value="skills">
            <motion.div
              className="bg-primary/50 rounded-2xl p-6 h-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/images/profile1.png" width={200} height={200} alt="Who We Are" />  
              <p className="text-lg text-center text-black">
                We possess a diverse set of skills, including web development, graphic design, and digital marketing.
              </p>
            </motion.div>
          </TabsContent>

          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="experience"  className="mx-2">Experience</TabsTrigger>
            <TabsTrigger value="education" className="mx-2">Education</TabsTrigger>
            <TabsTrigger value="skills" className="mx-2">Skills</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default WhoWeAre;