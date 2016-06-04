import React from 'react'
import { render } from 'react-dom'

import Example from './components/item.jsx'

var a = 'Hello world!'

render(<Example>{a}</Example>, document.getElementById('react-app'))