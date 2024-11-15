import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { id } = useParams(); // 경로에서 게시물 id 가져오기
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/id/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>작성자: {post.author}</p>
    </div>
  );
}

export default PostDetail;
