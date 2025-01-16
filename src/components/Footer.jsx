

const Footer = () => {
    return (
        <div className="w-full pt-20 pb-12 bg-white relative z-30">
            <div className="container">
                <div className="flex justify-between items-start">
                    {/* Left Section */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-5xl font-bold">EYE-<br />OPENING</h1>
                    </div>

                    {/* Center Section */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-5xl font-bold">PRESENTATIONS</h1>
                        <div className="mt-10 space-y-2">
                            <div>
                                <span className="font-bold">S:</span>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Instagram</a></li>
                                    <li><a href="#" className="hover:underline">Behance</a></li>
                                    <li><a href="#" className="hover:underline">Facebook</a></li>
                                    <li><a href="#" className="hover:underline">Linkedin</a></li>
                                </ul>
                            </div>
                            <div>
                                <span className="font-bold">L:</span>
                                <ul className="space-y-1">
                                    <li>202-1965 W 4th Ave</li>
                                    <li>Vancouver, Canada</li>
                                    <li>30 Chukarina St</li>
                                    <li>Lviv, Ukraine</li>
                                </ul>
                            </div>
                            <div>
                                <span className="font-bold">E:</span>
                                <p>hello@ochi.design</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-2 pt-16">
                        <span className="font-bold">M:</span>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Our work</a></li>
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Insights</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between pt-16">
                    <h3 className="font-bold text-lg">BEBO</h3>
                    <p className="opacity-50">© bebo design 2025. <span className="hover:underline cursor-pointer">Legal Terms</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
