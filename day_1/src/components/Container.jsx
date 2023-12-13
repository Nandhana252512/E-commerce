import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';


const Container = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleToggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <div>
      {showLoginForm ? (
        <Login onToggleForm={handleToggleForm} />
      ) : (
        <Signup onToggleForm={handleToggleForm} />
      )}
    </div>
  );
};

export default Container;