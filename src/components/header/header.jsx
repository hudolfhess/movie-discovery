import React from 'react'
import SearchBar from './searchbar'
import './header.css'

export default ({ searchMethod }) => {
  return (
    <header className="app-header">
      <h1>Movie Discovery</h1>
      <SearchBar searchMethod={searchMethod} />
    </header>
  )
}
