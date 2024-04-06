import React, { Component } from 'react'
import Certificate from './certificate.jpg'
import Certificate2 from './Cybersecurity.png'
import BugHunting from './BugHunting.module.css'

export default class 
extends Component {
  render() {
    return (
        <div className={BugHunting.body}>
  
        <header className={BugHunting.header}>
            <h1>PRINCE KUMAR</h1>
            <p>Penetration Tester</p>
        </header>
    
        <section className={BugHunting.section}>
            <h2 className={BugHunting.h2}>Penetration Testing & Cyber security</h2>
            <img src={Certificate} alt="Penetration Testing Certificate" className={BugHunting.certificate}/>
            <img src={Certificate2} alt="Penetration Testing Certificate" className={BugHunting.certificate}/>
            <p className={BugHunting.p}>
                As a skilled penetration tester, I have successfully completed specialized training and earned a certificate in Ethical hacking. This certification demonstrates my expertise in identifying and fixing security vulnerabilities, ensuring the safety and integrity of digital systems.
            </p>
        </section>
    
        </div>
    )
  }
}
