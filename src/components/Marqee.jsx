import { motion } from "motion/react"


const Marqee = () => {
    return (
        <div className="relative z-10">
            <div className="w-full py-20 bg-[#004d43] rounded-t-2xl mt-10">
                <div className="border-y-2 border-slate-400 text-9xl font-bold flex whitespace-nowrap overflow-hidden uppercase text-white pb-1">
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}}>We are bebo&nbsp;</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}}>We are bebo&nbsp;</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 3}}>We are bebo&nbsp;</motion.h1>
                </div>
            </div>
        </div>
    );
};

export default Marqee;