import "./Button.css";

// @ts-ignore
const Button = ({ className, value, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;