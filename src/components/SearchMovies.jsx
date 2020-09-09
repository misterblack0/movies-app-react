import React, { useState } from "react";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=1186f3965d089fdc07e945895494ea57&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Type your movie here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img
              className="card--image"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              alt={movie.title + " poster"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
