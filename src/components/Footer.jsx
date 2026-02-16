import { Link } from "react-router-dom";

function Footer() {
  const colors = {
    navyDark: "#000B10", // Even darker than the nav for grounding
    navyMid: "#001219",
    gold: "#D4AF37",
    silver: "#A9A9A9",
    white: "#FFFFFF"
  };

  const footerStyle = {
    background: colors.navyDark,
    color: colors.silver,
    padding: "60px 5% 30px 5%",
    borderTop: `1px solid ${colors.gold}33`, // Subtle gold divider
    fontFamily: "'Inter', sans-serif",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
    marginBottom: "40px"
  };

  const sectionTitleStyle = {
    color: colors.gold,
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px"
  };

  const linkStyle = {
    display: "block",
    color: colors.silver,
    textDecoration: "none",
    marginBottom: "12px",
    fontSize: "14px",
    transition: "0.3s ease",
  };

  const brandText = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#707a7e"
  };

  const copyrightStyle = {
    textAlign: "center",
    paddingTop: "30px",
    borderTop: "1px solid #ffffff11",
    fontSize: "12px",
    color: "#555"
  };

  const inputStyle = {
    background: "transparent",
    border: `1px solid ${colors.gold}66`,
    padding: "10px",
    color: "white",
    width: "100%",
    marginBottom: "10px",
    borderRadius: "2px"
  };

  const buttonStyle = {
    background: colors.gold,
    color: colors.navyDark,
    border: "none",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    borderRadius: "2px"
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Brand Column */}
        <div>
          <h2 style={{ ...sectionTitleStyle, color: colors.white, fontSize: "20px" }}>WRISTLY.</h2>
          <p style={brandText}>
            Crafting timeless precision since 2024. Our mission is to provide 
            horological excellence for the modern collector.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h3 style={sectionTitleStyle}>Collections</h3>
          <Link to="/" style={linkStyle}>Automatic</Link>
          <Link to="/" style={linkStyle}>Chronographs</Link>
          <Link to="/" style={linkStyle}>Limited Edition</Link>
          <Link to="/" style={linkStyle}>Accessories</Link>
        </div>

        {/* Support Column */}
        <div>
          <h3 style={sectionTitleStyle}>Concierge</h3>
          <Link to="/" style={linkStyle}>Shipping Policy</Link>
          <Link to="/" style={linkStyle}>Warranty</Link>
          <Link to="/" style={linkStyle}>Track Order</Link>
          <Link to="/" style={linkStyle}>Contact Us</Link>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 style={sectionTitleStyle}>Stay Updated</h3>
          <p style={{ ...brandText, marginBottom: "15px" }}>Join the inner circle for early access.</p>
          <input type="email" placeholder="Email Address" style={inputStyle} />
          <button style={buttonStyle}>SUBSCRIBE</button>
        </div>
      </div>

      <div style={copyrightStyle}>
        © {new Date().getFullYear()} WRISTLY WATCH CO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}

export default Footer;