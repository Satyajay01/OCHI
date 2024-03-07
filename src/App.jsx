import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-[#0f172a]'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    
    </div>
  )
}

export default App