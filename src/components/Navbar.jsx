import "./Navbar.css";
import logo from './sh.png'
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-icon" />
          <span className="logo-text">LOGO</span>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

        <nav className="nav-links">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>

        <div className="icons">
          <span>🔍</span>
          <span>🤍</span>
          <span>🛍️</span>
          <span>👤</span>
          <span className="lang">ENG ⌄</span>
        </div>
      </div>
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
    </header>
  );
};

export default Navbar;
