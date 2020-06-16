import React from 'react'
import './ratingStars.css'

class RatingStars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      minValue: 0,
      maxValue: 10,
      isNextClickMax: true
    }
  }

  onStarClick(value) {
    if (value === this.state.minValue || value === this.state.maxValue) {
      this.setState({ minValue: 0, maxValue: 10 }, this.getLastRateValue)
    } else if (value > this.state.maxValue) {
      this.setState({ maxValue: value }, this.getLastRateValue)
    } else if (value < this.state.minValue) {
      this.setState({ minValue: value }, this.getLastRateValue)
    } else if (this.state.isNextClickMax) {
      this.setState({ isNextClickMax: false, maxValue: value }, this.getLastRateValue)
    } else {
      this.setState({ isNextClickMax: true, minValue: value }, this.getLastRateValue)
    }
  }

  getLastRateValue() {
    this.props.onChangeRate({
      min: this.state.minValue,
      max: this.state.maxValue
    })
  }

  render() {
    const stars = []

    for (let i = 0; i <= 10; i++) {
      stars.push(<span key={i} onClick={() => this.onStarClick(i)} title={`${i} stars`} className={i >= this.state.minValue && i <= this.state.maxValue ? 'selected' : ''}>★</span>)
    }

    return (
      <div className="app-rating-stars">
        With rate between: {stars}
      </div>
    )
  }
}

export default RatingStars