import { useEffect, useState } from "react";
import "./Article.css";
import { Link, useParams } from "react-router-dom";
const Article = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((myData) => setData(myData))
      .catch((error) =>
        console.log("Daten können nicht geladen werden", error)
      );
  }, []);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setFilter(find);
  }, [data]);

  return (
    <section className="article_section">
      {filter ? (
        <div>
          <Link to="/">back to Home</Link>
          <div className="img_wrapper">
            <img src={filter.image} alt="" />
            <p>{`€${filter.price}`}</p>
          </div>
          <h2>{filter.title}</h2>
          <p>{filter.description}</p>
        </div>
      ) : (
        <p>"Loading"</p>
      )}
    </section>
  );
};

export default Article;
