import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="text-primary dark:text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.some((item) => item.id === product.id)}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}
