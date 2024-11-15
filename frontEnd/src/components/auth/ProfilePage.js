// src/components/profile/ProfilePage.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";


function ProfilePage() {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Profile</h2>
      {userInfo ? (
        <div>
          <p><strong>Username:</strong> {userInfo.username}</p>
          <p><strong>Nickname:</strong> {userInfo.nickname}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          {/* 다른 사용자 정보도 추가할 수 있음 */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default ProfilePage;
