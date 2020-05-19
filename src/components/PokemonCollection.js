import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  renderPokemonCards = () => {
    if (this.props.search === "") {
    return this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
    } else {
      return this.props.pokemon.filter(pokemon => pokemon.name.includes(this.props.search)).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
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
