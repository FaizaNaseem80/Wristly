import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 style={{ color: "white", textAlign: "center", padding: "100px" }}>Product not found</h2>;

  const colors = {
    navyDark: "#050B13",
    navyCard: "#001A26",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    slate: "#707a7e",
    border: "rgba(212, 175, 55, 0.2)"
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: "100vh",
    backgroundColor: colors.navyDark,
    color: colors.silver,
    fontFamily: "'Inter', sans-serif",
    padding: "40px 5%",
    gap: "60px"
  };

  const imageContainerStyle = {
    background: `radial-gradient(circle, ${colors.navyCard} 0%, ${colors.navyDark} 100%)`,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    border: `1px solid ${colors.border}`,
    height: "600px",
    position: "sticky",
    top: "120px"
  };

  const infoStyle = {
    padding: "20px 0"
  };

  const priceStyle = {
    fontSize: "32px",
    color: colors.gold,
    fontWeight: "300",
    marginBottom: "30px",
    fontFamily: "'Playfair Display', serif"
  };

  const specTableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "40px",
    fontSize: "14px"
  };

  const specRowStyle = {
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  };

  const buttonStyle = {
    width: "100%",
    padding: "20px",
    backgroundColor: colors.gold,
    color: colors.navyDark,
    border: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    cursor: "pointer",
    marginTop: "40px",
    transition: "0.3s"
  };

  return (
    <div style={containerStyle}>
      {/* Left: Dramatic Image Gallery */}
      <div style={imageContainerStyle}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }} 
        />
      </div>

      {/* Right: Details & Actions */}
      <div style={infoStyle}>
        <span style={{ color: colors.gold, letterSpacing: "3px", fontSize: "12px", textTransform: "uppercase" }}>
          In Stock • Complimentary Shipping
        </span>
        <h1 style={{ fontSize: "48px", fontWeight: "300", margin: "10px 0", letterSpacing: "2px", fontFamily: "'Playfair Display', serif" }}>
          {product.name}
        </h1>
        <p style={priceStyle}>${product.price.toLocaleString()}</p>
        
        <p style={{ lineHeight: "1.8", color: colors.slate, fontSize: "16px" }}>
          A masterpiece of horological engineering. This timepiece features a hand-assembled 
          movement housed in a polished surgical-grade steel case, designed for the modern 
          enthusiast who values precision above all.
        </p>

        <table style={specTableStyle}>
          <tbody>
            <tr style={specRowStyle}>
              <td style={{ padding: "15px 0", color: colors.slate }}>MOVEMENT</td>
              <td style={{ padding: "15px 0", textAlign: "right" }}>Automatic Calibre W-01</td>
            </tr>
            <tr style={specRowStyle}>
              <td style={{ padding: "15px 0", color: colors.slate }}>CASE SIZE</td>
              <td style={{ padding: "15px 0", textAlign: "right" }}>41mm</td>
            </tr>
            <tr style={specRowStyle}>
              <td style={{ padding: "15px 0", color: colors.slate }}>WATER RESISTANCE</td>
              <td style={{ padding: "15px 0", textAlign: "right" }}>100 Meters / 10 ATM</td>
            </tr>
            <tr style={specRowStyle}>
              <td style={{ padding: "15px 0", color: colors.slate }}>STRAP</td>
              <td style={{ padding: "15px 0", textAlign: "right" }}>Brushed Oyster Steel</td>
            </tr>
          </tbody>
        </table>

        <button 
          style={buttonStyle}
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
          onMouseEnter={(e) => e.target.style.opacity = "0.9"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        >
          Add to Collection
        </button>
        
        <p style={{ textAlign: "center", fontSize: "12px", color: colors.slate, marginTop: "20px" }}>
          Ref: {id.toString().padStart(6, '0')} • 2 Year International Warranty
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;