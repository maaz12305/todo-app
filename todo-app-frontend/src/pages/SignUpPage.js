import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting registration...");

      const response = await axios.post(
        "http://localhost:3000/api/auth/register", 
        { username, email, password }
      );

      console.log("Response:", response.data); 
      navigate("/login");
    } catch (err) {
      console.error("Error signing up:", err);
      alert("Failed to sign up. Check console.");
      setError(err.response?.data?.message || "Sign-up failed. Try again.")
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      <a href="/login">Already have an account? Log in</a>
    </div>
  );
};

export default SignUpPage;
