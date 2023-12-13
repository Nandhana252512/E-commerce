// Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = ({onToggleForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <p>Don't have account?</p>
        <button type="button" onClick={onToggleForm}>Signup</button>
      </form>
    </div>
  );
};

export default Login;
