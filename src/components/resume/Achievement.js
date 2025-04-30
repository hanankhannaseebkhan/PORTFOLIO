import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Certificate"
            subTitle="Certificate By Great Learning"
            result="Success"
          />
          <ResumeCard
            title="HTML Full Course"
            subTitle="Certificate By Great Learning"
            result="Success"
          />
          <ResumeCard
            title="Amazon Web Services"
            subTitle="AWSome Day Online Conference"
            result="Success"
            des="It’s a 3-day online conference where I gained knowledge of AWS architecture and its new services. I also took the test and received the certificate."
          />
        </div>
      </div>
      <div>
        {/* other things */}
      </div>
    </motion.div>
  );
};

export default Achievement;
