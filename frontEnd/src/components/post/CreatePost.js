import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function CreatePost( ) {
  const location = useLocation();
  const category = location.state?.category || "default";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const { isLoggedIn, userInfo, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  


  useEffect(() => {
    if (!isLoggedIn) {
        alert("로그인 후 작성 가능합니다.");
        navigate("/login");
      }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:8080/api/posts", {
        title,
        content,
        author: userInfo.nickname,
        category,
      },
      {
        headers: {
            Authorization: `Bearer ${token},`
        },
      }
    );

      alert("게시글이 성공적으로 작성되었습니다!");
      console.log("Response:", response.data);
      navigate('/');
    } catch (error) {
      console.error("게시글 작성 중 오류 발생:", error);
      alert("게시글 작성에 실패했습니다.");
    }
  };

  return (
    
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0", height: "200px" }}
        />
        {userInfo && (
          <p style={{ width: "100%", padding: "10px", margin: "10px 0" }}>
            작성자: {userInfo.nickname}
          </p>
        )}
        
        <button type="submit" style={{ width: "100%", padding: "10px", margin: "10px 0" }}>
          게시글 작성
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
