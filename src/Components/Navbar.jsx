import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav , setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between items-center px-4 mx-auto h-24'>
      <h1 className='text-[#00df9a] font-bold w-full text-3xl'>REACT.</h1>
      <ul className=' hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleClick} className='block md:hidden'>
        {
            !nav ? 
            <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
        }
      <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500" : "fixed left-[-100%]"}>
      <h1 className='text-[#00df90] font-bold w-full text-3xl m-4'>REACT.</h1>
      <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 ' border-b border-gray-600>Contact</li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar