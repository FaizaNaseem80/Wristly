import { useNavigate } from "react-router-dom";

function PaymentFailed() {
  const navigate = useNavigate();

  const colors = {
    navyDark: "#050B13",
    navyCard: "#0C121A",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    error: "#9E2A2B", // A sophisticated deep red, not bright neon
    slate: "#707a7e"
  };

  const containerStyle = {
    backgroundColor: colors.navyDark,
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    color: colors.silver,
    fontFamily: "'Inter', sans-serif"
  };

  const alertBoxStyle = {
    border: `1px solid ${colors.error}66`,
    padding: "60px 40px",
    maxWidth: "500px",
    background: colors.navyCard,
    borderRadius: "4px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
  };

  const errorIconStyle = {
    fontSize: "40px",
    color: colors.error,
    marginBottom: "20px",
    display: "block",
    fontWeight: "300"
  };

  const retryButtonStyle = {
    background: colors.gold,
    color: colors.navyDark,
    border: "none",
    padding: "15px 40px",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: "30px",
    transition: "0.3s"
  };

  const supportLinkStyle = {
    marginTop: "20px",
    color: colors.slate,
    fontSize: "13px",
    textDecoration: "underline",
    cursor: "pointer",
    display: "block"
  };

  return (
    <div style={containerStyle}>
      <div style={alertBoxStyle}>
        <span style={errorIconStyle}>✕</span>
        <h1 style={{ fontWeight: "300", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px" }}>
          Transaction Declined
        </h1>
        
        <p style={{ color: colors.slate, lineHeight: "1.6", marginBottom: "0" }}>
          We were unable to process your payment at this time. 
          This could be due to a connection timeout or a bank security measure.
        </p>

        <button 
          onClick={() => navigate("/payment")}
          style={retryButtonStyle}
          onMouseEnter={(e) => e.target.style.opacity = "0.8"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        >
          Retry Payment
        </button>

        <span 
          style={supportLinkStyle}
          onClick={() => navigate("/")}
        >
          Contact Wristly Concierge
        </span>
      </div>

      <p style={{ marginTop: "40px", fontSize: "11px", color: "#333", letterSpacing: "1px" }}>
        ERROR CODE: ERR_AUTH_092
      </p>
    </div>
  );
}

export default PaymentFailed;