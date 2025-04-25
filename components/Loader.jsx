import React from 'react'
import { BiLoader } from 'react-icons/bi'

const Loader = () => {
  return (
    // <div className='size-15 border-2 border-white border-b-0 border-r-0 animate-spin rounded-full'>
    <BiLoader size={30} className='invert animate-spin' />
    // </div>
  )
}

export default Loader
