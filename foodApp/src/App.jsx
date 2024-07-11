import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
