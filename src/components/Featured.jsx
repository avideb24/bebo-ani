import { useState } from 'react';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import { GoDotFill } from "react-icons/go";
import { motion } from 'motion/react';

const Featured = () => {
    const [hoveredProject, setHoveredProject] = useState('');
    const [isHoverring, setIsHoverring] = useState(false);

    const handleMouseEnter = (title) => {
        setHoveredProject(title);
        setIsHoverring(true);
    };

    const handleMouseLeave = () => {
        setHoveredProject('');
        setIsHoverring(false);
    };


    return (
        <div className="relative z-10 bg-white py-10">
            <div className="container">
                <h2 className="text-6xl py-10 border-b-2 border-b-slate-400 mb-10">Featured Projects</h2>

                {/* Central dynamic title */}
                {hoveredProject && (
                    <h3 className='absolute w-full z-30 mt-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f1b727] text-8xl text-center font-bold uppercase pointer-events-none flex justify-center overflow-hidden'>
                        {
                            hoveredProject.split("").map((char, idx) =>
                                <motion.p key={idx} initial={{ y: "100%" }} animate={isHoverring ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.3, delay: idx * .05 }}>{char}</motion.p>
                            )
                        }
                    </h3>
                )}

                <div className='grid grid-cols-2 items-center gap-8 relative'>
                    <div
                        onMouseEnter={() => handleMouseEnter('Cardboard')}
                        onMouseLeave={handleMouseLeave}
                        className="relative group cursor-pointer"
                    >
                        <h2 className='flex items-center gap-1 uppercase'>
                            <GoDotFill /> Cardboard Spaceship
                        </h2>
                        <div className='group-hover:scale-95 rounded-xl duration-500 overflow-hidden'>
                            <img src={projectImg1} className='w-full h-full group-hover:scale-110 duration-500 rounded-xl mt-4 mb-1' alt="Vise" />
                        </div>
                        <div className='flex items-center gap-3 py-3'>
                            <button className='button uppercase'>Branded template</button>
                            <button className='button uppercase'>sales deck</button>
                            <button className='button uppercase'>social media templates</button>
                        </div>
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('Vise')}
                        onMouseLeave={handleMouseLeave}
                        className="relative group cursor-pointer"
                    >
                        <h2 className='flex items-center gap-1 uppercase'>
                            <GoDotFill /> Vise
                        </h2>
                        <div className='group-hover:scale-95 rounded-xl duration-500 overflow-hidden'>
                            <img src={projectImg2} className='w-full h-full group-hover:scale-110 duration-500 rounded-xl mt-4 mb-1' alt="Vise" />
                        </div>
                        <div className='flex items-center gap-3 py-3'>
                            <button className='button uppercase'>pitch deck</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
