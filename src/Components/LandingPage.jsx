import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {

  return (
    <div className='w-full h-screen bg-[#0f172a] pt-1'>
        <div className='textstructure mt-40 px-16'>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item, index)=>{
                return <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index===1 && (
                        <div className='mr-[1vw] w-[8vw] h-[5.2vw] rounded-md relative -top-0.5 bg-red-500'></div>)}
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