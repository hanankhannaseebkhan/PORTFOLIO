import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">March 2025 - April 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Online Internship - Software Development"
            subTitle="XYZ Tech - (March 2025 - April 2025)"
            result="Remote"
            des="During my 2-month online internship, I contributed to the development of a real-time web application, focusing on both the front-end and back-end. The project involved creating an intuitive user interface and integrating APIs to ensure seamless communication between the front-end and database."
          />


        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
