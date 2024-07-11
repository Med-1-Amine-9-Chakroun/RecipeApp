import { useEffect, useState } from "react";

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
      <div>
        <h1>{food.title}</h1>

        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>⏱{food.readyInMinutes} Minutes</strong>
          </span>
          <span>{food.servings}</span>
          <span>{food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐄Vegan" : ""}</span>
          {foodId}
        </div>
        <div>
          $<span>{food.pricePerServing}</span>
        </div>
        <div>
          <h1>Instructions</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
