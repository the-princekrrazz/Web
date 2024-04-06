import React, { Component } from 'react'
import ab from "./ab.jpg"
import Readmore from './ReadMore.module.css'

export default class 
 extends Component {
  render() {
    return (
    <div className={Readmore.Readmorebody}>

      <div className={Readmore.about_container}>
        <div className={Readmore.about_contents}>
          <section className={Readmore.imageSection}>
            <img src={ab} alt="" />
          </section>
          <section className={Readmore.infoSection}>
            <h1>About Me</h1>
            <h2>Data Scientist</h2>
            <p>
                Hello Dear,<br/>
                Thankyou for visiting on my website.
            </p>
            <p>
                My name is PRINCE KUMAR currently i am persuing BSC.IT form <br/>
                Cimage group of Institution .
                <br/>
                I am 23 years old.
                <br/>
                My hometown is samstipur (Bihar).
                <br/>
                I have completed Intermediate in 2019 and after that I completed
                <br/>
                BSC(Zoology honours) From Lalit narayran mithila universiy.

                <br/>Now I am a student of Bsc.IT from session 2022-25.

            </p>
            <div className={Readmore.personalInfo}>
                <div><span>Name</span><span>PRINCE KUMAR</span></div>
                <div><span>Email</span><span>Princekr1792001@gmail.com</span></div>
                <div><span>Age</span><span>23 Years</span></div>
                <div><span>Address</span><span>Patna</span></div>
            </div>
            <div className={Readmore.button}>
                <a href="\Resume" target="_blank"><button>Download Resume</button></a>
            </div>
          </section>
          <section className={Readmore.skillSection}>
            <div className={Readmore.skill}>
                <div className={Readmore.subject}> Hard Work </div>
                  <div className={Readmore.progress_bar} id="hardwork">
                    <div className={Readmore.progress_line} style={{ maxWidth: 600 }} ></div>
                  </div>
            </div>

            
            <div className={Readmore.skill}>
                <div className={Readmore.subject}> Web Developement</div>
                  <div className={Readmore.progress_bar}>
                    <div className={Readmore.progress_line} style={{ maxWidth: 540 }}></div>
                  </div>
            </div>


            <div className={Readmore.skill}>
                <div className={Readmore.subject}> Data Science </div>
                  <div className={Readmore.progress_bar}>
                    <div className={Readmore.progress_line} style={{ maxWidth: 450 }}></div>
                  </div>
            </div>

            
            <div className={Readmore.skill}>
                <div className={Readmore.subject}>Flutter Developement</div>
                  <div className={Readmore.progress_bar}>
                    <div className={Readmore.progress_line} style={{ maxWidth: 350 }}></div>
                  </div>
            </div>

            <div className={Readmore.skill}>
                <div className={Readmore.subject}>Ethical hacking.</div>
                  <div className={Readmore.progress_bar}>
                    <div className={Readmore.progress_line}style={{ maxWidth: 400 }}></div>
                  </div>
            </div>
            

            <div className={Readmore.skill}>
                <div className={Readmore.subject}>Machine learning.</div>
                  <div className={Readmore.progress_bar}>
                    <div className={Readmore.progress_line}style={{ maxWidth: 390 }}></div>
                  </div>
            </div>

          </section>
        </div>
    </div>

      </div>
    )
  }
}
