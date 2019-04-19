// module.exports = function () {
//   let hello = document.createElement('div');
//   hello.innerHTML = 'hello word';
//   return hello;
// }

import React, {Component} from 'react'
import WindowView from './components/windowView/windowView.jsx'
import Index from './components/Index/Index.jsx'

let name = 'saxon'

export default class App extends Component{
  render() {
    return (
      <div>
        <Index />
      </div>
    )
  }
}