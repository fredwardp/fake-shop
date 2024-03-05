import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Article from "./pages/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<Article />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
