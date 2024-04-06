import React, { Component } from 'react'
import py from "./python.module.css"
import pk from './prince.png'

class Python extends Component {
  render() {
    return (
<div className={py.Webbody}>
  <header className={py.header}>
    <img className={py.developer_photo} src={pk} />
    <h1 className={py.h1}>The Prince</h1>
    <p style={{fontSize:15}}>Python programming </p>
  </header>

  <div className={py.container}>
          <div className={py.project}>
            <h2>Project 1</h2>
            <p>Preparing for the project <br />
            it will be updated soon.</p>
          </div>
         <div className={py.project}>
           <h2>Project 2</h2>
           <p>Preparing for the project <br />
            it will be updated soon.</p>
         </div>
          <div className={py.project}>
            <h2>Project 3</h2>
            <p>Preparing for the project <br />
            it will be updated soon</p>
          </div>
          
  </div>
  <footer className={py.footer}>
    &copy; 2024 The prince
  </footer>
  </div>
    )
  }
}
export default Python;
