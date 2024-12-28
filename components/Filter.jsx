import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import '../Filter.css'; // Import your CSS

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
        {/* Add Font Awesome icon */}
        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
      </div>
    </div>
  );
};

export default Filter;
