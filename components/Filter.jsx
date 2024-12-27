import React from 'react';
import '../Filter.css'; // Import CSS styles

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-dropdown-wrapper">
        <select className="filter-dropdown" aria-label="Filter by">
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <i className="dropdown-icon fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Filter;
