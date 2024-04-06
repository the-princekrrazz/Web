import React, { Component } from 'react'
import Web from "./WebDev.module.css"
import pk from './prince.png'

class WebDev extends Component {
  render() {
    return (
<div className={Web.Webbody}>
  <header className={Web.header}>
    <img className={Web.developer_photo} src={pk} />
    <h1 className={Web.h1}>The Prince</h1>
    <p style={{fontSize:15}}>Web Developer</p>
  </header>

  <div className={Web.container}>
          <div className={Web.project}>
            <h2>To do list in React js.</h2>
            <p> Do to list in react js <br />
            Dear visiotr please check <br />
            my github repo for the project.</p>
          </div>
         <div className={Web.project}>
           <h2>E - Commerce using React js</h2>
           <p>Do to list in react js <br />
            Dear visiotr please check <br />
            my github repo for the project.</p>
         </div>
          <div className={Web.project}>
            <h2>Enquirey form in React js.</h2>
            <p>Do to list in react js <br />
            Dear visiotr please check <br />
            my github repo for the project.</p>
          </div>
          
  </div>
  <footer className={Web.footer}>
    &copy; 2024 The prince
  </footer>
  </div>
    )
  }
}
export default WebDev;
