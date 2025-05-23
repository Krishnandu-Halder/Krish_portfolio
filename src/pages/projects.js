import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import project4 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project3 from "../../public/images/projects/To-do list app.png"
import project2 from "../../public/images/projects/Ballerina Static Canvas Animation (Vanilla JS).png"
import project1 from "../../public/images/projects/Visual Search Engine.png"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);
const FeaturedProject = ({type, title , summary , img , link ,github} ) => {
    return(

       <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl
       border border-solid dark:border-light border-dark dark:bg-dark bg-light shadow-2xl p-12 
       lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
       '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light rounded-br-3xl
     bg-dark xs:-right-2 sm:h-[102%] xs:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>

        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
       
        <FramerImage   priority sizes='(max-width: 768px) 100vw,(max-width:1200px) 50vw, 50vw'
         src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
        </Link>
        <div className='w-1/2 flex flex-col  items-start justify-between pl-6'>
            <span className='text-primary dark:text-primaryDark  font-medium text-xl xs:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left dark:text-light text-4xl font-bold sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium dark:text-light text-dark sm:text-sm'>{summary}</p>
        <div className='mt-2 flex itmes-center'>
        <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
        <Link href={link} target='_blank' className='
        ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold
        sm:px-4 sm:text-base
        '>Visit Project</Link>


        </div>
        </div>
       </article>

    )
       
}
const Project = ({title,type,img,link,github}) =>{
    return(
        
            <article className='w-full flex flex-col  items-center justify-between rounded-2xl
       border border-solid dark:border-light border-dark bg-light dark:bg-dark shadow-2xl p-6 relative 
       xs:p-4
       '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] dark:bg-light bg-dark rounded-br-3xl
                md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
                '/>

        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
        <FramerImage src={img} alt={title} className='w-full  h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline  underline-offset-2'>
        <h2 className='my-2 w-full text-left  dark:text-light text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        
        <div className='w-full justify-between mt-2 flex itmes-center'>
        <Link href={link} target='_blank' className='
            font-semibold underline dark:text-light md:text-base
        '>Visit </Link>
        <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon/></Link>
        
        </div>
        </div>
       </article>
        
    )
}

const projects = () => {
  return (
    <>
    <Head>
            <title>
                Krishnandu | Projects page
            </title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Knowledge limits. Imagination breaks." 
                className='mb-20  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
                />
                 
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
               
                    <div className='col-span-12'>
                    
                        <FeaturedProject
                        type="Featured Project" title="Visual Search Engine Using VLM " summary ="Developed a high-accuracy visual search engine using image-text embeddings and Streamlit UI; optimized real-time querying with OpenCV, achieving 85% semantic match precision across 2K+ image datasets." img ={project1} link="/" github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        type="Project1" title=" Responsive To-do List App " summary ="Built a responsive and minimalist to-do list web app with JavaScript, enabling users to add, edit, delete, and persist tasks in real-time using localStorage; adopted by 50+ users for daily productivity." img ={project3} link="/" github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        type="Project2" title="Crypto Screener Application " summary ="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency" img ={project4} link="/" github="/"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject  type="Featured Project" title="Ballerina Static Canvas Animation (Vanilla JS) " summary ="Engineered an animated web canvas featuring a ballerina using pure JavaScript and HTML5 Canvas; achieved 60 FPS rendering performance with optimized frame loops and zero external libraries." img ={project2} link="/" github="/"/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        type="Project3" title="BMI Calculator " summary ="Created a responsive BMI Calculator using HTML, CSS, and JavaScript for instant health metric analysis; supports real-time input validation and BMI classification feedback on both mobile and desktop." img ={project1} link="/" github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        type="Project4" title="Crypto Screener Application " summary ="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency" img ={project4} link="/" github="/"
                        />
                    </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
