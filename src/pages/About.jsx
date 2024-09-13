import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img  className='w-full max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nam doloribus natus error expedita temporibus, ex cum sequi corporis dolores eveniet fuga? Nihil repellendus nulla, quibusdam magni blanditiis voluptates sapiente culpa ea molestias perferendis distinctio incidunt officiis! Quam, delectus esse? Accusamus incidunt fugiat quaerat maxime at consectetur corporis delectus sit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia! Inventore corporis itaque, corrupti, sint reiciendis facilis in optio soluta eius magnam sed quaerat placeat modi, rem cumque? Excepturi soluta repellendus possimus fugit, culpa nemo pariatur iste, error commodi exercitationem vero recusandae! Fuga, deserunt, similique necessitatibus ex repudiandae vitae modi porro sunt non laborum quos laudantium dolores minus nostrum totam!</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi consequuntur id, provident facere ipsam ullam excepturi laborum adipisci ipsum vel, sed dolores ea! Blanditiis sit ullam possimus laudantium cupiditate assumenda aut quos fugit natus nulla.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us?</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transtion-all duration-300 text-gray-600 cursor-pointer' >
          <b> Efficiency</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe labore, sit repellendus cum possimus.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transtion-all duration-300 text-gray-600 cursor-pointer'>
          <b> Convenience</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptas illum rerum provident iure inventore.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transtion-all duration-300 text-gray-600 cursor-pointer'>
          <b> Personalizatino</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in adipisci sint! Iste, quaerat veniam!</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
