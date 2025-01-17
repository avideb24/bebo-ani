import ButtonSecondary from "./Shared/ButtonSecondary";
import ButtonPrimary from "./Shared/ButtonPrimary";
import { RiLoginCircleLine } from "react-icons/ri";


const Navbar = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="grid grid-cols-2 items-center">
                    <h2 className="text-blue-600 font-bold text-lg">BEBO</h2>
                    <div className="flex items-center justify-between">
                        <nav>
                            <ul className="flex items-center gap-4">
                                <li className="cursor-pointer hover:font-semibold duration-200">Home</li>
                                <li className="cursor-pointer hover:font-semibold duration-200">About</li>
                                <li className="cursor-pointer duration-300">Contact</li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-5">
                            <ButtonSecondary text="Sign Up" />
                            <ButtonPrimary text="Log In" icon={RiLoginCircleLine} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;