import React from "react";
import { ThemeContext } from "../State/GlobalStateWrapper";

const App: React.FC = props => {
    const [value] = React.useContext(ThemeContext);
    return (
        <div className="App">
            <h1>Home Page</h1>
            <pre>{JSON.stringify(value)}</pre>
        </div>
    );
};

export default App;
