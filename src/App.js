// code is going to be here
import React from "react";
import { render } from "react-dom";
import { generateId } from "./helpers.js";
import Pet from "./Pet";
const root = document.querySelector("#root");

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: generateId() }, "Adopt Me"),
        React.createElement(Pet, {
            key: generateId(),
            name: "Luna",
            animal: "Dog",
            breed: "labrador"
        }),
        React.createElement(Pet, {
            key: generateId(),
            name: "Doink",
            animal: "Cat",
            breed: "mixed"
        }),
        React.createElement(Pet, {
            key: generateId(),
            name: "Sam",
            animal: "Dog",
            breed: "German Shepperd"
        })
    ]);
};
render(React.createElement(App), root);
