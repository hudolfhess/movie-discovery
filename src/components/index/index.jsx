import React from 'react'
import Header from '../header/header'
import Discover from '../panels/discover/discover'
import Movie from '../panels/movie/movie'
import SearchResult from '../panels/searchResult/searchResult'
import MovieHttpGateway from '../../gateways/MovieHttpGateway'
import './index.css'

const VIEW_DISCOVER = 1
const VIEW_SEARCH = 2
const VIEW_DETAIL = 3

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      rate: {
        min: 0,
        max: 10
      },
      view: null,
      loading: true,
      discover: [],
      movies: [],
      movie: {},
      isSearching: false
    }

    this.movieHttpGateway = new MovieHttpGateway('91234c3062b3cf856a4434bd93d3a165')
  }

  componentDidMount() {
    this.loadDiscover()
  }

  loadDiscover() {
    this.movieHttpGateway.discoverMovies().then(discover => {
      this.setState({ discover, loading: false, view: VIEW_DISCOVER })
    })
  }

  searchMovies(queryString, rate) {
    if (queryString === "") {
      this.loadDiscover()
      return
    }
    this.setState({ loading: true, search: queryString })

    this.movieHttpGateway.searchMovies(queryString, rate).then(movies => {
      this.setState({ movies, loading: false, view: VIEW_SEARCH })
    })
  }

  onClickMovie(movie) {
    this.setState({ movie: movie, view: VIEW_DETAIL })
  }

  render() {
    return (
      <div id="index-page">
        <Header searchMethod={this.searchMovies.bind(this)} />
        { this.state.loading ? this.loadingFrame() : this.display()}
        
      </div>
    )
  }

  loadingFrame() {
    return (
      <React.Fragment>
        <p>Loading ...</p>
      </React.Fragment>
    )
  }

  display() {
    if (this.state.view === VIEW_DISCOVER) {
      return this.displayDiscover()
    } else if (this.state.view === VIEW_SEARCH) {
      return this.displaySearchResult()
    } else if (this.state.view === VIEW_DETAIL) {
      return this.displayMovie()
    }
  }

  displayDiscover() {
    return (
      <Discover movies={this.state.discover} onClickMovie={this.onClickMovie.bind(this)} />
    )
  }

  displaySearchResult() {
    return (
      <SearchResult movies={this.state.movies} search={this.state.search} onClickMovie={this.onClickMovie.bind(this)} />
    )
  }

  displayMovie() {
    return (
      <Movie {...this.state.movie} />
    )
  }
}

export default Index;
