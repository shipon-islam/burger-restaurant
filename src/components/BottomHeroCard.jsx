import React from 'react'

export default function BottomHeroCard({image,title,header}) {
  return (
    <div className='relative text-gray-100 w-fit font-montserrat uppercase'>
        <img src={image} alt="card" />
        <div className='absolute top-8 left-8'>
            <p className='text-sm font-medium'>{title}</p>
            <h3 className='text-md font-bold'>{header}</h3>
        </div>
    </div>
  )
}
