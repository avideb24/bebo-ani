import PropTypes from 'prop-types';


const ButtonPrimary = ({text, icon:Icon}) => {
    return (
        <button className="flex items-center gap-3 bg-[#424242] hover:bg-[#212121] text-white uppercase pl-8 pr-2 py-2 rounded-full group duration-200 text-sm font-normal">
            {text}
            <span className="inline-block p-1 scale-50 group-hover:scale-100 duration-200 bg-white rounded-full">
                <span className="text-black text-xl opacity-0 group-hover:opacity-100 duration-200"><Icon /></span>
            </span>
        </button>   
    );
};

ButtonPrimary.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export default ButtonPrimary;