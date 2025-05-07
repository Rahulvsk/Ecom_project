import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Sign In</button>
        <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default SignIn;
