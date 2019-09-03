import React, { useContext } from "react";
import { ThemeContext } from "../State/GlobalStateWrapper";

export interface IButtonProps {}
const Button: React.FC<IButtonProps> = () => {
    const [value, setValue] = useContext(ThemeContext);
    const btClick = () => {
        setValue({ ...value, test: "green" });
    };
    return (
        <>
            <button onClick={btClick}>test</button>
        </>
    );
};

export default Button;
