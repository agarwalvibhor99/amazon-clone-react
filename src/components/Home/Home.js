import React from "react";
import styles from "./Home.module.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className={styles.home}>
      <img
        className={styles.homeImage}
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonBooksMarketing/LandingPage/banner_4star_3000x1122._CB1198675309_.jpg"
        //"https://images-eu.ssl-images-amazon/com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Banner Image"
      />

      <div className={styles.homeRow}>
        <Product
          id="1234213"
          title="The Whatever it is"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Nwdc+fglL._AC_SY200_.jpg"
        />
        <Product
          id="1234213"
          title="The Whatever it is"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Nwdc+fglL._AC_SY200_.jpg"
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          id="1234213"
          title="The Whatever it is"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Nwdc+fglL._AC_SY200_.jpg"
        />
        <Product
          id="1234213"
          title="The Whatever it is"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Nwdc+fglL._AC_SY200_.jpg"
        />
        <Product
          id="1234213"
          title="The Whatever it is"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Nwdc+fglL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
