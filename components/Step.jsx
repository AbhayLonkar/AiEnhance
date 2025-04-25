import React from 'react'

const Step = (props) => {
  return (
    <div className='flex flex-col gap-1 md:h-80'>
      <div className='w-full flex justify-center items-center'>
        <img src={props.image} alt="Step 1" className='object-center w-full' />
      </div>
      <p className='text-white font-bold'>{props.title}</p>
      <p className='text-white text-sm'>{props.subtitle}</p>
    </div>
  )
}

export default Step
