import MovieStruct from '../structs/movie'

class MovieHttpGateway {
  constructor(api_token) {
    this.api_token = api_token
  }

  discoverMovies() {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_token}&include_adult=false&sort_by=popularity.desc`).then(
      response => {
        return response.json().then(({ results }) => {
          return results.map(movie => new MovieStruct(
            movie.id,
            movie.title,
            movie.overview,
            `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
            movie.release_date,
            movie.vote_average,
            movie.vote_count
          ))
        })
      }
    )
  }

  searchMovies(queryString, rate) {
   return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_token}&query=${queryString}&include_adult=false&sort_by=popularity.desc`).then(
      response => {
        return response.json().then(({ results }) => {
          return results.filter(
            movie => movie.vote_average >= rate.min && movie.vote_average <= rate.max
          ).map(movie => new MovieStruct(
            movie.id,
            movie.title,
            movie.overview,
            `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
            movie.release_date,
            movie.vote_average,
            movie.vote_count
          ))
        })
      }
    )
  }
}

export default MovieHttpGateway
