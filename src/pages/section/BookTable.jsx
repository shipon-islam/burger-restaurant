import React from 'react';
import chickenBurger from "../../assets/chickenBurger.png";
import dryCake from "../../assets/dryCake.png";
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

export default function BookTable() {
  return (
    <Layout>
        <div className='w-[90%] mx-auto sm:w-full text-center uppercase font-bold font-poppins mt-24 mb-8'>
            <h5 className=' text-2xl'>reservation</h5>
            <h2 className='text-4xl'>book your table</h2>
        </div>
       <div className='grid sm:grid-cols-[1fr_2fr_1fr] '>
        <img className='w-[10rem] h-auto hidden sm:block' src={dryCake} alt="drycake" />
        <form className='grid sm:grid-cols-2 items-center 
        gap-y-4 sm:gap-x-3 w-[90%] mx-auto sm:w-full' >
            <TextInput type="text" placeholder="name"
            />
            <TextInput type="email" placeholder="Emai"
            />
            <TextInput type="date" placeholder="Date"
            />
            <TextInput type="number" placeholder="Table No"
            />
            <TextInput type="number" placeholder="People"
            />
            <button className='bg-rose-500 block w-full py-[0.7rem] font-bold rounded-sm uppercase'>find a table</button>

        </form>
        <img className='w-[17rem] object-cover ml-auto hidden sm:block h-[12rem]' src={chickenBurger} alt="chicken" />
       </div>
    </Layout>
  )
}
