import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./images/logo.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
const Header = () => {
  const[bagState, setbagState]= useStateValue()
  const logout=async()=>{
    await signOut(auth)
  }

  return (
    <div className="header">
        <Link to='/'>
        <img alt="logo" className="header-logo" src={logo} />
        </Link>
      
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello {bagState?.user}</span>
          <span className="header-optionLineTwo">
           <Link to={!bagState.user && './login'} onClick={logout}>Sign {bagState.user ? 'out':'in'}</Link> </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
         <Link to='/checkout'>
         <ShoppingBagIcon /></Link> 
          <span className="header-optionLineTwo header-basketCount">{bagState.basket?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
