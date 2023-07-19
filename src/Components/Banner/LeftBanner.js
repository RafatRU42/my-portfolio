import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { FaFacebook,FaTwitter,FaLinkedin,FaReact,FaWhatsapp,FaTelegram } from 'react-icons/fa';
import { SiTailwindcss,SiMongodb,SiJavascript} from 'react-icons/si';
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

            <div className='-my-10 inline'>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-flex hover:bg-red-500 mr-2 duration-300"></span>
       
              <button className='text-blue-400'><a target='_blank'  rel="noreferrer" href={resume}>Download Resume</a></button>
            </div>


            <div className='flex flex-col xl:flex-row gap-4 lgl:gap-0 justify-between'>
            <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>find me in</h2>
               
            <div className='flex gap-4'>
                <span title='Facebook' className='bannerIcon'>
                    <a href="https://www.facebook.com/rohulmuazzam.rafat" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                </span>
                <span title='WhatsApp' className='bannerIcon'>
                    <a href="https://api.whatsapp.com/send?phone=01580403336" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
                </span>
                <span title='Telegram' className='bannerIcon'>
                    <a href="https://t.me/Ruhul_Muazzam_Rafat" target="_blank" rel="noopener noreferrer"><FaTelegram/></a>
                </span>
                <span title='LinkedIn' className='bannerIcon'>
                    <a href="https://www.linkedin.com/in/ruhul-muazzam-rafat-67015a283/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </span>
            </div>
         </div>

            <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span title='React.js' className="bannerIcon">
              <FaReact />
            </span>
            <span title='JavaScript' className="bannerIcon">
              <SiJavascript />
            </span>
            <span title='TailwindCSS' className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span title='MongoDB' className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
            </div>
        </div>
            
        </div>
    );
};

export default LeftBanner;