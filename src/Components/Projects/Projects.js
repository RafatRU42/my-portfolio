import React from 'react';
import Title from '../Layout/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title  title='Visit my Portfolio and keep your feedback' des='My Portfolio Projects'></Title>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>

            <ProjectsCard
          title="Airlines.com"
          des="Full stack application using JWT to ensure secure access to task data and implemented role based access control for different user types."
          src='https://i.ibb.co/m8LDLcP/3f004fbd0825ffbd4b9b11656a38f451.gif'
          serverLink='https://github.com/RafatRU42/airlines-server'
          clientLink='https://github.com/RafatRU42/airlines.com'
          liveSite='https://airlinesweb.netlify.app/'
        />
        <ProjectsCard
          title="E-Commerce Site"
          des=" This full-stack responsive e-commerce application is built using React, Redux, Tailwind, Node.js, MongoDB,
          Express, Firebase, React router DOM."
          src='https://i.ibb.co/KXkQ1Mt/ecommerce-marketing-strategy.gif'
          serverLink='https://github.com/RafatRU42/allBirds-server'
          clientLink='https://github.com/RafatRU42/allBirds-client'
          liveSite='https://allbirds-web.netlify.app/'

        />
        {/*  */}
        <ProjectsCard
          title="Task Manager "
          des=" This full-stack task management application is built using Typescript, React, Redux, Node.js, MongoDB,
          Express, Firebase, React router DOM."
          src='https://i.ibb.co/g71nBy4/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f.gif'
          serverLink='https://github.com/RafatRU42/task-manager-server'
          clientLink='https://github.com/RafatRU42/task-manager'
          liveSite='https://task-manager-rafat.netlify.app/'

        />
       

            </div>
            
        </section>
    );
};

export default Projects;