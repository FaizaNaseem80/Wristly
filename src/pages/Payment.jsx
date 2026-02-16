import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Payment() {
  const navigate = useNavigate();
  const { clearCart, totalPrice } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const colors = {
    navyDark: "#050B13",
    navyCard: "#001A26",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    slate: "#707a7e",
    glass: "rgba(255, 255, 255, 0.03)"
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        clearCart();
        navigate("/order-success");
      } else {
        navigate("/payment-failed");
        setIsProcessing(false);
      }
    }, 2500); // Slightly longer for "security" feel
  };

  const containerStyle = {
    backgroundColor: colors.navyDark,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    color: colors.silver,
    fontFamily: "'Inter', sans-serif"
  };

  const cardPreviewStyle = {
    width: "100%",
    maxWidth: "400px",
    height: "220px",
    background: `linear-gradient(135deg, ${colors.navyCard} 0%, #000 100%)`,
    borderRadius: "15px",
    padding: "30px",
    marginBottom: "40px",
    border: `1px solid ${colors.gold}33`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    position: "relative",
    overflow: "hidden"
  };

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    background: colors.glass,
    border: `1px solid ${colors.slate}44`,
    borderRadius: "4px",
    color: "white",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box"
  };

  const payButtonStyle = {
    width: "100%",
    padding: "18px",
    background: isProcessing ? colors.slate : colors.gold,
    color: colors.navyDark,
    border: "none",
    fontWeight: "bold",
    letterSpacing: "2px",
    cursor: isProcessing ? "not-allowed" : "pointer",
    textTransform: "uppercase",
    marginTop: "20px",
    transition: "0.3s"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontWeight: "300", letterSpacing: "5px", marginBottom: "40px", textTransform: "uppercase" }}>
        Secure Payment
      </h1>

      {/* Visual Credit Card */}
      <div style={cardPreviewStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ width: "50px", height: "35px", background: colors.gold + "44", borderRadius: "5px" }}></div>
          <span style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic", color: colors.gold }}>WRISTLY.</span>
        </div>
        <div style={{ fontSize: "22px", letterSpacing: "3px", color: colors.silver }}>
          **** **** **** ****
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "10px", color: colors.slate }}>CARDHOLDER NAME</div>
          <div style={{ fontSize: "10px", color: colors.slate }}>EXPIRES</div>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        <input placeholder="Card Number" style={inputStyle} />
        <div style={{ display: "flex", gap: "10px" }}>
          <input placeholder="MM/YY" style={inputStyle} />
          <input placeholder="CVV" style={inputStyle} />
        </div>

        <button 
          onClick={handlePayment} 
          disabled={isProcessing} 
          style={payButtonStyle}
        >
          {isProcessing ? "Authenticating..." : `Pay $${totalPrice.toLocaleString()}`}
        </button>

        <p style={{ textAlign: "center", fontSize: "12px", color: colors.slate, marginTop: "20px" }}>
          🔒 Encrypted 256-bit SSL Connection
        </p>
      </div>
    </div>
  );
}

export default Payment;