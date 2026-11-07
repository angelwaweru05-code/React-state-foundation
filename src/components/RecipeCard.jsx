import React, { useState } from 'react';

function RecipeCard({ recipe }) {
  // useState gives this card its own independent likes counter.
  // `likes` holds the current value (starting at 0) and `setLikes` is the
  // only way to change it. Because state is local to each RecipeCard,
  // liking one recipe does not affect the likes of the others.
  const [likes, setLikes] = useState(0);

  function handleLike() {
    // Read the current `likes` value from this render and schedule an update
    // with a value one higher. React stores the new value, then re-renders
    // RecipeCard so the UI shows the updated total. Using the updater form
    // (setLikes((current) => current + 1)) is safer when updates are batched.
    setLikes(likes + 1);
  }
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
}
export default RecipeCard;