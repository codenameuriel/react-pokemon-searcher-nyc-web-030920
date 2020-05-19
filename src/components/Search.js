import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.handleSearch} 
        value={props.search} placeholder="search by name"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
