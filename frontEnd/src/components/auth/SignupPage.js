import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/Axios";
import { AuthContext } from "../context/AuthContext";
import "./SignupPage.css";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const data = await signup({ username, password, nickname, email, phoneNumber });
      const user = { username: data.username, nickname: data.nickname, email: data.email, phoneNumber: data.phonenumber };
      handleLogin(user);
      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="phonenumber"
          placeholder="PhoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
