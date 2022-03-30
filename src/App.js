import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from './Order'
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51KiWB8SFGbjYUwJC9RHYctrkSXl2UPq2AR0V8eNqj6pa1WCXt42mOBfuAYlXkKlttUpe06CGhKP8UTEbn7wzAPm200ghjdNie9"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch({
          type: "SET_USER",
          user: currentUser.email.slice(0, currentUser.email.lastIndexOf("@")),
        });
      } else {
        dispatch({ type: "SET_USER", user: "" });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[<Header />, <Home />,<Footer />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route path='/orders' element={[<Header />,<Order />,<Footer />]}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
