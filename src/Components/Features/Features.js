import React from 'react';
import Title from '../Layout/Title';
import Card from './Card';
import {FaMobile,FaGlobe} from 'react-icons/fa';
import {AiFillAppstore} from 'react-icons/ai';
import {SiProgress,SiAntdesign} from 'react-icons/si'

const Features = () => {
    return (
        <section id='feature' className='w-full border-b-[1px] border-b-[black]'>
            <Title title={"feature"} des={"What I Do"} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-20'>
            <Card
          title="Designing & Developing"
          des="I am responsible for building web applications using the MERN (MongoDB, Express.js, React, Node.js) technology stack."
         
        />
        <Card
          title="Front-end Development"
          des=" I will create responsive, interactive, and visually appealing user interfaces that provide a smooth user experience."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Back-end Development"
          des="I will handle the server-side of the application using Node.js and Express."
          icon={<SiProgress />}
        />
        <Card
          title="Database Management"
          des="As a MERN Stack developer, I will work with MongoDB or other NoSQL databases to store and retrieve data efficiently. "
          icon={<FaMobile />}
        />
        <Card
          title="Testing and Debugging"
          des="I am responsible for writing unit tests, conducting integration testing, and debugging issues in both the front-end and back-end components of the application. "
          icon={<SiAntdesign />}
        />
        <Card
          title="Continuous Learning and Improvement"
          des="As a developer, I want to stay updated with the latest technologies, tools, and best practices in the MERN Stack ecosystem."
          icon={<FaGlobe />}
        />

            </div>

        </section>
    );
};

export default Features;