import React from "react";
import { generateId } from "./helpers";
export default function Pet({ name, animal, breed }) {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: generateId() }, name),
        React.createElement("h2", { key: generateId() }, animal),
        React.createElement("h2", { key: generateId() }, breed)
    ]);
}
