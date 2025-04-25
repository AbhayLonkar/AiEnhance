import React from 'react'

const Footer = () => {
  return (
    <div className='text-white bg-[#131313] flex items-center md:justify-around min-h-20 flex-col md:flex-row gap-2  py-2 px-8 rounded-t-lg shadow-md shadow-gray-950'>
      <div>
        <h3 className={' text-lg md:text-2xl font-bold font-mono min-w-50 text-blue-50 text-center'}> &lt; AIEnhance /&gt; </h3>
      </div>
      <div className='text-xs text-gray-400 flex flex-col justify-center items-center gap-4 '>
        <p className='transition-all hover:text-white'>No copyrights reserved || All Images and icons are taken from other websites || Only for learning and educational purposes </p>
        <p >Image source : .
          <a href="http://www.pixelcut.ai" className='transition-all hover:text-white' target='_blank'>pixelcut.ai, </a>
          <a href="http://www.snapedit.app" className='transition-all hover:text-white' target='_blank'>snapedit.app</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
