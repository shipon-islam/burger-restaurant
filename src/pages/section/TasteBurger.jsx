import React from 'react'
import { tasteBurger } from '../../apis'
import BurgerCard from '../../components/BurgerCard'
import Layout from '../../components/Layout'

export default function TasteBurger() {
    const {titleButton,topHead,para,burgerList}=tasteBurger
  return (
   <Layout>
    <div className='font-montserrat grid place-items-center gap-y-4 mt-16 text-center'>
        <button className='bg-orange-300 px-5 py-1 uppercase font-medium'>{titleButton}</button>
        <h2 className='uppercase font-bold text-4xl '>{topHead}</h2>
        <p className='w-[90%] sm:w-4/5'>{para}</p>
    </div>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] sm:w-full mx-auto'>
        {
            burgerList.map(item=><BurgerCard key={item.id} {...item}/>)
        }
        
    </div>
   </Layout>
  )
}
