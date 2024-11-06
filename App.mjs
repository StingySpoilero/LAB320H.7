import { useState, useEffect } from "react";
import Form from "./components/Form.mjs";
import MovieDisplay from "./components/MovieDisplay.mjs";
import "./App.css";

export default function App() {
  const apiKey = "98e3fb1f"; // Replace with your actual API key
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie("Clueless"); // Default movie on load
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}