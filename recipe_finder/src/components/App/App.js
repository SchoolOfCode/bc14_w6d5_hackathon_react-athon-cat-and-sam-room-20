/* PASTED FROM TEST RUN
// fetching data from https://www.themealdb.com/api/json/v1/1/random.php
// main ingredient https://www.themealdb.com/api/json/v1/1/filter.php?i=${search} 
// show it in the console
// show the data on the webpage

async function getRecipe() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  let data = response.json();
  console.log(data);
}

getRecipe();
*/

// Take api object and save in a resultsList useState

import React, { useState } from "react";
import SearchRecipe from "../SearchRecipe/index.js";
import "./App.css";
import RecipeList from "../RecipeList/index.js";
import logo from "./assets/logo.png";

// API function

function App() {
  const [resultsList, setresultsList] = useState([]);
  // Function that will add our data to the array

  async function getRecipe(search) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    let data = await response.json();
    let mealSuggestions = data.meals;
    setresultsList([...mealSuggestions]);
  }

  console.log(resultsList);

  return (
    <div className="App">
      <section>
        <img src={require("./assets/logo2.png")} alt="logo" />
        <h1>Plateful of Pleasure</h1>
      </section>
      <p>To minimise food waste and maximise food based joy.</p>
      <SearchRecipe getRecipe={getRecipe} />
      <RecipeList resultsList={resultsList} />
    </div>
  );
}

export default App;
