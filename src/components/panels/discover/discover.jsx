import React from 'react'
import MovieCard from '../movieCard/movieCard'
import './discover.css'

export default ({ movies, onClickMovie }) => {
  return (
    <div className="app-discover-list">
      <h2>Discover</h2>
      <div className="list">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} onClickMovie={onClickMovie}></MovieCard>)}
      </div>
    </div>
  )
}
