import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        {/* left section */}
        <div >
           <img className='mb-5 w-40' src={assets.logo} alt="" />
           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, totam iusto corrupti eos aspernatur adipisci qui tempore facere ratione officiis fuga, blanditiis voluptates praesentium modi minus nemo expedita rem reiciendis dolore eaque amet magni? Delectus accusamus quisquam cum deleniti modi, nihil quo omnis sint perferendis itaque laborum. Autem, corrupti. Est?</p>
        </div>
        {/* center section */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div> 
            <p className='text-xl font-medium mb-5'>Get In touch </p>
            <ul>
                <li>7006688330</li>
                <li>ubaidmir623@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto  All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
