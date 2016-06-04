import React, { Component } from 'react'
import { render } from 'react-dom'

require('bootstrap/dist/css/bootstrap.css')

class Example extends Component {
  render () {
    return <h1>Hello World!</h1>
  }
}

render(<Example />, document.getElementById('react-app'))
