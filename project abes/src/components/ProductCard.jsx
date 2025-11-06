import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.price}>₹{price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#B12704", // Amazon red price color
    margin: "8px 0",
  },
  button: {
    backgroundColor: "#FFD814", // Amazon yellow
    border: "1px solid #FCD200",
    borderRadius: "8px",
    padding: "8px 12px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default ProductCard;
