import React from "react";
import ProductCard from "./ProductCard";

const Gallery = () => {
 
const products = [
  {
    image: "https://picsum.photos/400/300?random=1",
    title: "Noise Smartwatch X1",
    price: 2499,
  },
  {
    image: "https://picsum.photos/400/300?random=2",
    title: "HP Pavilion Laptop",
    price: 54999,
  },
  {
    image: "https://picsum.photos/400/300?random=3",
    title: "Canon DSLR Camera",
    price: 37999,
  },
  {
    image: "https://picsum.photos/400/300?random=4",
    title: "Nike Running Shoes",
    price: 4499,
  },
  {
    image: "https://picsum.photos/400/300?random=5",
    title: "Sony Headphones",
    price: 2999,
  },
  {
    image: "https://picsum.photos/400/300?random=6",
    title: "Apple iPhone 15",
    price: 79999,
  },
];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Best Deals for You</h2>
      <div style={styles.gallery}>
        {products.map((item, i) => (
          <ProductCard
            key={i}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

// layout styles
const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f3f3f3",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    color: "#232f3e",
    marginBottom: "30px",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "25px",
  },
};

export default Gallery;
