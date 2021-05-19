import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket, user}] = useStateValue()
  const login = () => {
    if(user) {
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.persuadersindia.com/wp-content/uploads/2020/06/Slide-2_Amazon.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__seachInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__headerOptionLineOne">Hello {user?.email}</span>
            <span className="header__headerOptionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__headerOptionLineOne">Returns</span>
            <span className="header__headerOptionLineTwo"> & Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__headerOptionLineOne">Your</span>
            <span className="header__headerOptionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__headerOptionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Header;
