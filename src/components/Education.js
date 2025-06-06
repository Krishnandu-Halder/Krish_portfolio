import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details =({type , time , place, info})=>{
  const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
        md:w-[80%]'>
          <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5 ,times:"spring"}}
            >
                <h3 className='capitilize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}</h3>
                    <span className='capitilize font-medium dark:text-light/75 text-dark/75 xs:text-sm' >
                       {time} | {place}
                    </span>
                    <p className='font-medium w-full md:text-sm'>
                        {info}
                    </p>
                
            </motion.div>
        </li>
    )
}

const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset: ["start end","center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
      <motion.div
      style={{scaleY:scrollYProgress}}
      className='absolute left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top
      md:w-[2px] md:left-[30px]
      xs:left-[30px]
      '/>
        <ul className='w-full flex flex-col items-start justify-between  ml-4 xs:ml-7'>
            <Details
            type='Bachelor Of Science In Computer Science' time="2022-2026"
            place="https://www.brainwareuniversity.ac.in/ Brainware University"
            info= "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence." />
            <Details
            type='Higher Secondary Education' time="2020-2022"
            place="Kumar Ashutosh Institution (Main) Boy's"
            info= "Relevant courses included Physics , Chemistry , Math , Computer Science " />
             
            
        </ul>
      </div>
    </div>
  )
}

export default Education
