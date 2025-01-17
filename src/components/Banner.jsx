import bannerVector from '../assets/banner-vector.jpg';
import { motion } from "motion/react";
import ButtonPrimary from "./Shared/ButtonPrimary";
import { RxExternalLink } from "react-icons/rx";


const Banner = () => {

    return (
        <div data-scroll data-scroll-speed="-0.7" className="relative z-0">
            <div className="container">
                <div className="text-8xl font-bold uppercase py-28">
                    <h1>
                        We create
                    </h1>
                    <div className="flex gap-1">
                        <motion.img initial={{ width: 0 }} animate={{ width: '112px' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }} src={bannerVector} className="w-28 py-5 h-[105px] object-cover" alt="banner vector" />
                        <h1>eye-opening</h1>
                    </div>
                    <h1> presentations</h1>
                </div>
                <div className="flex justify-between items-center border-t-2 border-t-slate-400 py-4">
                    <p>For public and private companies</p>
                    <p>From the first pitch to IPO</p>
                    <ButtonPrimary text={'Start Project'} icon={RxExternalLink} />
                </div>
            </div>
        </div>
    );
};

export default Banner;