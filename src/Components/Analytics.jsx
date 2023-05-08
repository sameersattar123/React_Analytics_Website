import React from 'react'
import laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row ">
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="" />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className='md:text-2xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, numquam voluptate sit dolorem saepe sed eos. Eveniet itaque, cum aliquid modi illum et? Incidunt neque quos nihil mollitia soluta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam laboriosam saepe, pariatur doloremque odit possimus doloribus impedit nam quos tempora nulla. Asperiores pariatur saepe corporis nemo numquam, quaerat blanditiis a. </p>
            <button  className='bg-black w-[200px] mx-auto
            md:mx-0 rounded-md font-medium my-6  text-bold py-3 text-[#00df9a]'>
            Get Started
            </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
