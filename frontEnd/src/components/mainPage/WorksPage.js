// src/components/mainPage/MainPage.js
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./MainPage.css";

function WorksPage() {
  const { userInfo } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/posts/category/works");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="main-page">
      <main className="post-section">
        <h2>기타 작업물</h2>
        {posts.length > 0 ? (
          <div className="post-list">
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  {/* 제목 클릭 시 해당 게시물 상세 페이지로 이동 */}
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
          ))}
        </ul>
          </div>
        ) : (
          <p>No posts available.</p>
        )}
        <div>
          <button onClick={() => navigate("/createpost", {
            state: { category: "works" }
          })}>글 작성하기</button>
        </div>
      </main>
    </div>
  );
}

export default WorksPage;
