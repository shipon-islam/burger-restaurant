import React from 'react'
import { discover } from '../../apis'
import Layout from '../../components/Layout'

export default function Discover() {
    const {title,head,para,image}=discover
  return (
    <Layout>
        <div className='grid sm:grid-cols-2 items-center mt-16 w-[90%] sm:w-full mx-auto'>
            <div className='uppercase font-montserrat text-center sm:text-left'>
                <div className='w-[95%] sm:w-[90%] mx-auto'>
                <h4 className='font-bold text-2xl'>{title}</h4>
                <h2 className='font-bold text-4xl my-4'>{head}</h2>
                <p className='text-md font-medium py-4'>{para}</p>
                <div>
                    <span className='inline-block w-4 h-4 rounded-full bg-orange-300'></span>
                    <span className='inline-block w-4 h-4 rounded-full bg-gray-300 mx-2'></span>
                    <span className='inline-block w-4 h-4 rounded-full bg-gray-300'></span>
                </div>
                </div>
            </div>
            <div>
                <img className='w-[80%] mx-auto sm:ml-auto' src={image} alt="image" />
            </div>
        </div>
    </Layout>
  )
}
