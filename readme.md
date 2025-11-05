# 🛒 Add to Cart Task (React + Tailwind + Router)

A responsive Add-to-Cart web application built using **ReactJS**, **React Router**, and **Tailwind CSS**, with cart management and dynamic pricing using the **Fake Store API**.

---

## 🚀 Live Demo
🔗 [Deployed on Netlify](https://your-netlify-link-here.netlify.app)

---

## 📂 GitHub Repository
🔗 [GitHub Repo](https://github.com/your-username/add-to-cart-task)

---

## 🧠 Features
- Fetch products from [Fake Store API](https://fakestoreapi.com/).
- Responsive product grid layout.
- Add / Remove items from cart.
- Increase / Decrease product quantity.
- Dynamic total price with **10% discount** applied.
- Routing between **Product Page** and **Cart Page**.
- Context API for global state management.
- Clean and reusable component structure.

---

## 🧰 Tech Stack
| Technology | Purpose |
|-------------|----------|
| ReactJS | Frontend Framework |
| React Router | Routing between pages |
| Tailwind CSS | Styling and responsive design |
| JavaScript (ES6) | Logic and interactivity |
| Axios | API data fetching |
| Fake Store API | Product data source |
| Netlify | Deployment |

---

## 🏗️ Folder Structure

public/
├── index.html
src/
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│
├── context/
│ ├── CartContext.jsx
│
├── pages/
│ ├── Products.jsx
│ ├── Cart.jsx
│
├── App.jsx
├── index.js
├── index.css

---

## 🧾 API Reference  
**Fake Store API:**  
https://fakestoreapi.com/products

Returns sample products with:  
- `id`  
- `title`  
- `price`  
- `description`  
- `image`  
- `category`  

---

## 💰 Cart Logic Summary  
- **Add to Cart:** Adds a new product or toggles removal if it already exists.  
- **Remove from Cart:** Deletes a specific product from the cart.  
- **Increase/Decrease Quantity:** Adjusts product quantity (minimum = 1).  
- **Dynamic Total:** Automatically updates the total amount based on quantity.  
- **Discount:** A 10% discount is applied on the final total.  

---