import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className='w-full border-t-2 dark:text-light border-solid dark:border-light border-dark 
       sm:text-base
      font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 '>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2 '>
                Build <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                by&nbsp;<Link href='/' className='underline underline-offset-2' 
                target='_blank'>Krishnandu</Link>
            </div>
            <Link href='/' target='_blank' className='underline underline-offset-2' >Say hello</Link>
        </Layout>
      </footer>
    </div>
  )
}

export default Footer
