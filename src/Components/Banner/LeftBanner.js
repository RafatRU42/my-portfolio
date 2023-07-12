import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { FaFacebook,FaTwitter,FaLinkedin,FaReact,FaNodeJs,FaFigma,FaFire } from 'react-icons/fa';
import resume from '../../assets/Resume/resume of Rafat.pdf'

const LeftBanner = () => {

    const [text] = useTypewriter({
        words:["Professional Coder.","MERN Stack Developer.","UI Designer."],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000
    })
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY PORTFOLIO</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm 
                <span className='text-designColor capitalize'> RM Rafat</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>a
                    <span> {text}</span>
                    <Cursor cursorBlinking="false" cursorStyle="|" cursorColor='#ff014f'></Cursor>
                </h2>

                <p className="text-base font-bodyFont leading-6 tracking-wide">
                Highly dedicated and skilled MERN Stack web developer with a passion for creating efficient and user-friendly applications. Strong proficiency in MongoDB, Express.js, React.js, and Node.js, coupled with a solid foundation in front-end technologies. Committed to delivering high-quality code and exceptional user experiences. Eager to contribute my expertise and collaborate with a dynamic team in a company where I can further enhance my skills and make a meaningful impact.I am dedicated to contributing to the success of the team and the organization as a whole.
                 </p>

            </div>

            <div className='-my-10'>
              <button className='text-blue-400'><a target='_blank'  rel="noreferrer" href={resume}>Download Resume</a></button>
            </div>


            <div className='flex flex-col xl:flex-row gap-4 lgl:gap-0 justify-between'>
            <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>find me in</h2>
               
            <div className='flex gap-4'>
                <span className='bannerIcon'>
                    <FaFacebook/>
                </span>
                <span className='bannerIcon'>
                    <FaTwitter/>
                </span>
                <span className='bannerIcon'>
                    <FaLinkedin/>
                </span>
            </div>
         </div>

            <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <FaFire />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
            </div>
        </div>
            
        </div>
    );
};

export default LeftBanner;