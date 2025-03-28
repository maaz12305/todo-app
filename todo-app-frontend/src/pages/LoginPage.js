import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting login...");

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, 
        { email, password }
      );

      console.log("Login response:", response.data); 
      localStorage.setItem("token", response.data.token);
      navigate("/todos");
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Failed to log in. Check console.");
      setError(err.response?.data?.message || "Login failed. Try again.");
      
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <a href="/signup">Don't have an account? Sign up</a>
    </div>
  );
};

export default LoginPage;
