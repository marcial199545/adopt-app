import React from "react";
import { render } from "react-dom";
import { generateId } from "./helpers.js";
import Pet from "./Pet.jsx";
const root = document.querySelector("#root");

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet key={generateId()} name="Luna" animal="Dog" breed="Labrador" />
            <Pet key={generateId()} name="Doink" animal="Cat" breed="Mixed" />
            <Pet key={generateId()} name="Mora" animal="Dog" breed="German Shepperd" />
        </div>
    );
};
render(<App />, root);
