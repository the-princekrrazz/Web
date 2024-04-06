import React, { Component } from 'react'
import Tk from "./WebDev.module.css"
import pk from './prince.png'
import { Link } from 'react-router-dom'

class Thanks extends Component {
  render() {
    return (
<div className={Tk.Webbody}>
  <header className={Tk.header}>
   <Link to="/"> <img className={Tk.developer_photo} src={pk}/> </Link>
  </header>

  <div className={Tk.container}>
          <div className={Tk.project}>
            <h2>Thank you. &nbsp; <i class='bx bxs-smile'></i></h2>
            <p><br />Dear visitor ,<br /> Thank you for vlueable time
             your messege has been recived.
             <br />
             <br />
             I'll contact you soon.
             <br />
             
            </p>
          </div>
          
  </div>
  <footer className={Tk.footer}>
    Click on imgage to redirect on Homepage.
  </footer>
  </div>
    )
  }
  
}
export default Thanks;
