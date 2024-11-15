import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css"; // 스타일 파일

function MainPage() {
  return (
    <div className="main-page">
      <h1>Welcome to My Page</h1>

      {/* 프로필 섹션 */}
      <Link to="/profile" className="section-card">
        <div className="icon">👤</div>
        <h2>내 프로필</h2>
        <p>더 알아보기</p>
      </Link>

      {/* 포트폴리오 섹션 */}
      <Link to="/portfolio" className="section-card">
        <div className="icon">📁</div>
        <h2>포트폴리오</h2>
        <p>작업물 보기</p>
      </Link>

      {/* 기타 작업물 섹션 */}
      <Link to="/works" className="section-card">
        <div className="icon">🛠️</div>
        <h2>기타 작업물</h2>
        <p>내 프로젝트들</p>
      </Link>

      {/* 지식 정리 섹션 */}
      <Link to="/knowledge" className="section-card">
        <div className="icon">📚</div>
        <h2>지식 정리</h2>
        <p>학습 자료</p>
      </Link>
    </div>
  );
}

export default MainPage;
