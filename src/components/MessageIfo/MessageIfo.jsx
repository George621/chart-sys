
import './MessageIfo.scss'
import React,{ Component } from 'react'

export default class MessageIfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      isSelf: this.props.isSelf
    }
  }
  
  render(){
    let isMySelf = this.state.isSelf;
    let coreInfo = {
      name:'猜猜',
      content:'wenan ziji zhao shhsi'
    }
    return <div className = { 'message-info' + ' ' + (isMySelf ? 'self-messg' : '')}>
      <div className="mess-box">
        <span className="mess-name">{coreInfo.name}</span>
      </div>
      <span className="mess-content">{coreInfo.content}</span>
    </div>
  }
} 