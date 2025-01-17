import aboutImg from '../assets/about-img.jpg';
import ButtonPrimary from './Shared/ButtonPrimary';
import { FiArrowUpRight } from "react-icons/fi";


const About = () => {
    return (
        <div className="bg-[#cdea68] pb-10 relative z-10">
            <div className="container">
                <h2 className="text-5xl py-10 leading-[60px] pb-16 mb-4 border-b-2 border-b-slate-800">Bebo is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds</span>, <span className="underline">sell prod­ucts</span>, <span className="underline">ex­plain com­plex ideas</span>, and <span className="underline">hire great peo­ple</span>. </h2>
                <div className='flex justify-between'>
                    <div>
                        <h3 className="text-3xl pb-4">Our approach</h3>
                        <ButtonPrimary text={'Read More'} icon={FiArrowUpRight} /> 
                    </div>
                    <div>
                        <img src={aboutImg} className='rounded-xl' alt="about image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;