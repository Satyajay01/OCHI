import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-fu py-10 bg-[#004d43] rounded-3xl pt-[18vh]'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex overflow-hidden whitespace-nowrap '>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 10}} className='text-[17.5vw] tracking-tighter leading-none font-semibold -mt-[5vh] '>WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 10}} className='text-[17.5vw] tracking-tighter leading-none font-semibold -mt-[5vh] '>WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 10}} className='text-[17.5vw] tracking-tighter leading-none font-semibold -mt-[5vh] '>WE ARE OCHI </motion.h1>
        </div>
    </div>
  )
}

export default Marquee