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
          src='https://i.ibb.co/m8LDLcP/3f004fbd0825ffbd4b9b11656a38f451.gif'
          serverLink='https://github.com/RafatRU42/airlines-server'
          clientLink='https://github.com/RafatRU42/airlines.com'
          liveSite='https://airlinesweb.netlify.app/'
        />
        <ProjectsCard
          title="RM Learning Point"
          des=" This full-stack web application is built using React, Bootstrap, Node.js, MongoDB,
          Express, Firebase, React router DOM."
          src='https://i.ibb.co/g71nBy4/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f.gif'
          serverLink='https://github.com/RafatRU42/learning-point-server'
          clientLink='https://github.com/RafatRU42/learning-point'
          liveSite='https://learning-point-client-1058c.web.app/'

        />
        <ProjectsCard
          title="Pigeon IT Center"
          des="This is a quiz testing application. This full-stack web application is built using React, Bootstrap, Node.js, MongoDB,
          Express, Firebase, React router DOM."
          src='https://i.ibb.co/ZmnqdCB/giphy.gif'
          serverLink=''
          clientLink='https://github.com/RafatRU42/pigeon-quiz'
          liveSite='https://64c4d5de23a9c35161205c01--statuesque-madeleine-b3809c.netlify.app/quizRoute'

        />
       

            </div>
            
        </section>
    );
};

export default Projects;