import React from "react";
//import "../public/styles.css";
import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <p>
        <small>Powered by TMDB</small>
      </p>
      <SearchMovies />
    </div>
  );
}
