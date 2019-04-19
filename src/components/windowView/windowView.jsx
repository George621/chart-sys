import './WindowView.scss'
import React,{ Component } from "react";
import MessageIfo from "../MessageIfo/MessageIfo.jsx";
import InputArea from "../InputArea/InputArea.jsx";
import Index from "../Index/Index.jsx";





export default class WindowView extends Component{

  constructor(props){
    super(props)
    this.viewHandler = this.viewHandler.bind(this);
    this.sendMessageFather = this.sendMessageFather.bind(this);
    this.state = {
      message: []
    }
  }
  wsFn(context){
    let socket = new WebSocket('ws://127.0.0.1:3000', 'echo-protocol');
    socket.addEventListener('open',function () { })
    socket.addEventListener('message',(event)=>{
        let newMes = event.data
        this.setState({
          message: [...this.state.message, newMes]
        })
        this.viewHandler()
      
    }) 
    this.socket = socket;
  }
  componentDidMount(){
    this.wsFn()
  }
  
  sendMessageFather(context){
    this.socket.send(context)
  }
  viewHandler(){
    let messages = this.state.message;
    return messages.map((item, index)=>{
      return <MessageIfo message = {item} isSelf={true} key = {index} />
    })
  }
  render(){
    return <div className = "window-view">
    <Index></Index>
      <div className="message-body">
        <h4 className = "mtitle">Y-message</h4>
        {this.viewHandler()}
      </div>
      {/* <MessageIfo isSelf={true} /> */}
      <InputArea sendMessageFather = {this.sendMessageFather} />
    </div>
  }

}