import './WindowView.scss'
import React,{ Component } from "react";
import MessageIfo from "../MessageIfo/MessageIfo.jsx";
import InputArea from "../InputArea/InputArea.jsx";

export default class WindowView extends Component{

  render(){
    return <div className = "window-view">
      <h4 className = "mtitle">Y-message</h4>
      <MessageIfo />
      <MessageIfo />
      <MessageIfo isSelf={true} />
      <InputArea />
    </div>
  }

}