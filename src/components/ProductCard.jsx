import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    navyCard: "#001A26",
    navyDark: "#050B13",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    white: "#FFFFFF",
    border: "rgba(212, 175, 55, 0.2)"
  };

  const cardStyle = {
    background: `linear-gradient(135deg, ${colors.navyCard} 0%, #000B10 100%)`,
    border: `1px solid ${isHovered ? colors.gold : colors.border}`,
    width: "100%",
    maxWidth: "320px",
    aspectRatio: "3 / 4.5", // Professional boutique vertical ratio
    borderRadius: "4px",
    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: isHovered 
      ? `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 15px ${colors.gold}22` 
      : "0 10px 20px rgba(0,0,0,0.4)",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  };

  const imageArea = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px"
  };

  const imgStyle = {
    width: "85%",
    height: "auto",
    objectFit: "contain",
    transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
    transform: isHovered ? "scale(1.15) rotate(2deg)" : "scale(1)",
    filter: isHovered 
      ? "drop-shadow(0 30px 40px rgba(0,0,0,0.8))" 
      : "drop-shadow(0 10px 10px rgba(0,0,0,0.4))"
  };

  const badgeStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "10px",
    color: colors.gold,
    border: `1px solid ${colors.gold}`,
    padding: "4px 8px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    opacity: isHovered ? 1 : 0.6,
    transition: "0.3s"
  };

  const infoSection = {
    padding: "25px",
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
    borderTop: `1px solid ${colors.border}`,
    textAlign: "center"
  };

  const overlayShimmer = {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.1), transparent)",
    transform: "skewX(-25deg)",
    transition: isHovered ? "0.7s" : "0s",
    left: isHovered ? "150%" : "-100%"
  };

  return (
    <div 
      style={cardStyle} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Shimmer Effect */}
      <div style={overlayShimmer} />

      <div style={imageArea} onClick={() => navigate(`/product/${product.id}`)}>
        <div style={badgeStyle}>Swiss Made</div>
        <img src={product.image} style={imgStyle} alt={product.name} />
      </div>

      <div style={infoSection}>
        <h3 style={{
          color: colors.white,
          fontSize: "14px",
          fontWeight: "300",
          letterSpacing: "3px",
          margin: "0 0 8px 0",
          textTransform: "uppercase"
        }}>{product.name}</h3>
        
        <p style={{
          color: colors.gold,
          fontSize: "20px",
          fontFamily: "'Playfair Display', serif",
          margin: "0 0 20px 0"
        }}>${product.price.toLocaleString()}</p>

        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`); }}
            style={{
              flex: 1,
              background: "transparent",
              border: `1px solid ${colors.silver}44`,
              color: colors.silver,
              padding: "10px",
              fontSize: "10px",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => e.target.style.borderColor = colors.gold}
            onMouseLeave={(e) => e.target.style.borderColor = `${colors.silver}44`}
          >
            VIEW PIECE
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            style={{
              flex: 1,
              background: colors.gold,
              border: `1px solid ${colors.gold}`,
              color: colors.navyDark,
              padding: "10px",
              fontSize: "10px",
              fontWeight: "bold",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "0.3s",
              transform: isHovered ? "scale(1.05)" : "scale(1)"
            }}
          >
            ADD TO BOX
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;