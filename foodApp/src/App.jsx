import { useEffect, useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
