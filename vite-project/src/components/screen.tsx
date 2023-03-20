// @ts-ignore
import { Textfit } from "react-textfit";
import "./Screen.css";

// @ts-ignore

const Screen = ({ value }) => {
    return (
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>

    );
};

export default Screen;