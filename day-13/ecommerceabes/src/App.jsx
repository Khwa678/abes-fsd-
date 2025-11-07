import React, { useState } from "react";
import Product from "./Components/Product";
import "./App.css";

const Header = () => (
  <div className="header">
    <h1>Ecommerce Abes</h1>
  </div>
);

export default function App() {

  const [searchTerm, setSearchTerm] = useState("");

 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

 
  const handleSearchClick = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <Header />

    
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      {/* ✅ Body Section */}
      <div className="body">
        <h2>Welcome to Ecommerce Abes</h2>
        <p>Find the best products here!</p>
      </div>

      {/* ✅ Pass the searchTerm to Product */}
      <Product searchTerm={searchTerm} />

      <div className="footer">
        <p>&copy; 2024 Ecommerce Abes. All rights reserved.</p>
      </div>
    </>
  );
}
