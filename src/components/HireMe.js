import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
       md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0
    '>
      <div className="w-48 h-auto flex justify-center items-center relative md:w-24">
        <CircularText className={"dark:fill-light fill-dark animate-spin-slow"}/>
      <Link href="mailto:krishnandu.work@gmail.com" className='flex items-center justify-center
      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
      text-light shadow-md border border-dark dark:border-light border-solid w-20 h-20 rounded-full
      font-semibold hover:bg-light hover:text-dark dark:hover:text-light dark:bg-light dark:hover:bg-dark
      md:w-12 md:h-12 md:text-[10px]
      dark:text-dark
      '>
        Hire Me
      </Link>
      
      </div>
    </div>
  )
}

export default HireMe
