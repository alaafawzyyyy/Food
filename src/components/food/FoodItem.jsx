import { useState } from "react";
import "./FoodItem.css";

function FoodItem({ item, handleAddToCart }) {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleClick = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    handleAddToCart({ ...item, amount: Number(amount) });

    setAmount(""); // ← تفضية الخانة
  };

  return (
    <li className="food">
      <div>
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="price">${item.price}</p>
      </div>

      <div className="form">
        <div className="input">
          <label htmlFor={`amount_${item.id}`}>Amount</label>
          <input
            id={`amount_${item.id}`}
            type="number"
            min="1"
            value={amount}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleClick}>+ Add</button>
      </div>
    </li>
  );
}

export default FoodItem;
