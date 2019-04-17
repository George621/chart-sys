// index.js'

import React, {Components} from 'react'
import {render} from 'react-dom'
import Hello from './hello.js'

// const hello = require('./hello');
// document.querySelector('#root').appendChild(hello());

render( <Hello />,document.getElementById('root'))