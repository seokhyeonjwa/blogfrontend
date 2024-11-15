import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login } from "../api/Axios";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      const user = {
        username: data.user.username,
        nickname: data.user.nickname,
        email: data.user.email,
      };
      handleLogin(user);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LoginPage;
