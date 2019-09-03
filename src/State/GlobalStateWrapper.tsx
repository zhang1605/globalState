import React, { createContext, useState } from "react";

export interface ITheme {
    backgroundColor: string;
    color: string;
}

export const ThemeContext = createContext<any[]>([]);

export const ContextWrapper: React.FC = props => {
    const [theme, setTheme] = useState<ITheme>({
        backgroundColor: "black",
        color: "white"
    });

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};
