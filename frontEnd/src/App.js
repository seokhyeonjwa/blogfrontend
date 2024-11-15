// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import CreatePost from "./components/post/CreatePost";
import PostDetail from "./components/post/PostDetail";
import ProfilePage from "./components/auth/ProfilePage";
import PortfolioPage from "./components/mainPage/PortfolioPage";
import WorksPage from "./components/mainPage/WorksPage";
import KnowledgePage from "./components/mainPage/KnowledgePage";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
