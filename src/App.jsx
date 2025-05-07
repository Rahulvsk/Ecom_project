
// import './App.css'
// import Navbar from './components/Navbar'
// import ProductList from './components/ProductList'
// function App() {
 

//   return (
//     <>
//     <Navbar></Navbar>
//     <ProductList/>
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
    
    </>
  );
};

export default App;

