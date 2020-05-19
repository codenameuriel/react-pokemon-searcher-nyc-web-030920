import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: 'front'
  }

  returnHP = pokemon => {
    let stat = pokemon.stats.find(stat => stat["name"] === "hp")
    return stat.value
  }

  handleClick = () => {
    if (this.state.image === "front") {
      this.setState({
        image: 'back'
      })
    } else {
      this.setState({
        image: 'front'
      })
    }
  }

  render() {
    const {name} = this.props.pokemon
    const {pokemon} = this.props
    const hp = this.returnHP(pokemon)

    return (
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            <img 
            src={this.state.image === 'front' ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
