import React, { useEffect, useState } from 'react'

function Eyes() {
    const [Rotate, setRotate]=useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX 
            let mouseY=e.clientY

            let DeltaX= mouseX - window.innerWidth/2
            let DeltaY= mouseY - window.innerHeight/2

            var angle = Math.atan2(DeltaY, DeltaX) * (180/Math.PI);    //180/Math.PI = 57.29

            setRotate(angle-180);

        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className="relative w-full h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <div  className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div data-scroll data-scroll-speed="0.2" className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>

                <div className=' relative w-2/3 h-2/3 rounded-full bg-[#0f172a]'>
                <div className='relative top-14 left-14 font-semibold text-xl'>PLAY</div>
                    <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
                    <div className='w-[3vh] h-[3vh]  rounded-full bg-zinc-100'></div>
                    </div>
                </div>

                </div>
                
                <div data-scroll data-scroll-speed="0.2" className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className=' relative w-2/3 h-2/3  rounded-full bg-[#0f172a]'>
                <div className='relative top-14 left-14 font-semibold text-xl'>PLAY</div>

                <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
                    <div className='w-[3vh] h-[3vh]  rounded-full bg-zinc-100'></div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes