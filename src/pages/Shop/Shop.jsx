import { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
const Shop = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setShopData(data))
      .catch((error) =>
        console.error("Daten konnten nicht geladen werden", error)
      );
  });

  return (
    <section className="shop_wrapper">
      <h1>Willkommen</h1>
      <div className="shop_grid">
        {shopData ? (
          shopData.map((item, index) => (
            <div key={index}>
              <div className="img_wrapper">
                <img src={item.image} alt="" />
              </div>
              <p>{item.description}</p>
              <p>{`${item.price} €`}</p>
              <Link to={`/shop/${item.id}`}>Show more</Link>
            </div>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </section>
  );
};

export default Shop;
