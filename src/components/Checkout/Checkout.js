import React from "react";
import styles from "./Checkout.module.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <img
          className={styles.checkoutAd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisement"
        />
        {basket?.length === 0 ? (
          <div>
            <h2> Your Shopping Cart is Empty </h2>
            <p>
              You have no items in your basket. To buy on or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className={styles.checkoutTitle}>Your Shopping Basket</h2>
            {basket?.map((item) => {
              console.log(item);

              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className={styles.checkoutRight}>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
