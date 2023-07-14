import React from 'react';
import Title from '../Layout/Title';
import ProjectsCard from './ProjectsCard';
import {projectOne,projectTwo,projectThree} from '../../assets/index'

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
          src={projectOne}
          serverLink='https://github.com/RafatRU42/airlines-server'
          clientLink='https://github.com/RafatRU42/airlines.com'
          liveSite=''
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
       

            </div>
            
        </section>
    );
};

export default Projects;