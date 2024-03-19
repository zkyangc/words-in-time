import React, { useState, FormEvent } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission action
    onSearch(searchTerm);
  };

  return (
    <div className="row">
      <div className="col-12">
        {/* Wrap input and button in a form */}
        <form className="input-group mb-3" onSubmit={handleSubmit}>
          <span className="input-group-text" id="basic-addon1">
            Search for English
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Type a word to search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          {/* The button is now of type submit */}
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
