import React from 'react'
import RatingStars from './ratingStars'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      rate: {
        min: 0,
        max: 10
      }
    }
  }

  onTypeKeyBoard(search) {
    this.setState({ search })
  }

  onChangeRate(rate) {
    this.setState({ rate })
  }

  render() {
    return (
      <div className="app-searchbar">
        <input type="text" className="search" onChange={e => this.onTypeKeyBoard(e.target.value)} value={this.state.search} placeholder="What movie are you looking for?" />
        <RatingStars onChangeRate={this.onChangeRate.bind(this)} />
        <input type="submit" className="submit" value="Search" onClick={() => this.props.searchMethod(this.state.search, this.state.rate)} />
      </div>
    )
  }
}

export default SearchBar