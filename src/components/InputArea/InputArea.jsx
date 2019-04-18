
import './InputArea.scss'
import React,{ Component } from 'react'

export default class InputArea extends Component{
  constructor(props){
    super(props)
    this.state = {
      isSelf: this.props.isSelf
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.byEnterSend = this.byEnterSend.bind(this);
  }
  sendMessage(){
    let inpVal = this.input.value;
    // console.log(inpVal)
  }
  byEnterSend(e){
    // console.log(e.currentTarget.value) // 获取input value
    let code = e.keyCode;
    if(code === 13){
      console.log(this)
      this.props.sendMessageFather(e.currentTarget.value)
    }
    // let inpVal = this.input.value;
    // console.log(inpVal)
  }
  render(){
    return <div className ="input-box">
      <input className="field" type="text" ref={ input => this.input = input } onKeyDown = { this.byEnterSend }  />
      <button onClick={ ()=>{this.props.sendMessageFather(this.input.value)}  } className="send-btn">Send</button>
    </div>
  }
} 