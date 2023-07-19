import React from 'react';
import { motion } from "framer-motion"


const Experience = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 font-titleFont flex gap-20"
      >
       <p>

      

Hi! I'm Ruhul Muazzam Rafat, a passionate MERN Stack web developer, I love creating elegant and user-friendly applications that leave a positive impact on users. <br />

<p className='text-xl mt-5 mb-3'>Skills and Technologies:</p>
As a MERN Stack developer, I excel in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I'm also well-versed in front-end technologies like HTML, CSS, JavaScript, and modern UI frameworks such as Bootstrap and TailwindCSS.

<p className='text-xl mt-5 mb-3'>My Approach:</p>
I believe in a problem-solving approach to development, where I analyze challenges from multiple angles to find efficient and scalable solutions. I'm always eager to optimize code for performance and prioritize delivering seamless user experiences.

<p className='text-xl mt-5 mb-3'>Passion for Web Development:</p>
Web development has been my passion since I started coding. I'm captivated by the ever-evolving nature of the tech industry and continually seek to expand my knowledge to stay ahead of the curve. Whether it's building interactive web applications or implementing responsive designs, I'm always excited to take on new challenges.

<p className='text-xl mt-5 mb-3'>Collaboration and Teamwork:</p>
Working in a collaborative environment energizes me. I'm a strong believer in open communication and teamwork. I enjoy exchanging ideas with my colleagues and believe that diverse perspectives lead to better outcomes. I value feedback and use it to continuously improve my work.

<p className='text-xl mt-5 mb-3'>Notable Projects:</p>
Throughout my career, I've had the opportunity to work on various exciting projects, including e-commerce platforms, social networking applications, and data-driven dashboards.

<p className='text-xl mt-5 mb-3'>Continuous Learning:</p>
I'm committed to lifelong learning and actively participate in web development communities. I attend workshops, engage in hackathons, and explore new libraries and frameworks to sharpen my skills.



<p className='text-xl mt-5 mb-3'>Let's Connect!</p>
I'm always open to new opportunities and collaborations. If you're looking for a dedicated MERN Stack developer to join your team or work on your project, I'd love to hear from you! Feel free to reach out through the contact options provided on this website.

Looking forward to connecting with you!


       </p>
      </motion.div>
    );
};

export default Experience;