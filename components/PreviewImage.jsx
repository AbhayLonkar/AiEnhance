import React, {useEffect} from 'react'
import Loader from './Loader'

const PreviewImage = ({ image, setImage, loading, setLoading, enhancedImage}) => {
    useEffect(() => {
        if(enhancedImage) {
            setLoading(false);
        }
    }, [enhancedImage]);


    const downloadImage = async () => {
        const response = await fetch(enhancedImage);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = "download.png";
        link.click();
        window.URL.revokeObjectURL(url);
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-10 justify-center items-center  rounded-xl p-2 shadow'>
      <div className='justify-center items-center flex flex-col md:border-r border-white bg-[#131313] p-2 gap-4 h-130'>
        <p className='text-white text-lg border p-1 rounded-lg px-2'>Previous image</p>
        <img src={image} alt="User Image" className='h-100 object-cover' />
        <button className='text-white bg-red-600 p-1 w-22 rounded-md hover:cursor-pointer hover:bg-red-700' onClick={() => setImage("")}>RESET</button>
      </div>
      <div className='justify-center items-center flex flex-col md:border-l border-white bg-[#131313] p-2 gap-4 h-130'>
        {loading && <Loader />}

        {
          enhancedImage && !loading && <>
            <p className='text-white text-lg border p-1 px-2 rounded-lg'>Enhanced image</p>
            <img src={enhancedImage} alt="Enhanced Image" className='h-100 object-cover' loading="lazy" />
            <button className='text-white bg-blue-600 p-1 w-22 rounded-md hover:cursor-pointer hover:bg-blue-700' onClick={downloadImage}>DOWNLOAD</button>
          </>
        }
      </div>
    </div>
  )
}

export default PreviewImage
