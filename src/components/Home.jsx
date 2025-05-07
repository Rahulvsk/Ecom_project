import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import "./Home.css"; // Import custom styles
import Footer from "./Footer";
const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="welcome-section">
          <h2>
            {user ? `Welcome, ${user.name}!` : "Welcome, Guest!"}
          </h2>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <ProductList/>
        
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
