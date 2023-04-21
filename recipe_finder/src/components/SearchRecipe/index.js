//  Input element - Be able to input a search term to find a desired recipe from the API
//  Submit button - Add a search button to send the request
//  Import a new useState
//  Set the new state to be input and setInput (initial state as empty string)
//  A function that saves the value of the input box to the input state
//

import { useState } from "react";
import "./searchRecipe.css";

function SearchRecipe({ getRecipe, addToList }) {
  const [search, setSearch] = useState("");

  return (
    <div id="search-recipe">
      <label>
        Search Recipes:
        <input
          type="text"
          placeholder="e.g. chicken"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </label>
      <button
        type="submit"
        onClick={() => {
          getRecipe(search);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchRecipe;
