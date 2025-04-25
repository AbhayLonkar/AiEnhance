import React, { useState } from 'react'
import InputFile from "./InputFile.jsx";
import PreviewImage from "./PreviewImage.jsx";

const Main = () => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [enhancedImage, setEnhancedImage] = useState("");

    return (<>
        <div className={"w-full items-center justify-center grid md:grid-cols-2 grid-cols-1 md:p-14 p-1 pt-10 "}>
            <div className={" flex  justify-center flex-col p-5 h-130 gap-2 "}>
                <div className={'flex justify-between flex-wrap w-full gap-1 '}>
                    <video className={'object-cover rounded-2xl '} autoPlay muted loop width={'48%'}>
                        <source src={"/assets/upscaler.mp4"} type="video/mp4" />
                    </video>
                    <video className={'object-cover rounded-2xl  '} autoPlay muted loop width={'48%'}>
                        <source src={"/assets/upScaler2.mp4"} type="video/mp4" />
                    </video>
                </div>
                <h1 className={'text-white text-4xl font-bold'}>
                    Upscale Image quality with <span className={'text-blue-600'}>AI</span>
                </h1>
                <p className={'text-white text-lg'}>Effortlessly enhance and upscale your photo to get higher resolution image with one click</p>
            </div>
            <div className={" flex md:items-center justify-center md:h-130"}>
                <InputFile setImage={setImage} setLoading={setLoading} setEnhancedImage={setEnhancedImage} />
            </div>
        </div>
        {image && <PreviewImage image={image} setImage={setImage} loading={loading} setLoading={setLoading} enhancedImage={enhancedImage} />}
    </>
    )
}

export default Main
