import React, { useState } from "react";

function Genres() {
  const [movies, setMovies] = useState([
    {
      popularity: 59.54,
      vote_count: 792,
      video: false,
      poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      id: 466272,
      adult: false,
      backdrop_path: "/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
      original_language: "en",
      original_title: "Once Upon a Time in Hollywood",
      genre_ids: [28, 35, 80, 18, 37],
      title: "Once Upon a Time in Hollywood",
      vote_average: 7.6,
      overview:
        "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      release_date: "2019-07-26",
    },
    {
      popularity: 45.265,
      vote_count: 526,
      video: false,
      poster_path: "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
      id: 452832,
      adult: false,
      backdrop_path: "/oOROXoQ402tHgK6NowmMUSLffkW.jpg",
      original_language: "en",
      original_title: "Serenity",
      genre_ids: [9648, 53],
      title: "Serenity",
      vote_average: 5.2,
      overview:
        "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
      release_date: "2019-01-25",
    },
  ]);

  const [genres, setGenres] = useState([]);
  /* 
    const getGenres = async () => {
       
    
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=1186f3965d089fdc07e945895494ea57&language=en-US`;
    
        try {
          const res = await fetch(url);
          const data = await res.json();
          
          console.log(data.genres);
          
        } catch (err) {
          console.error(err);
        }
      };
 */

  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=1186f3965d089fdc07e945895494ea57&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => setGenres(data.genres));

  /* const getMovieGenreName = (genre_ids) => {
    let genreIds = [];
    let genreNames = [];
    let genres = "";
    genres.forEach((genre, index) => {
      genreIds[index] = genre.id;
      genreNames[index] = genre.name;
    });

    genre_ids.forEach((genre) => {
      let genreIndex = genreIds.indexOf(genre);
      let genreName = genreNames[genreIndex];
      genres += genreName + " . ";
    });
    genres = genres.slice(0, -2);
    return genres;
  }; */

  return (
    <div>
                {movies.map(movie => {

                    return (
                        <div>
                            <h4>{movie.title}</h4>
                            {/* <span>Genres: {getMovieGenreName(movie.genre_ids)}</span> */}
                        </div>
                    )
                })}
            </div>
  );
}

export default Genres;
