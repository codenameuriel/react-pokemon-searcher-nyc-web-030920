import React from 'react'

const Search = props => {
  return (
      <div className="ui search">
        <label><b>Sort By: </b></label>
        <select onChange={props.handleSort} className="ui dropdown">
          <option value="id">id</option>
          <option value="hp">hp</option>
          <option value="name">name</option>
        </select>
     
        <div className="ui icon input">
          <input className="prompt" onChange={props.handleSearch} 
          value={props.search} placeholder="search by name"/>
          <i className="search icon" />
        </div>
      </div>
  )
}

export default Search
