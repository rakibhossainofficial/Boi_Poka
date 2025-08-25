import React from 'react'
import bookImage from '../../assets/heroimg.png'

const Hero = () => {
  return (
    <div className='bg-[#F3F3F3] rounded-md p-4 flex flex-col-reverse md:flex-row items-center justify-between'>
      <div>
        <h2 className=' md:max-w-[70%] text-3xl md:text-7xl font-bold'>Books to freshen Up Your bookshelf</h2>
        <button className='bg-green-500 hover:bg-green-600 duration-300 text-white px-4 py-2  font-semibold rounded-md mt-6 cursor-pointer'>View The List</button>
      </div>

      <img src={bookImage} alt="heroimg" />
    </div>
  )
}

export default Hero

