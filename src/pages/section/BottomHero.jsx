import React from 'react'
import { bottomHero } from '../../apis'
import BottomHeroCard from '../../components/BottomHeroCard'
import Layout from '../../components/Layout'

export default function BottomHero() {
    const {leftArea,rightAreaTop,rightAreabottom}=bottomHero
  return (
    <Layout>
      <div className='grid sm:grid-cols-2 gap-8 mt-16'>
        <BottomHeroCard {...leftArea}/>
        <div className='flex flex-col gap-8'>
        <BottomHeroCard {...rightAreaTop}/>
        <BottomHeroCard {...rightAreabottom}/>
        </div>
      </div>
        
    </Layout>
  )
}
