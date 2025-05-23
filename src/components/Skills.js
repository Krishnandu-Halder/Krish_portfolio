import React from 'react'
import {motion} from 'framer-motion'

const Skill =({name,x,y})=>{
    return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold dark:bg-light sm:dark:text-light dark:text-dark bg-dark text-light dark:shadow-light shadow-dark 
        cursor-pointer absolute px-6 py-3 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-ligh xs:font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition:{duration: 1.5}}}
        viewport={{once:true}}
      
        >
        {name}
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center
     rounded-full dark:bg-circularDark bg-circularLight lg:bg-circularLightLg lg:dark:bg-circularDarkLg
     md:bg-circularLightMd md:dark:bg-circularDarkMd
     sm:bg-circularLightSm sm:dark:bg-circularDarkSm dark:!text-light
     
     '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold dark:bg-light 
        dark:text-dark bg-dark text-light p-8 shadow-dark 
        cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2
        '
        whileHover={{scale:1.05}}>
        Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw"/>
        <Skill name="CSS" x="-10vw" y="-10vw"/>
        <Skill name="javaScript" x="22vw" y="6vw"/>
        <Skill name="React JS" x="0vw" y="12vw"/>
        <Skill name="Next JS" x="-20vw" y="-15vw"/>
        <Skill name="Gatsby JS" x="15vw" y="-12vw"/>
        <Skill name="Web Design" x="32vw" y="-5vw"/>
        <Skill name="Figma" x="0vw" y="-20vw"/>
        <Skill name="SupaBase" x="-25vw" y="18vw"/>
        <Skill name="Tailwind CSS" x="18vw" y="18vw"/>
    </div>
    </>
  )
}

export default Skills
