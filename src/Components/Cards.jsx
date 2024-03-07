import React from 'react'
import './Featured.css'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#0f172a] flex items-center px-12 gap-5'>
        <div className='cardcontainer h-[58vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <a class="rounded-full uppercase absolute px-5 py-1 border-2 border-[#c7e567] text-[#c7e567] let-10 bottom-10">&copy; 2019-2022</a>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[58vh]'>

        <div className='card relative rounded-xl w-1/2 h-full bg-[#494949] flex justify-center items-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <a href="#" class="btn41-43 btn-43 rounded-full overflow-hidden px-5 py-1 border-2 absolute top-[48vh] uppercase">Rating 5.0 on Clutch</a>
        </div>

        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <a href="#" class="btn41-43 btn-43 rounded-full overflow-hidden px-5 py-1 border-2 absolute top-[48vh] uppercase">Business Bootcamp Alumni</a>
      
        </div>

        </div>
    </div>
  )
}

export default Cards