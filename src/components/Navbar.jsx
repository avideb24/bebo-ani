import { Button } from "antd";


const Navbar = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-blue-600 font-bold text-lg">BEBO</h2>
                    <nav>
                        <ul className="flex items-center gap-4">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-5">
                        <Button type="primary">Sign Up</Button>
                        <Button>Log In</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;