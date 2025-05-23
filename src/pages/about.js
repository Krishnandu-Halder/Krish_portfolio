import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers =({value}) =>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000});
    const isInView = useInView(ref,{once: true});

    useEffect(()=>{

        if(isInView){
            motionValue.set(value);
        }
    },[isInView,value,motionValue])

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })

    },[springValue,value])
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>
                Krishnandu | About page
            </title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text='Passion Fuels Purpose! ' className='mb-16 lg:!text-7xl sm:!text-6xl xs:4xl
            sm:mb-8
            '/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='md:order-2 col-span-3 flex flex-col items-start justify-start xl:col-span-4 '>
                <h2 className='mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75
                
                '>Biography</h2>
                <p className='font-medium '>Hi, I&apos;m Krishnendu Halder — a passionate Full Stack Web Developer with a creative mind for building beautiful, functional, and user-focused digital experiences. With 1 year of hands-on experience and a strong foundation in frontend and backend development,
                     I&apos;m always eager to explore new ideas and turn bold visions into interactive realities.</p>

<p className='font-medium my-4'> For me, design isn&apos;t just about aesthetics—it&apos;s about solving real problems and crafting smooth, 
    intuitive experiences that truly connect with users. </p>

<p className='font-medium'> Whether I&apos;m building a responsive website, a dynamic web app, or a smart digital solution, I bring a deep commitment to clean design, efficient code, and human-centered thinking. 
    I&apos;m excited to bring my energy and skillset to your next project and help it shine.
</p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:bg-dark dark:border-light
                bg-light p-8  xl:col-span-4 md:order-1 md:col-span-8
                '>
                    <div className='absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[1.5rem] dark:bg-light bg-dark'/>
                    <div className="hover:scale-105 hover:brightness-110 transition-all duration-300">
                    <Image src={profilePic} alt="Krishnandu"    priority sizes='(max-width: 768px) 100vw,(max-width:1200px) 50vw, 33vw'
 className='w-ful h-auto rounded-2xl'/>
 </div>

                </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 
             
            xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={15}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                    xl:text-center md:text-lg sm:text-base xs:text-sm
                    '>satisfied clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={12}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm
                    '>Projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={1}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm
                    '>years of experience</h2>
                </div>
            </div>
            </div>
            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about
