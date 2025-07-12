import food from "./food";
import "./FoodList.css";
import FoodItem from "./FoodItem";


function FoodList({handleAddToCart,handleAmount}) {
  return (
    <div className="foods">
      <ul>
        {food.map((item , index) => {
          return (
            <FoodItem 
            key={index} 
            item={item} 
            handleAddToCart={handleAddToCart}
            handleAmount={handleAmount}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default FoodList;
