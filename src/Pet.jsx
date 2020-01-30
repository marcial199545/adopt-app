import React from "react";
import { generateId } from "./helpers";
export default function Pet({ name, animal, breed }) {
    return (
        <div>
            <h1 key={generateId()}>Name: {name}</h1>
            <h2 key={generateId()}>Animal: {animal}</h2>
            <h2 key={generateId()}>Breed: {breed}</h2>
        </div>
    );
}
