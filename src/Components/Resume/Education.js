import React from 'react';
import { motion } from "framer-motion"
import ResumeCards from './ResumeCards';


const Education = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        {/* part one */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2006 - Present</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCards
              title="B.A in History"
              subTitle="University of Rajshahi (2021 - Present)"
              result="3.33/4"
              des="I am an undergraduate student of University of Rajshahi from 2021 to present"
            />
            <ResumeCards
              title="Higher Secondary Education"
              subTitle="Sherpur Govt. College (2018 - 2020)"
              result="4.92/5"
              des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />
            <ResumeCards
              title="Secondary School Education"
              subTitle="Roshida Begum Education Complex (2016 - 2018)"
              result="4.72/5"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
        </div>
        {/* part Two */}
  
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
            <h2 className="text-3xl md:text-4xl font-bold">Non Academic Courses</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCards
              title="Complete Web Development"
              subTitle="Programming Hero - (2022)"
            
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ResumeCards
              title="Advance Crash Course"
              subTitle="Programming Hero- (2023)"
             
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCards
              title="Redux Course"
              subTitle="Anisul Haque - (2023)"
            
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
          </div>
        </div>
      </motion.div>
    );
};

export default Education;