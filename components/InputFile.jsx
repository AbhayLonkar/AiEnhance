import axios from 'axios';
import React, { useRef } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

const InputFile = ({ setImage, setLoading, setEnhancedImage }) => {
    const input = useRef();
    const handleFileInput = () => {
        input.current.click();
    }
    const handleFileChange = async (e) => {
        const image = e.target.files[0];
        setImage(URL.createObjectURL(image));
        setLoading(true);

        // scroll to image preview
        scrollBy(0,900);

        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;

        const form = new FormData();
        form.append('upscale_factor', '2');
        form.append('format', 'JPG');
        form.append('image', image);

        const data = await axios.post(API_URL, form, {
            headers: {
                accept: 'application/json',
                'X-Picsart-API-Key': API_KEY,
                'Content-Type': 'multipart/form-data'
            }
        });
        setEnhancedImage(data.data.data.url);
    }

    return (
        <div className={'h-50 w-[90%] md:h-[100%] rounded-2xl flex justify-center items-center border-2 border-dashed border-[#ddd] bg-[#4d484842]'}>
            <input type={'file'} className={'hidden'} ref={input} name={'inputFile'} onChange={() => handleFileChange(event)} />
            <button className={'bg-blue-700 p-4 rounded-xl text-white cursor-pointer hover:bg-blue-600 flex items-center gap-2 justify-center'}
                onClick={handleFileInput}
            >
                <IoCloudUploadOutline />  Upload Image
            </button>
        </div>
    )
}
export default InputFile
