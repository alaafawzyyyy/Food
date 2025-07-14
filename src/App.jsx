import "./App.css";
import React from "react";
import NavBar from "./components/nav/NavBar";
import Info from "./components/info/Info";
import { useState } from "react";
import FoodList from "./components/food/FoodList";
import Cart from "./components/cart/Cart";
import "./components/cart/Cart.css";

function App() {
  const [addedValue , setAddedValue] = useState(0);
  const [cart , setCart]= useState([]);
  const [isOpen,setIsOpen]=useState(false);

    function ShowCart(){
      setIsOpen(!isOpen);
    }

  function handleAddToCart(item) {
  const { name, price, id, amount } = item;
  setAddedValue(addedValue + amount);

  const exist = cart.find((x) => x.name === name);
  if (exist) {
    const updatedCart = cart.map((x) =>
      x.name === name ? { ...exist, amount: exist.amount + amount } : x
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, { name, amount, price, id }]);
  }
}


  return (
    <>
      <NavBar 
      addedValue={addedValue} 
      ShowCart={ShowCart}
      />
      <Info/>
      <FoodList 
      handleAddToCart={handleAddToCart} 
     />
      {isOpen &&
      <>
      <div className="overlay"></div>
      <Cart 
      cart={cart}
      setIsOpen={setIsOpen}
      setCart={setCart}
      setAddedValue={setAddedValue}/>
      </>
      }
    </>
  )
}
export default App;
