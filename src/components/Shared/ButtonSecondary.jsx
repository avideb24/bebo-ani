import PropTypes from 'prop-types';


const ButtonSecondary = ({text}) => {
    return (
        <button className="px-4 py-2 border border-slate-400 rounded-full uppercase relative after:content-[''] after:absolute after:top-20 hover:after:-top-4 after:-left-2 after:w-[150%] after:h-20 after:bg-[#212121] after:rounded-full after:duration-300 overflow-hidden hover:text-white hover:border-[#212121] duration-300 z-0">
            <span className="relative z-10">{text}</span>
        </button>
    );
};

ButtonSecondary.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ButtonSecondary;