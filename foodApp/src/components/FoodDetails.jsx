import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6b0655a8fa7a47f8a7923f85996e9b82";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();

      setFood(data);
      console.log(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱{food.readyInMinutes} Minutes</strong>
          </span>
          <strong>
            <span>Servers {food.servings}</span>
            <span>{food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}</span>
            <span>{food.vegan ? "🐄Vegan" : ""}</span>
          </strong>
        </div>
        <div>
          <strong>
            {" "}
            $<span>{food.pricePerServing / 100} Per serving</span>{" "}
          </strong>
        </div>
        <h1>Ingredients</h1>

        {food.extendedIngredients.map((item) => (
          <div>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt=""
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        ))}
        <h1>Instructions</h1>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
