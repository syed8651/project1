import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 ml-4'>
        <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-500'>KANLI BAGH BARAMULLA</p>
        <p className='text-gray-500'>7006688330</p>
        <p className='text-sm text-gray-600'>UBAIDMIR623@GMAIL.COM</p>
        <p className='font-semibold text-sm'>CAREERS AT PRESCRIPTO</p>
        <button className='border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all cursor-pointer'>EXLORE JOBS</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
