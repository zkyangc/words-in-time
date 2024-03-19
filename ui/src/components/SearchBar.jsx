// SearchBar.js
import React, { useState } from 'react';
// import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Search for English
          </span>
          <input
            type="text"
            placeholder="Type a word to search..."
            value={searchTerm}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <button
            class="btn btn-outline-success"
            onClick={handleSubmit}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
