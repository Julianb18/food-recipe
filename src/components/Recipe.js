import React from "react";

export const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank">
        URL
      </a>
      <button>Ingredients</button>
    </div>
  );
};
