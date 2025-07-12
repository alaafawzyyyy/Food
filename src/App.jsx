import "./App.css";
import NavBar from "./components/nav/NavBar";
import Info from "./components/info/Info";
import { useState } from "react";
import FoodList from "./components/food/FoodList";

function App() {
  const [amount, setAmount] = useState(0);
  const [addedValue , setAddedValue] = useState(0);

    function handleAmount(e){
    const value=e.target.value;
    setAmount(()=>Number(value))
  }

  function handleAddToCart() {
    setAddedValue(addedValue + amount);
    setAmount(0);
  }
  
  return (
    <>
      <NavBar addedValue={addedValue}/>
      <Info/>
      <FoodList 
      handleAddToCart={handleAddToCart} 
      handleAmount={handleAmount}/>
    </>
  )
}
export default App;
