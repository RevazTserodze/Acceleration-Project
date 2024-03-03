import React, { useState, useEffect } from "react";
import fetchPhotos from "../api";
import SearchForm from "./SearchForm";

function Com() {
  const [popularPhotos, setPopularPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchPopularPhotos = async () => {
      await fetchPhotos("photos", {
        order_by: "popular",
        per_page: 20,
        page: 1,
        client_id: "oZotcbM88T2SJLReo_QHnqmwAPX9VUXLMJWnJQadYAg",
      }).then((data) => {
        setPopularPhotos(data);
        setFilteredPhotos(data);
      });
    };

    fetchPopularPhotos();
  }, []);

  const filterHandler = (value) => {
    setSearchValue(value);
    const filtered = popularPhotos.filter((photo) =>
      photo.alt_description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div>
      <SearchForm onFilterChange={filterHandler} />
      {filteredPhotos.length === 0 && (
        <p style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
          Sorry, cant find a photo.
        </p>
      )}
      {filteredPhotos.length > 0 && (
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            listStyleType: "none",
          }}
        >
          {filteredPhotos.map((elem) => (
            <li key={elem.id}>
              <h1
                style={{
                  textAlign: "center",
                  color: "ButtonText",
                }}
              >
                {elem.alt_description}
              </h1>
              <img
                style={{ borderRadius: "21px" }}
                src={elem.urls.full}
                alt="photo"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Com;
