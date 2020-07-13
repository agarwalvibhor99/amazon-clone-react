import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
const Header = () => {
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
        <Link to="/login" className={styles.headerLink}>
          <div className={styles.headerOption}>
            <span className={styles.headerOptionLineOne}>Hello</span>
            <span className={styles.headerOptionLineTwo}>Sign In</span>
          </div>
        </Link>

        <Link to="/login" className={styles.headerLink}>
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
              0
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
