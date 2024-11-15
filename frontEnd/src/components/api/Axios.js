import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // 백엔드 주소와 포트를 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

// 로그인 요청
export const login = async (username, password, email, nickname) => {
  try {
    const response = await api.post('/auth/login', { username, password, email, nickname });
    return response.data; // JWT 토큰을 받을 수 있음
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// 회원가입 요청
export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};
