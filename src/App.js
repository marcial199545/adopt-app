// code is going to be here
const root = document.querySelector("#root");
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: 1 }, name),
        React.createElement("h2", { key: 2 }, animal),
        React.createElement("h2", { key: 3 }, breed)
    ]);
};
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { key: 4 }, "Adopt Me"),
        React.createElement(Pet, {
            key: 5,
            name: "Luna",
            animal: "Dog",
            breed: "labrador"
        }),
        React.createElement(Pet, {
            key: 6,
            name: "Doink",
            animal: "Cat",
            breed: "mixed"
        }),
        React.createElement(Pet, {
            key: 7,
            name: "Sam",
            animal: "Dog",
            breed: "German Shepperd"
        })
    ]);
};
ReactDOM.render(React.createElement(App), root);
