import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginUser } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './ Auth.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.reducer.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();
      navigate('/'); 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
