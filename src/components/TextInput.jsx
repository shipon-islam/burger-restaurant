import React from 'react'

export default function TextInput({type,...rest}) {
  return (
    <div>
      <input className='border-2 border-gray-500 pl-2 py-2 outline-none rounded-sm placeholder:text-gray-700 w-full' type={type} {...rest} />  
    </div>
    
  )
}
