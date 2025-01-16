import { FiExternalLink } from "react-icons/fi";
import bannerVector from '../assets/banner-vector.jpg';


const Banner = () => {
    return (
        <div className="container">
            <div className="text-8xl font-bold uppercase py-28">
                <h1>
                    We create
                </h1>
                <div className="flex gap-1">
                    <img src={bannerVector} className="w-28 py-5 h-[105px] object-cover" alt="banner vector" />
                    <h1>eye-opening</h1>
                </div>
                <h1> presentations</h1>
            </div>
            <div className="flex justify-between items-center border-t-2 border-t-slate-400 py-4">
                <p>For public and private companies</p>
                <p>From the first pitch to IPO</p>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-1 border border-slate-400 rounded-full">Start Project</button>
                    <button className="px-2 py-2 border border-slate-400 rounded-full"><FiExternalLink /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;