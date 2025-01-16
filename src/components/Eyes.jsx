import { useEffect, useState } from 'react';
import eyeBg from '../assets/eye-bg.png';


const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angel - 180)
        })
    }, [rotate]);

    return (
        <div className="container">
            <div className='w-full h-screen overflow-hidden relative'
                style={{
                    backgroundImage: `url(${eyeBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} >
                <div className='w-1/2 py-10 bg-green-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-6'>
                    <div className='w-40 h-40 bg-white rounded-full flex justify-center items-center'>
                        <div className='w-2/3 h-2/3 rounded-full bg-black flex justify-center items-center relative'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div className='w-4 h-4 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-40 h-40 bg-white rounded-full flex justify-center items-center'>
                        <div className='w-2/3 h-2/3 rounded-full bg-black flex justify-center items-center relative'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div className='w-4 h-4 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;