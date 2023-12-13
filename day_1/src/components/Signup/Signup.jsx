// Signup.jsx
import React, { useState } from 'react';
import './Signup.css';

const Signup = ({onToggleForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleSignup}>Sign Up</button>

        <p>Already have account?</p>
        <button type="button" onClick={onToggleForm}>Login</button>
      </form>
    </div>
  );
};

export default Signup;
