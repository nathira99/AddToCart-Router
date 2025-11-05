import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = total * 0.9; // 10% discount

  return (
    <div className="p-6 text-primary dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-3">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, "decrease")} className="px-2 bg-gray-300">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, "increase")} className="px-2 bg-gray-300">+</button>
                  </div>
                </div>
              </div>
              <div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="font-semibold">Subtotal: ${total.toFixed(2)}</p>
            <p className="text-green-600">10% Discount Applied</p>
            <h2 className="text-xl font-bold">Final Total: ${finalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
