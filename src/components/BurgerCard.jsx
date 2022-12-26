import React from 'react'

export default function BurgerCard({image,cardHead,cardPara}) {
  return (
    <div className='uppercase text-center font-poppins'>
        <img src={image} alt="card" />
        <h2 className='font-bold text-xl'>{cardHead}</h2>
        <p className='text-sm font-medium py-2'>{cardPara}</p>
        <button className='bg-rose-500 px-8 py-1 uppercase font-bold'>order now</button>
    </div>
  )
}
