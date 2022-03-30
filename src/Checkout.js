import React from "react";
import ad from "./images/ad.jpg";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Footer from './Footer'

const Checkout = () => {
  const [{basket,user},dipatch]= useStateValue()

  return (
    <>
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={ad} alt="ad"></img>
        <h2 className="checkout-title">
            {user}{user? `'s Shopping Basket`: 'Shopping Basket'}
       
          </h2>
         {basket.map(item=>{
           return  <CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}/>
         })}
      </div>

      <div className="checkout-right">
          <Subtotal />
          
      </div>
    </div>
    
      </>
  );
};

export default Checkout;
