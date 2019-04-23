import './index.scss'
import React,{ Component } from "react";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";

const Index = ()=>{
  return <div className="index-page">
    <h3 className="title">chart sys for mier</h3>
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
        <button>登陆</button>
       
      </div>
    </div>
  </div>
}

export default Index;