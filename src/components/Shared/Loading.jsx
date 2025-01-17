import { BallTriangle } from "react-loader-spinner";


const Loading = () => {


    return (
        <div className="bg-white w-full h-screen flex justify-center items-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#004d43"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;