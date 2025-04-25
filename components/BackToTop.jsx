import React from 'react'
import { IoMdArrowRoundUp } from 'react-icons/io'

const BackToTop = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className='border border-white text-white  rounded-full w-35 h-14  m-5 transition-colors ease-linear hover:bg-white hover:text-black hover:cursor-pointer gap-1 hover:font-bold'>
        <a href="#home" className='text-sm h-full w-full flex justify-center items-center'>
          <IoMdArrowRoundUp size={24} />
          Back To Top</a>
      </div>
    </div>
  )
}

export default BackToTop
