import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const colors = {
    navyDark: "#050B13",
    navyCard: "#001A26",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    slate: "#707a7e",
    border: "rgba(212, 175, 55, 0.2)"
  };

  const pageStyle = {
    backgroundColor: colors.navyDark,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    color: colors.silver,
    fontFamily: "'Inter', sans-serif"
  };

  const formCardStyle = {
    background: colors.navyCard,
    padding: "40px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    border: `1px solid ${colors.border}`
  };

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    background: "rgba(255, 255, 255, 0.03)",
    border: `1px solid ${colors.slate}`,
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    width: "100%",
    padding: "18px",
    background: colors.gold,
    color: colors.navyDark,
    border: "none",
    borderRadius: "4px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "transform 0.2s ease, opacity 0.2s ease"
  };

  const stepIndicator = {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  };

  return (
    <div style={pageStyle}>
      {/* Visual Progress */}
      <div style={stepIndicator}>
        <span style={{ color: colors.gold }}>01 Shipping</span>
        <span style={{ color: colors.slate }}>—</span>
        <span style={{ color: colors.slate }}>02 Payment</span>
        <span style={{ color: colors.slate }}>—</span>
        <span style={{ color: colors.slate }}>03 Review</span>
      </div>

      <h1 style={{ fontWeight: "300", letterSpacing: "5px", marginBottom: "40px", textTransform: "uppercase" }}>
        Shipping Details
      </h1>

      <div style={formCardStyle}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px", color: colors.gold }}>RECIPIENT NAME</label>
        <input 
          placeholder="e.g. James Bond" 
          style={inputStyle} 
          onFocus={(e) => e.target.style.borderColor = colors.gold}
          onBlur={(e) => e.target.style.borderColor = colors.slate}
        />

        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px", color: colors.gold }}>SHIPPING ADDRESS</label>
        <input 
          placeholder="Street, City, Postal Code" 
          style={inputStyle} 
          onFocus={(e) => e.target.style.borderColor = colors.gold}
          onBlur={(e) => e.target.style.borderColor = colors.slate}
        />

        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px", color: colors.gold }}>CONTACT NUMBER</label>
        <input 
          placeholder="+1 (555) 000-0000" 
          style={inputStyle} 
          onFocus={(e) => e.target.style.borderColor = colors.gold}
          onBlur={(e) => e.target.style.borderColor = colors.slate}
        />

        <button 
          onClick={() => navigate("/payment")} 
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.opacity = "0.9"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        >
          Continue to Payment
        </button>
      </div>
      
      <p style={{ marginTop: "30px", fontSize: "13px", color: colors.slate }}>
        Secure Checkout Powered by Wristly Concierge
      </p>
    </div>
  );
}

export default Checkout;