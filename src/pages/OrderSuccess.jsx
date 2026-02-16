import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  const colors = {
    navyDark: "#050B13",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    slate: "#707a7e",
    success: "#2D6A4F" // A deep emerald green that pairs well with Navy/Gold
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

  const certificateStyle = {
    border: `1px solid ${colors.gold}44`,
    padding: "60px 40px",
    maxWidth: "600px",
    background: "linear-gradient(145deg, #001A26 0%, #000B10 100%)",
    borderRadius: "2px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
    position: "relative"
  };

  const iconStyle = {
    fontSize: "50px",
    color: colors.gold,
    marginBottom: "20px",
    display: "block"
  };

  const orderNumStyle = {
    fontFamily: "monospace",
    background: "rgba(255,255,255,0.05)",
    padding: "5px 15px",
    borderRadius: "4px",
    fontSize: "14px",
    color: colors.slate,
    marginTop: "10px",
    display: "inline-block"
  };

  const buttonStyle = {
    marginTop: "40px",
    background: "transparent",
    border: `1px solid ${colors.gold}`,
    color: colors.gold,
    padding: "15px 35px",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    transition: "0.3s"
  };

  // Random Order ID for effect
  const orderId = Math.random().toString(36).toUpperCase().substring(2, 10);

  return (
    <div style={containerStyle}>
      <div style={certificateStyle}>
        <span style={iconStyle}>✧</span>
        <h1 style={{ fontWeight: "300", letterSpacing: "6px", textTransform: "uppercase", color: colors.white }}>
          Order Confirmed
        </h1>
        
        <div style={{ width: "40px", height: "1px", background: colors.gold, margin: "20px auto" }}></div>

        <p style={{ fontSize: "18px", lineHeight: "1.6", color: colors.silver }}>
          Thank you for choosing <span style={{ color: colors.gold, fontWeight: "600" }}>Wristly</span>. 
          Your timepiece is being prepared for its journey.
        </p>

        <p style={{ color: colors.slate, fontSize: "14px" }}>
          A confirmation email and digital warranty have been sent to your inbox.
        </p>

        <div style={orderNumStyle}>
          TRANS-ID: WRST-{orderId}
        </div>

        <br />

        <button 
          onClick={() => navigate("/")} 
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.background = colors.gold;
            e.target.style.color = colors.navyDark;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = colors.gold;
          }}
        >
          Return to Collection
        </button>
      </div>
      
      <p style={{ marginTop: "40px", fontSize: "12px", color: colors.slate, letterSpacing: "1px" }}>
        ESTIMATED DELIVERY: 3-5 BUSINESS DAYS
      </p>
    </div>
  );
}

export default OrderSuccess;