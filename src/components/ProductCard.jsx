export default function ProductCard({ product, inCart, onAddToCart }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="font-semibold mt-3 text-gray-900 text-lg">{product.title}</h2>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      <p className="text-accent font-bold text-lg mt-2">${product.price}</p>
      <button
        onClick={onAddToCart}
        className={`mt-4 w-full py-2 rounded-lg text-white font-medium transition ${
          inCart ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-secondary"
        }`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
