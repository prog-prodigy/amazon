import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./images/logo.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
const Header = () => {
  const [bagState, setbagState] = useStateValue();
  const [cartPage, setCartPage] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    setCartPage((prev) => !prev);
    if (!bagState.user && cartPage) {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" className="header-logo" src={logo} />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello {bagState?.user}</span>
          <span
            onClick={logout}
            className="header-optionLineTwo"
            style={{ cursor: "pointer" }}
          >
            Sign {bagState.user ? "out" : "in"}
          </span>
        </div>
        <div style={{cursor:'pointer'}} className="header-option">
           <span className="header-optionLineOne">Returns</span>
            <span onClick={()=>navigate('/orders')} className="header-optionLineTwo">& Orders</span>
          
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <Link to="/checkout">
            <ShoppingBagIcon />
          </Link>
          <span className="header-optionLineTwo header-basketCount">
            {bagState.basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
