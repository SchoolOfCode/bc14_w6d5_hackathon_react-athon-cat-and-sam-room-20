// .map(resultsList state) and display <Recipe/> components
// rendering: Title and <Recipe />
// props (recipeList)
import Recipe from "../Recipe/index";
import './recipeList.css'

// show a Recipe component for eact index of the resultsList

/* {results.map((e) => (
    <Recipe title={e.} />
))}
*/

function RecipeList({ resultsList }) {
  return (
    <div id="recipe-list">
      <h2>Here are our suggestions:</h2>
      <div id="list">
      {resultsList.map((e) => (
        <Recipe id={e.idMeal} title={e.strMeal} image={e.strMealThumb} />
      ))}
      </div>
    </div>
  );
}

export default RecipeList;
