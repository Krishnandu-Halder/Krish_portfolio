import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" className="w-16 h-16 bg-dark text-light flex dark:border-light border border-solid border-transparent items-center justify-center rounded-full text-2xl font-bold "
      whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1,repeat:Infinity},
      }}>
      K</MotionLink>
    </motion.div>
  )
}

export default Logo
