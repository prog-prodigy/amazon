import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Footer from "./Footer";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { db } from './firebase'
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { CardElement } from "@stripe/react-stripe-js";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const[userId,setUserId]=useState('')
  const [card, setCard] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()
useEffect(()=>{
  onAuthStateChanged(auth, (currentUser => {
    setUserId(currentUser)
  }))
},[ ])
  
  const handlesubmit =  async(e) => {
    e.preventDefault();
    const docData = {
      basket: basket,
      user: user,
      amount: totalPrice.toFixed(2)
    }
   const userDataCollection = doc(db, 'data', `${userId.uid}`)
   await setDoc(userDataCollection, docData)
      .then((dispatch({ type: "EMPTY_BASKET" }))).then(navigate('/orders'))
      
  };
  const handleChange = (e) => {
    setCard(e.complete)
    console.log(e)
    setError(e.error)
  };

  let totalPrice = 0;
  basket.forEach((element) => {
    return (totalPrice += element.price);
  });
  return (
    <>
      <div className="payment">
        <div className="payment-container">
          <h1>
            Checkout(<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Delivery Adrress</h3>
            </div>
            <div className="payment-address">
              <p>{user}</p>
              <p>123 Developer's lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment-items">
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          </div>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Payment Section</h3>
            </div>
            <div className="payment-details">
              <form onSubmit={handlesubmit}>
                <CardElement type='number' onChange={handleChange} />
                <div className="payment-pricecontainer">
                  <h3>Order Total:Rs. {totalPrice.toFixed(2)}</h3>
                  <button disabled={!card || !basket.length || !user}>
                    <span>{user ? 'Buy Now' : "Please Login"}</span>
                  </button>
                </div>
                {error && <div>{error.code}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
