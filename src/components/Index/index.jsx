import './index.scss'
import React,{ Component } from "react";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";

import { BrowserRouter, Route } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/login" exact  component={Login} />
      <Route path="/register" component={Register} />
    </main>
  </div>
)

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
        {/* <button>注册</button> */}
        <BrowserRouter>
          <PrimaryLayout />
        </BrowserRouter>
      </div>
    </div>
  </div>
}

export default Index;