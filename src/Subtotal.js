import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate()
  let totalPrice=0
  state.basket.forEach(element => {
    return totalPrice+=element.price
  });
  
  return (
    <div className="subtotal">
      <p>
        Subtotal ({state.basket.length} items): Rs.<strong> {totalPrice}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={()=>navigate('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
