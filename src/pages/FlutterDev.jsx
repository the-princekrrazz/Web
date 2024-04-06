import React, { Component } from 'react'
import Web from "./WebDev.module.css"
import pk from './prince.png'

export default class  extends Component {
  render() {
    return (
<div className={Web.body}>
  <header className={Web.header}>
    <img className={Web.developer_photo} src={pk} />
    <h1 className={Web.h1}>The Prince</h1>
    <p style={{fontSize:15}}>Flutter Developer</p>
  </header>

  <div className={Web.container}>
    <div className={Web.project}>
      <h2>Login UI</h2>
      <p>Login UI in flutter <br />
            Dear visiotr please check <br />
            my github repo for the project.</p>
    </div>
    <div className={Web.project}>
      <h2>BMI calculator</h2>
      <p>BMI calculator in Flutter  <br />
            Dear visiotr please check <br />
            my github repo for the project.</p>
    </div>
    <div className={Web.project}>
      <h2>Project 3</h2>
      <p>Prepareing for the project it will update after complition.</p>
    </div>
  </div>

  <footer className={Web.footer}>
    &copy; 2024 The prince
  </footer>
      </div>
    )
  }
}
