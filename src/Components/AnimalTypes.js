import React, { useState } from "react";
import "./AnimalTypes.css";


const AnimalTypes = () => {
  const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];
  const [input, setInput] = useState("");
  const [addAnimal, setAddAnimal] = useState(animalTypes);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addAnimal.includes(input)) return;
    setAddAnimal([...addAnimal, input]);
    setInput("");
  };

  const removeAnimal = (event) => {
    setAddAnimal(() => {
      return addAnimal.filter((animal) => animal !== event.target.value);
    });
  };

  const getAnimals = addAnimal.map((animal) => (
    <li>
      <p>{ animal }</p>
      <button value={ animal } onClick={ removeAnimal }>-</button>
    </li>
  ));

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={ input }
            onChange={ handleChange }
          />
        </label>
        <input type="submit" />
      </form>
        <ol>{ getAnimals }</ol>
    </section>
  );
};

export default AnimalTypes;