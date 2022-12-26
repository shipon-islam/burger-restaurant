import React from 'react'
import burger_glass from "../../assets/burgerwithglass.png"
import Layout from '../../components/Layout'

export default function Hero() {
  return (
   <Layout>
     <div className='grid grid-cols-1 sm:grid-cols-2 items-center font-montserrat h-[40vh] sm:h-full'>
        <div>
            <p className='text-lg ml-2 w-[70%] sm:w-full text-gray-700 font-semibold'>it’ is a good time for the geat taste of burger</p>
            <h1 className='text-[4rem] md:text-[6rem] uppercase font-bold font-bungee text-gray-800'>burger</h1>
            <h3 className='text-4xl uppercase font-black text-gray-800 ml-2'>week</h3>
        </div>
        <div className='hidden relative sm:block before:contents-[""] before:bg-white before:w-16 before:h-16 before:absolute before:shadow-[37px_5px_172px_200px_rgba(255,255,255,1)] before:-z-10 z-10 before:top-[50%] before:left-[50%]'>
            <img  src={burger_glass} alt="hero" />
        </div>
    </div>
   </Layout>
  )
}
