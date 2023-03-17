import React, { useState } from 'react';
import Title from '../Layout/Title';
import Achievement from './Achievement';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Resume = () => {
    const [educationData,setEducationData] = useState(true)
    const [skillData,setSkillData] = useState(false)
    const [experienceData,setExperienceData] = useState(false)
    const [achievementData,setAchievementData] = useState(false)
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-[black]'>

            <div className='flex justify-center items-center text-center'>
                <Title title='Experienced at Coding' des='My Resume'  />
            </div>
            
            <div>
                <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>

                    <li onClick={() => setEducationData(true) & setSkillData(false) & setExperienceData(false) & setAchievementData(false)}
                        className={`${educationData? 'border-designColor' : 'border-transparent'}`}
                    >
                        Education
                    </li>

                    <li onClick={() => setEducationData(false) & setSkillData(true) & setExperienceData(false) & setAchievementData(false)}
                        className={`${skillData? 'border-designColor' : 'border-transparent'}`}
                    >
                        Skills
                    </li>

                    <li onClick={() => setEducationData(false) & setSkillData(false) & setExperienceData(true) & setAchievementData(false)}
                        className={`${experienceData? 'bg-designColor' : 'border-y-transparent'}`}
                    >
                        Experience
                    </li>

                    <li onClick={() => setEducationData(false) & setSkillData(false) & setExperienceData(false) & setAchievementData(true)}
                        className={`${achievementData? 'bg-bodyColor' : 'border-y-transparent'}`}
                    >
                        Achievement
                    </li>

                </ul>

            </div>

            {educationData && <Education/>}
            {skillData && <Skills/>}
            {experienceData && <Experience/>}
            {achievementData && <Achievement/>}
            
        </section>
    );
};

export default Resume;