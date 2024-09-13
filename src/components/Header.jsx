import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 h-auto'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-[10vw] m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight lg-leading-tight'>Book Appointment <br />With Trusted Doctors</p>
      
      <div className='flex flex-row md-flex-row items-center gap-3 text-white text-sm font-light'>
        <img className='w-28 ' src={assets.group_profiles} alt="" />
        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hasle free.</p>
        </div>
           <a className='flex items-center mt-5 gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm md:m-0 m-auto hover:scale-105 transition-all duration-300' href="#speciality">Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
       
      </div>
      <div className='md:w-1/2 relative'>
        <img className='w-full h-auto md:absolute bottom-20  rounded-lg ' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
