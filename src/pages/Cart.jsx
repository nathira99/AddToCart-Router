import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = total * 0.9; // 10% discount

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, "decrease")} className="px-3 py-1 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, "increase")} className="px-3 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-accent">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="font-semibold text-gray-700">Subtotal: ${total.toFixed(2)}</p>
            <p className="text-secondary font-medium">10% Discount Applied</p>
            <h2 className="text-2xl font-bold text-primary mt-2">Final Total: ${finalPrice.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}
