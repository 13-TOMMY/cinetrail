import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import Slider from "../components/Slider/Slider";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies/TopRatedMovies";

import "./styles.css";
import "./movies.css";

export default function Homepage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`homepage-container ${!darkMode && "home-light"}`}>
      <Slider />
      <div className="movies-wrapper">
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
}
