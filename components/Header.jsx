import React, { useState } from 'react';
import '../App.css'; // Ensure your styles are imported

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={toggleDarkMode}>
          <i className={darkMode ? "fa-solid fa-sun" : "fa-regular fa-moon"} />
          &nbsp;&nbsp;{darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
