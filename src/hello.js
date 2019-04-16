// module.exports = function () {
//   let hello = document.createElement('div');
//   hello.innerHTML = 'hello word';
//   return hello;
// }

import React, {Component} from 'react'

let name = 'saxon'

export default class Hello extends Component{
  render() {
    return (
      <div>{name}</div>
    )
  }
}