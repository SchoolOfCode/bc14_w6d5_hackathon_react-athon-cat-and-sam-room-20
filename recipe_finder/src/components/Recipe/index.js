import "./recipe.css";

function Recipe({ id, title, image }) {
  return (
    <div id="recipe">
      <h2>{title}</h2>
      <img src={image} alt={title}></img>
    </div>
  );
}

export default Recipe;
