import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    // send post request
    // const {api} = this.props.api

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({id: 1, ...this.state})
    })
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={this.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input onChange={this.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
