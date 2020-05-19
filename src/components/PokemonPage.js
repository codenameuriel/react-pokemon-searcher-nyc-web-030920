import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ""
  }

  fetchPokemon = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm api={API}/>
        <br />
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon} search={this.state.search}/>
      </Container>
    )
  }
}

export default PokemonPage

// Pokemon object

// {
//   "height": 10,
//   "weight": 130,
//   "id": 2,
//   "name": "ivysaur",
//   "abilities": [
//     "overgrow",
//     "chlorophyll"
//   ],
//   "moves": [
    
//   ],
//   "stats": [
//     {
//       "value": 80,
//       "name": "special-defense"
//     },
//     {
//       "value": 80,
//       "name": "special-attack"
//     },
//     {
//       "value": 63,
//       "name": "defense"
//     },
//     {
//       "value": 62,
//       "name": "attack"
//     },
//     {
//       "value": 60,
//       "name": "speed"
//     },
//     {
//       "value": 60,
//       "name": "hp"
//     }
//   ],
//   "types": [
//     "grass",
//     "poison"
//   ],
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//   }
// }