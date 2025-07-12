function FoodItem({ item }) {
  return (
    <li className="food">
      <div>
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="price">{item.price}</p>
      </div>

      <div className="form">
        <div className="input">
          <label htmlFor={`ammount_${item.id}`}>Amount</label>
          <input id={`ammount_${item.id}`} type="text" />   
        </div>

        <button>+Add</button>
      </div>
    </li>
  );
}

export default FoodItem;
