import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <div className="card__image--container">
        <img
          className="card__image"
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />

        <div className="card__hoverd">
          <FavoriteBorderIcon
            fontSize="large"
            className="card__icon card__icon--favorite"
          />
          <QueryBuilderIcon
            fontSize="large"
            className="card__icon card__icon--duration"
          />
          <PlayCircleFilledIcon
            style={{ fontSize: 40 }}
            className="card__icon--play"
          />

          <div className="bubble bubble-fill">
            <div className="bubble__container1">
              <div className="bubble__container1--header">
                <div>
                  <h3 className="card__title">{movie.title}</h3>
                  <small className="card__genres">{movie.genre_ids}</small>
                </div>
                <div>
                  <p>1h 57 min</p>
                </div>
              </div>

              <p className="card__overview">{movie.overview}</p>

              <div className="card__cast">
                <p>Director:</p>
                <p>Stars:</p>
              </div>
            </div>

            <div className="bubble__container2">
              <div>
                <p>{movie.original_language}</p>
                <p>
                  <a href="https://google.ro" className="card__link">
                    IMDb
                  </a>
                </p>
              </div>
              <div>
                <p>{movie.vote_average}</p>
                <p>
                  <a href="https://google.ro" className="card__link">
                    Metacritic
                  </a>
                </p>
              </div>
            </div>

            <div className="bubble__container3">
              <p>Recommended by:</p>

            <div>
            <img src="/img/profile_user7.jpg" alt="user"></img>
            <img src="/img/profile_user6.jpg" alt="user"></img>
            <img src="/img/profile_user5.jpg" alt="user"></img>
            <img src="/img/profile_user4.jpg" alt="user"></img>
</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card__content">
        <h3 className="card__title">{movie.title}</h3>
        <p>
          <small className="card__genres">Drama, Thriller</small>
        </p>

        {/*  <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--description">{movie.overview}</p> */}
      </div>
    </div>
  );
}

export default MovieCard;
