import React from 'react'
import MovieCard from '../movieCard/movieCard'
import './searchResult.css'

export default ({ movies, search, onClickMovie }) => {
  return (
    <div className="app-search-result">
      <h2>Looking for movies with <strong>{search}</strong></h2>
      <div className="result">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} onClickMovie={onClickMovie}></MovieCard>)}
      </div>
    </div>
  )
}
