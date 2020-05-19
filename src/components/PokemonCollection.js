import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  returnHP = pokemon => {
    let stat = pokemon.stats.find(stat => stat["name"] === "hp")
    return stat.value
  }
  
  renderPokemonCards = () => {
    const {search, sortBy, pokemon, clearSortBy} = this.props

    if (sortBy === "name") {
      clearSortBy() // clears state for sortBy to allow for search while pokemon sorted
      return (
        pokemon.sort((a, b) =>  a.name > b.name ? 1 : -1).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} returnHP={this.returnHP}/>)
      )
    } else if (sortBy === "id") {
      clearSortBy()
      return (
        pokemon.sort((a, b) =>  a.id > b.id ? 1 : -1).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} returnHP={this.returnHP}/>)
      )
    } else if (sortBy === "hp") {
      clearSortBy()
      return (
        pokemon.sort((a, b) =>  this.returnHP(a) > this.returnHP(b) ? 1 : -1).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} 
          returnHP={this.returnHP}/>)
      )
    } else if (search === "") {
      return (
        pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}
          returnHP={this.returnHP}/>)
      )
    } else {
      return (
        pokemon.filter(pokemon => pokemon.name.includes(search)).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} 
          returnHP={this.returnHP}/>)
      )
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
