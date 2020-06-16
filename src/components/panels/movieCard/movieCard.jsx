import React from 'react';
import './movieCard.css'

export default ({ movie, onClickMovie }) => {
  return (
    <div className="app-movie-card" onClick={() => onClickMovie(movie)}>
      <div className="image">
        <img src={movie.cover} alt={movie.name} />
      </div>
      <div className="details">
        <h3 className="name">{movie.name}</h3>
        <p className="description">{movie.description}</p>
        <p className="release-date">Released at {movie.release_date}</p>
      </div>
    </div>
  )
}
