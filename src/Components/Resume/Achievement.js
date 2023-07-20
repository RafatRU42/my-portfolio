import React from 'react';
import { motion } from "framer-motion"
import ResumeCards from './ResumeCards';


const Achievement = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 font-titleFont flex gap-20"
      >
      <div>
        <p>He is a professional web developer and UI design expert.His communication skill is very good.He is friendly and trustable. I appreciate his work and highly recommend him.</p>
        <p>-Mahfuz</p>
      </div>
      </motion.div>
    );
};

export default Achievement;