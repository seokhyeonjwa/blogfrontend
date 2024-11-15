import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../../App';
import './Header.css';

function Header() {
  const { isLoggedIn, userInfo, handleLogout } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <h1 onClick={() => navigate('/')}>Welcome to the Blog</h1>
      <div className="nav-links">
        {!isLoggedIn ? (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        ) : (
          <div>
            <button onClick={() => setShowProfile(!showProfile)}>
              {userInfo?.nickname || "Profile"}
            </button>
            {showProfile && (
              <div className="profile-modal">
                <p>Username: {userInfo.username}</p>
                <p>Nickname: {userInfo.nickname}</p>
                <p>Email: {userInfo.email}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
