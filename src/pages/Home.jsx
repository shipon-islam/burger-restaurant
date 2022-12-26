import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BookTable from './section/BookTable'
import BottomHero from './section/BottomHero'
import Discover from './section/Discover'
import Footers from './section/Footer'
import Hero from './section/Hero'
import TasteBurger from './section/TasteBurger'

function Home() {
  return (
   <div>
    <div className="bg-yellow">
      <Navbar/>
        <Hero/> 
    </div>
    <BottomHero/>
    <TasteBurger/>
    <Discover/>
    <BookTable/>
    <Footers/>
   </div>
  )
}

export default Home