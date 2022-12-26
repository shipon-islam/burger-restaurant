import React from 'react'

export default function Layout({children}) {
  return (
    <div className='w-full  max-w-[1450px] mx-auto px-3 md:px-16'>
        {children}
    </div>
  )
}
