import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Task Manager</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleSignUp}>Sign Up</button>
        <button style={styles.button} onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5", 
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default LandingPage;
