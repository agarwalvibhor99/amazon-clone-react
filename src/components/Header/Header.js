import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className={styles.header}>
      <Link to="/">
        <img
          className={styles.headerLogo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className={styles.headerSearch}>
        <input type="text" className={styles.headerSearchInput} />
        <SearchIcon className={styles.headerSearchIcon} />
      </div>

      <div className={styles.headerNav}>
        <Link to={!user && "/login"} className={styles.headerLink}>
          <div onClick={login} className={styles.headerOption}>
            <span className={styles.headerOptionLineOne}>
              Hello {user?.email}
            </span>
            <span className={styles.headerOptionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className={styles.headerLink}>
          <div className={styles.headerOption}>
            <span className={styles.headerOptionLineOne}>Returns</span>
            <span className={styles.headerOptionLineTwo}>& Orders</span>
          </div>
        </Link>

        <Link to="/login" className={styles.headerLink}>
          <div className={styles.headerOption}>
            <span className={styles.headerOptionLineOne}>Your</span>
            <span className={styles.headerOptionLineTwo}>Prime</span>
          </div>
        </Link>

        <Link className={styles.headerLink} to="/checkout">
          <div className={styles.headerOptionBasket}>
            <ShoppingBasketIcon className={styles.headerBasketIcon} />
            <span
              className={`${styles.headerOptionLineTwo} ${styles.headerBasketCount}`}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
