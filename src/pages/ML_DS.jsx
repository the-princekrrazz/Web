import React, { Component } from 'react'
import Bd from "./python.module.css"
import pk from './prince.png'

class ML_DS extends Component {
  render() {
    return (
<div className={Bd.Webbody}>
  <header className={Bd.header}>
    <img className={Bd.developer_photo} src={pk} />
    <h1 className={Bd.h1}>The Prince</h1>
    <p style={{fontSize:15}}> Machine learning and Data science.</p>
  </header>

  <div className={Bd.container}>
          <div className={Bd.project}>
            <h2>Project 1</h2>
            <p>Preparing for the project <br />
            it will be updated soon</p>
          </div>
         <div className={Bd.project}>
           <h2>Project 2</h2>
           <p>Preparing for the project <br />
            it will be updated soon.</p>
         </div>
          <div className={Bd.project}>
            <h2>Project 3</h2>
            <p>Preparing for the project <br />
            it will be updated soon.</p>
          </div>
          
  </div>
  <footer className={Bd.footer}>
    &copy; 2024 The prince
  </footer>
  </div>
    )
  }
}
export default ML_DS;
