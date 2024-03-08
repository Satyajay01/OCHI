import { motion } from 'framer-motion';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {
    

  return (
    <div data-scroll data-scroll-speed="-.6" className='w-full h-screen bg-[#0f172a] pt-1'>
        <div className='textstructure mt-40 px-16'>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item, index)=>{
                return <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index===1 && (
                        <motion.div 
                        initial={{width: 0}} 
                        animate={{width: "8vw"}} 
                        transition={{ease: [0.87, 0, 0.13, 1], duration:1}}
                         className='mr-[1vw] w-[12vw] h-[6vw] rounded-md relative top-2 bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>)}
                       <h1 className="uppercase text-[6rem] leading-[6vw] tracking-tighter font-medium">
                        {item}
                      </h1>
                    </div>
            </div>
            })}



        </div>
        
        <div className='border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item, index)=>(<p className="text-md font-light tracking-tighter leading-none">{item}</p>))}
            <div className='start flex items-center gap-2 '>
                <div className='px-6 py-1 border-[2px] border-zinc-500 rounded-full font-light '>START THE PROJECT</div>
                <div className='border-[2px] border-zinc-500 w-10 h-10 rounded-full flex items-center justify-center'>
                    <FiArrowUpRight/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage