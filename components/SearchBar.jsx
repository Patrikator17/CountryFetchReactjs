import React from 'react';
import '../SearchBar.css'; // Import the CSS styles

const SearchBar = ({setQuery}) => {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
