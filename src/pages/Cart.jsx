import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQty, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const colors = {
    navyDark: "#050B13",
    navyCard: "#001A26",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    slate: "#707a7e",
    border: "rgba(212, 175, 55, 0.15)"
  };

  if (!cart.length) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center", backgroundColor: colors.navyDark, minHeight: "80vh", color: colors.silver }}>
        <h2 style={{ fontWeight: "300", letterSpacing: "3px" }}>YOUR WATCH BOX IS EMPTY</h2>
        <button onClick={() => navigate("/")} style={{ background: "transparent", color: colors.gold, border: `1px solid ${colors.gold}`, padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}>
          BROWSE COLLECTIONS
        </button>
      </div>
    );
  }

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 350px",
    gap: "40px",
    padding: "60px 5%",
    backgroundColor: colors.navyDark,
    minHeight: "100vh",
    color: colors.silver,
    fontFamily: "'Inter', sans-serif",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    borderBottom: `1px solid ${colors.border}`,
  };

  const qtyInputStyle = {
    background: "transparent",
    border: `1px solid ${colors.slate}`,
    color: colors.white,
    padding: "5px",
    width: "50px",
    textAlign: "center",
    borderRadius: "4px"
  };

  const summaryCardStyle = {
    background: colors.navyCard,
    padding: "30px",
    borderRadius: "8px",
    height: "fit-content",
    border: `1px solid ${colors.border}`,
    position: "sticky",
    top: "100px"
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={{ fontWeight: "300", letterSpacing: "5px", textTransform: "uppercase", marginBottom: "40px" }}>
          Your Selection
        </h1>
        
        {cart.map((item) => (
          <div key={item.id} style={itemStyle}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              {/* Placeholder for Watch Image */}
              <div style={{ width: "80px", height: "80px", background: "#111", borderRadius: "4px" }}></div>
              <div>
                <h3 style={{ margin: "0 0 5px 0", color: colors.gold, fontSize: "18px" }}>{item.name}</h3>
                <p style={{ margin: 0, color: colors.slate, fontSize: "14px" }}>Ref. {item.id.toString().padStart(4, '0')}</p>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>${item.price.toLocaleString()}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  style={qtyInputStyle}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                />
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: "transparent", border: "none", color: "#ff4d4d", cursor: "pointer", fontSize: "12px" }}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside style={summaryCardStyle}>
        <h2 style={{ fontSize: "18px", letterSpacing: "2px", marginBottom: "20px" }}>ORDER SUMMARY</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: colors.slate }}>
          <span>Subtotal</span>
          <span>${totalPrice.toLocaleString()}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", color: colors.slate }}>
          <span>Complimentary Shipping</span>
          <span style={{ color: colors.gold }}>$0.00</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", fontSize: "20px", borderTop: `1px solid ${colors.border}`, paddingTop: "20px" }}>
          <span>Total</span>
          <span style={{ color: colors.gold }}>${totalPrice.toLocaleString()}</span>
        </div>
        <button 
          onClick={() => navigate("/checkout")}
          style={{ 
            width: "100%", 
            padding: "15px", 
            background: colors.gold, 
            color: colors.navyDark, 
            border: "none", 
            fontWeight: "bold", 
            letterSpacing: "1px",
            cursor: "pointer"
          }}
        >
          PROCEED TO CHECKOUT
        </button>
      </aside>
    </div>
  );
}

export default Cart;