import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <section>
      <h1>Willkommen im Shop</h1>
      <Link to="/shop">Zum Shop</Link>
    </section>
  );
};

export default Home;
