import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white dark:text-primary p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Shop</Link>
      <Link to="/cart" className="relative">
        Cart
        <span className="ml-2 bg-white text-blue-600 px-2 py-0.5 rounded-full text-sm">
          {cart.length}
        </span>
      </Link>
    </nav>
  );
}
