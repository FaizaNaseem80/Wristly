import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const colors = {
    navyDark: "rgba(0, 18, 25, 0.92)", // Semi-transparent for glass effect
    gold: "#D4AF37",
    silver: "#E5E5E5",
    white: "#FFFFFF"
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    height: "80px",
    background: colors.navyDark,
    backdropFilter: "blur(15px)", // The "Nyable" glass touch
    borderBottom: `1px solid ${colors.gold}33`,
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "300",
    letterSpacing: "6px",
    textTransform: "uppercase",
    color: colors.white,
    textDecoration: "none",
    fontFamily: "'Playfair Display', serif",
    display: "flex",
    alignItems: "center"
  };

  const linkStyle = {
    color: colors.silver,
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "2px",
    position: "relative",
    padding: "10px 0",
    transition: "0.3s"
  };

  // Helper for the animated underline
  const underlineStyle = (isHovered) => ({
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: isHovered ? "100%" : "0%",
    height: "1px",
    background: colors.gold,
    transition: "width 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        <span style={{ color: colors.gold, marginRight: "10px" }}>◈</span>
        WRISTLY
      </Link>

      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        {/* Collections Link */}
        <NavLink to="/" label="Collections" colors={colors} />
        
        {/* Cart Link */}
        <Link to="/cart" style={{ ...linkStyle, display: "flex", alignItems: "center" }}>
          CART
          {totalItems > 0 && (
            <span style={{
              background: colors.gold,
              color: "#000",
              fontSize: "10px",
              padding: "2px 6px",
              borderRadius: "50%",
              marginLeft: "8px",
              fontWeight: "900"
            }}>
              {totalItems}
            </span>
          )}
        </Link>

        {/* Checkout Button */}
        <Link 
          to="/checkout" 
          style={{
            ...linkStyle, 
            border: `1px solid ${colors.gold}`, 
            padding: '10px 25px', 
            borderRadius: '2px',
            color: colors.gold
          }}
          onMouseEnter={(e) => {
            e.target.style.background = colors.gold;
            e.target.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = colors.gold;
          }}
        >
          Checkout
        </Link>
      </div>
    </nav>
  );
}

// Sub-component for clean hover logic
function NavLink({ to, label, colors }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link 
      to={to} 
      style={{
        color: hovered ? colors.gold : colors.silver,
        textDecoration: "none",
        fontSize: "12px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "2px",
        position: "relative",
        padding: "10px 0",
        transition: "0.3s"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: hovered ? "100%" : "0%",
        height: "1px",
        background: colors.gold,
        transition: "width 0.3s ease"
      }} />
    </Link>
  );
}

export default Navbar;