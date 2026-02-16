import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const colors = {
    navyDark: "#050B13", // Deepest background
    navyMid: "#001219",
    gold: "#D4AF37",
    silver: "#E5E5E5",
    slate: "#707a7e"
  };

  const containerStyle = {
    backgroundColor: colors.navyDark,
    minHeight: "100vh",
    padding: "40px 5%",
    color: colors.silver,
    fontFamily: "'Inter', sans-serif"
  };

  const headerSectionStyle = {
    textAlign: "center",
    marginBottom: "60px",
    marginTop: "20px"
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 5vw, 3.5rem)", // Responsive font size
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: "8px",
    color: colors.white,
    marginBottom: "10px",
    fontFamily: "'Playfair Display', serif"
  };

  const subtitleStyle = {
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: colors.gold,
    fontWeight: "600"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto"
  };

  const dividerStyle = {
    width: "60px",
    height: "2px",
    background: colors.gold,
    margin: "20px auto",
    opacity: "0.6"
  };

  return (
    <div style={containerStyle}>
      {/* Hero / Header Section */}
      <header style={headerSectionStyle}>
        <span style={subtitleStyle}>Exquisite Timepieces</span>
        <h1 style={titleStyle}>Curated Collection</h1>
        <div style={dividerStyle}></div>
        <p style={{ color: colors.slate, maxWidth: "600px", margin: "0 auto", fontSize: "15px", lineHeight: "1.8" }}>
          Explore our signature selection of horological masterpieces, 
          where precision engineering meets timeless aesthetic.
        </p>
      </header>

      {/* Product Grid */}
      <div style={gridStyle}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      
      {/* Bottom Spacer */}
      <div style={{ height: "100px" }}></div>
    </div>
  );
}

export default Home;