import React from 'react'
import Step from './Step'

const stepsInfo = [
  {
    image: "/assets/Step_1.png",
    title: "1. Upload an Image",
    subtitle: "Click Upload Image or Drag and Drop the image you want to enhance"
  },
  {
    image: "/assets/Step_2.png",
    title: "2. Compare",
    subtitle: "Compare before and after, this image enhancer works best on pictures with people as the main subject"
  },
  {
    image: "/assets/Step_3.png",
    title: "3. Download and Share",
    subtitle: "Click the button to download it. It's that simple"
  }
];

const Steps = () => {
  return (
    <div className='px-2 md:px-12 py-2 grid justify-center items-center gap-2 md:gap-10 grid-cols-1 md:grid-cols-3'>
      {stepsInfo.map(item => {
        return (
          <Step key={item.title} image={item.image} title={item.title} subtitle={item.subtitle} />
        )
      })}
    </div>
  )
}

export default Steps
