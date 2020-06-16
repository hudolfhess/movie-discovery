import React from 'react'
import './movie.css'

class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      description: props.description,
      cover: props.cover,
      release_date: props.release_date,
      vote_average: props.vote_average,
      total_votes: props.total_votes,
      images: [],
      loading: true
    }
  }

  render() {
    return (
      <div className="app-movie-view">
        <div className="cover-image">
          <img src={this.state.cover} alt={this.state.name} />
        </div>
        <div className="details">
          <h3>
            {this.state.name}
            <span className="rating">Rating:</span>
            <span className="vote-average">{this.state.vote_average}</span>
            <span className="total-votes"> with {this.state.total_votes} votes</span>
          </h3>
          <p className="release-date">Released at {this.state.release_date}</p>
          <p className="description">{this.state.description}</p>
        </div>
      </div>
    )
  }
}

export default Movie
