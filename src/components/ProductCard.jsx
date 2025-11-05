export default function ProductCard({ product, inCart, onAddToCart }) {
  return (
    <div className="text-primary dark:text-white border p-4 rounded-lg shadow">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={onAddToCart}
        className={`mt-3 px-4 py-2 rounded text-white ${inCart ? "bg-red-500" : "bg-green-600"}`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
