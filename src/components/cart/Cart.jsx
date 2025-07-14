import "./Cart.css";

function Cart({cart,setIsOpen,setCart,setAddedValue}) {

    return (
  <li className="cart-popup"> 
    <div className="cart-items">
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="details">
            <h2>{item.name}</h2>
            <span className="price">${item.price}</span>
            <span className="amount">x{item.amount}</span>
          </div>
          <div className="actions">
            <button 
               className="buttonn"
               onClick={()=>setCart(
               (prevCart)=>prevCart.map(
                (product)=>product.id===item.id && product.amount>1?
                {...product , amount:product.amount-1}:product ) )}>
                   -
            </button>

            <button 
                className="buttonn"
                onClick={()=>setCart(
                (prevCart)=>prevCart.map(
                (product)=>product.id===item.id ?
                {...product , amount:product.amount+1}:product))}>
                  +
            </button>
          </div>
        </div>
      ))}

     <div className="total-amount">
     <span>Total Amount</span>
     <span>${cart.reduce((acc, item)=>
      acc + item.price * item.amount, 0)
      .toFixed(2)}</span>
</div>

    </div>

    <div className="cart-buttons">
      <button 
        className="close-btn"
        onClick={()=>setIsOpen(false)}>
            Close
      </button>

      <button 
      className="order-btn"
        onClick={()=>{
            setCart([]);
            if(cart.length>0)
            alert("Order placed successfully!")
            else
            alert("Your cart is empty!");
            setAddedValue(0);
            setIsOpen(false)
        }}>
        Order</button>
    </div>
  </li>
);
}

 export default Cart;