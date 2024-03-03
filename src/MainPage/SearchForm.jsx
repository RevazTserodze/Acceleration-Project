import React, { useState } from "react";

const SearchForm = ({ onFilterChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const filterHandler = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onFilterChange(newValue);
  };

  return (
    <label
      style={{
        fontSize: "20px",
        fontWeight: "bolder",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Search:
      <input
        style={{ width: "700px", height: "3vh" }}
        type="text"
        value={searchValue}
        onChange={filterHandler}
      />
    </label>
  );
};

export default SearchForm;
