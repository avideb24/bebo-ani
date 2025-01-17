import ButtonPrimary from "./Shared/ButtonPrimary";
import { RxExternalLink } from "react-icons/rx";


const ReadyToStart = () => {
    return (
        <div className="bg-[#cdea68] py-28 flex flex-col items-center uppercase text-[180px] font-bold relative z-20">
            <h1 className="tracking-tight leading-[170px]">ready</h1>
            <h1 className="tracking-tight leading-[170px]">to start</h1>
            <h1 className="tracking-tight leading-[170px]">the project?</h1>
            <div className="mt-8">
                <ButtonPrimary text={'Start The Project'} icon={RxExternalLink} />
            </div>
        </div>
    );
};

export default ReadyToStart;