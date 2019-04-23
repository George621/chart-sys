import './register.scss'
import React, { Component } from "react";

export default class Register extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return <div className="register-page">
    <h3 className="title">register</h3>
    <div className="form-box">
      <label htmlFor="">
        <span>用户名：</span>
        <input type="text"/>
      </label>
      
      <label htmlFor="">
        <span>密码：</span>
        <input type="password"/>
      </label>
      <div>
        <button>取消</button>
        <button>确定</button>
      </div>
    </div>
  </div>
  }
}
