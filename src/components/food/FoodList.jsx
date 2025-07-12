import food from "./food";
import "./FoodList.css";
import "./FoodItem.css";
import FoodItem from "./FoodItem";


function FoodList() {
  return (
    <div className="foods">
      <ul>
        {food.map((item) => {
          return (
            <FoodItem item={item}/>
          );
        })}
      </ul>
    </div>
  );
}

export default FoodList;
