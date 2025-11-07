import React from "react";
import "./Product.css";

const Product = ({ searchTerm }) => {
  const products = [
    {
      name: "Smartphone",
      price: "₹15,000",
      description: "Latest 5G smartphone with great camera",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Headphones",
      price: "₹2,000",
      description: "Wireless noise-cancelling headphones",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Laptop",
      price: "₹55,000",
      description: "High-performance laptop for work and gaming",
      image: "https://via.placeholder.com/200",
    },
  ];

 
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h3>Available Products</h3>
      <div className="product-grid">
        {/* ✅ Step 2: Show filtered results */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
};

export default Product;
