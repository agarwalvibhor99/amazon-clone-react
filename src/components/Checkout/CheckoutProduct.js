import React from "react";
import styles from "./CheckoutProduct.module.css";
import { useStateValue } from "../../context/StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, title, image, price, rating);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.checkoutProductImage} src={image} alt={title} />

      <div className={styles.checkoutProductInfo}>
        <p className={styles.checkoutProductTitle}>{title}</p>

        <p className={styles.checkoutProductPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className={styles.checkoutProductRating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐️</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
