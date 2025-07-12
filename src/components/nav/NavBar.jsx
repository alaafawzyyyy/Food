import "./NavBar.css";
import "./NavBar_Cart_Button.css";

function NavBar({addedValue}) {
  return (
    <>
      <nav>
        <h1>ReactMeals</h1>
        <button className="button">
          <span className="icon">
            <img src="/assets/cart-icon.svg" />
          </span>
          Your Cart
          <span className="badge">{addedValue}</span>
        </button>
      </nav>
      <div className="main-image">
        <img src="/assets/meals.jpg" />
      </div>
    </>
  );
}

export default NavBar;
