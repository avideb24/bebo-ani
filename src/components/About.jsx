import aboutImg from '../assets/about-img.jpg';


const About = () => {
    return (
        <div className="bg-[#cdea68] rounded-2xl pb-10">
            <div className="container">
                <h2 className="text-5xl py-10 leading-[60px] pb-16 mb-4 border-b-2 border-b-slate-800">Bebo is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds</span>, <span className="underline">sell prod­ucts</span>, <span className="underline">ex­plain com­plex ideas</span>, and <span className="underline">hire great peo­ple</span>. </h2>
                <div className='flex justify-between'>
                    <div>
                        <h3 className="text-3xl">Our approach</h3>
                        <button className="flex items-center gap-8 bg-[#212121] text-white uppercase px-4 py-2 rounded-full mt-4">
                            Read More
                            <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                        </button>
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