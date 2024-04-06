import React, { useState } from 'react'
import { useRef } from 'react'
import "./base.css"
import hello from "./hello.png"
import picture1 from "./picture1.png"
import v1 from "./v1.gif"
import v2 from "./v2.gif"
import v3 from "./v3.gif"
import v4 from "./v4.gif"
import v5 from "./v5.gif"
import v6 from "./v6.gif"
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Base() {


//Starting window scroll functions ---------------
  const Home = useRef(null)
  const About = useRef(null)
  const Services = useRef(null)
  const Portfolio = useRef(null)
  const Contact = useRef(null)
  const ScrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" })
    //setshowMenu(!showMenu)
  }
  //Starting Firebase section ------------------
  let [messege,setMessege]=useState({
    name:"",
    email:"",
    phone: null,
    emailSub: null,
    msg:""
  })

  let getData=(event)=>{
    let key = event.target.name;
    let value = event.target.value;
    setMessege({...messege,[key]:value})
    console.log(messege)
  }


  let postdata = async(event)=>{
    event.preventDefault();

  const {name,email,phone,emailSub,msg}=messege

  const res =  await fetch("https://webquery-1e295-default-rtdb.firebaseio.com/Webmessege.json",
  {
    method:"POST",
    headers:{
      "Content-Type":"apllication/json",
    },
    body:JSON.stringify({
    name,
    email,
    phone,
    emailSub,
    msg,

    })
  }
  )
  if(res){
    setMessege({
      name:"",
      email:"",
      phone:"",
      emailSub: "",
      msg:""
    })
    
    toast.success("Messege Sent");
  }
  }


//************Redirecting after sumission ******* */




  const [showMenu,setshowMenu]=useState(true);
  return (
    <div className='body'>
      <header className="header">
        <a href="" className="logo">Welcome!</a>

        <i className={showMenu ? 'bx bx-x-circle' : 'bx bx-menu'} id="menu-icon" onClick={()=>setshowMenu(!showMenu)}></i>
        <nav className={showMenu ?"navbar" : "navbar-mob"}>
          <a onClick={() => ScrollHandler(Home)}>Home</a>
          <a onClick={() => ScrollHandler(About)}>About</a>
          <a onClick={() => ScrollHandler(Services)}>Services</a>
          <a onClick={() => ScrollHandler(Portfolio)}>Portfolio</a>
          <a onClick={() => ScrollHandler(Contact)}>Contact </a>
        </nav>
      </header>
      <section className="home" id="home" ref={Home}>
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1> The Prince </h1>
          <h3> And I'm a
            <span id="multiple-text"> &nbsp;
              <Typewriter
                words={['Data scientist', 'Programmer', 'Ethical Hacker', 'Web Developer', 'Flutter Developer']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={70}
                delaySpeed={1000}
              >

              </Typewriter>

            </span></h3>
          <p>
            <b>I have done BSC.IT from cimage group of institutions , patna(Bihar)</b>
            <br /><br />
            I am looking for a plateform where i can improve my skills
            <br />
            I am a quick learner person so,
            <br />
            I will understand your working culture very quickly.
          </p>
          <div className="social-media">
            <a href="https://www.facebook.com//princekumar.razz.37" target="_blank"><i className='bx bxl-facebook'></i></a>
            <a href="https://mobile.twitter.com/the_princekrraz" target="_blank"><i className='bx bxl-twitter' ></i></a>
            <a href="https://www.instagram.com/the_princekrrazz/" target="_blank"><i className='bx bxl-instagram-alt' ></i></a>
            <a href="https://www.linkedin.com/in/the-prince-602976224" target="_blank"><i className='bx bxl-linkedin' ></i></a>
          </div>
          <Link to="/Resume" className="btn" >Download Resume</Link>
        </div>

        <div className="home-img">
          <img src={hello} alt="" />
        </div>

      </section>
      <section className="about" id="about" ref={About}>
        <div className="about-img">
          <img src={picture1} alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Data Scientist </h3>
          <p>
            Hello visitors My name is prince kumar and i have skills of
            <ul className="ultag">
              <li> Data science </li>
              <li> Machine learning </li>
              <li> Big data </li>
              <li> Cyber security </li>
              <li> Penetration testing </li>
            </ul>
          </p>
          <Link to="/ReadMore" className="btn" target='_blank'>Read More</Link>
        </div>
      </section>
      <section className="service" id="services" ref={Services}>
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i class='bx bxl-python'></i>
            <h3>Python Programming</h3>
            <p style={{ fontSize: 16 }}>DSA and Django </p>
            <Link to="/Python" className='btn' target='_blank'><a>Read More</a></Link>
          </div>

          <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>Website Devlopement</h3>
            <p style={{ fontSize: 16 }}>Full stack(MERN)</p>
            <Link to='/WebDev' className='btn' target='_blank'>Read More</Link>
          </div>


          <div className="services-box">
            <i class='bx bxs-network-chart'></i>
            <h3>ML and Data Science</h3>
            <p style={{ fontSize: 16 }}>With python </p>
            <Link to='/ML_DS' className='btn' target='_blank'>Read More</Link>
          </div>
          <div className="services-box">
            <i class='bx bxs-data' ></i>
            <h3>Big Data and Hadoop</h3>
            <p style={{ fontSize: 16 }}>With java</p>
            <Link to='/Big_data' className='btn' target='_blank'>Read More</Link>
          </div>


          <div className="services-box">
            <i className='bx bxs-bug'></i>
            <h3>Bug Huntig & <br />Penetration testing</h3>
            <p style={{ fontSize: 16 }}>Intermediat level</p>
            <Link to="/BugHunting" className='btn' target='_blank'><a>Read More</a></Link>
          </div>


          <div className="services-box">
            <i className='bx bxl-android'></i>
            <h3>Android & <br />Flutter Devlopement</h3>
            <p style={{ fontSize: 16 }}>Intermediate level</p>
            <Link to="/FlutterDev" className='btn'>Read More</Link>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio" ref={Portfolio}>
        <h2 className="heading">My  <span>Creations!</span> </h2>
        <div className="portfilio-container">
          <div className="portfilio-box">
            <img src={v1} alt="" />
            <div className="portfolio-layer">
              <h4> Scrolling effect </h4>
              <p>It is a scrolling effect <br /> using scrolling properties</p>
              <Link to="/Scroll_effect"><i className='bx bx-link-external' ></i></Link>
            </div>
          </div>

          <div className="portfilio-box">
            <img src={v2} alt="" />
            <div className="portfolio-layer">
              <h4>Glowing button</h4>
              <p>This is a glowing butoon useing <br /> HTML , CSS</p>
              <Link to="/Glowing_btn"><i className='bx bx-link-external' ></i></Link>

            </div>
          </div>

          <div className="portfilio-box">
            <img src={v3} alt="" />
            <div className="portfolio-layer">
              <h4>Beating heart</h4>
              <p>Pumping heart animation using HTML, CSS</p>
              <Link to="/Beating_heart"><i className='bx bx-link-external' ></i></Link>
            </div>
          </div>

          <div className="portfilio-box">
            <img src={v4} alt="" />
            <div className="portfolio-layer">
              <h4>Bulb animation</h4>
              <p>Bulb animation using only <br /> HTML , CSS</p>
              <Link to="/Bulb_anim"><i className='bx bx-link-external' /></Link>

            </div>
          </div>

          <div className="portfilio-box">
            <img src={v5} alt="" />
            <div className="portfolio-layer">
              <h4>Pulse rate</h4>
              <p>Pulse rate using graphics programming <br /> HTML , CSS</p>
              <a href="Pulse.html"><i className='bx bx-link-external' ></i></a>

            </div>
          </div>

          <div className="portfilio-box">
            <img src={v6} alt="" />
            <div class="portfolio-layer">
              <h4>Our Earth</h4>
              <p>Rotating earth animation <br /> using rotate properties.</p>
              <Link to='/Earth_rot'><a><i className='bx bx-link-external' ></i></a></Link>

            </div>
          </div>

        </div>
      </section>
      <section className="Contact" id="Contact" ref={Contact}>
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form method='POST' action='google.com' onSubmit={postdata}>
          <div className="input-box">
            <input value={messege.name} name='name' onChange={getData} type="text" pattern="[A-Za-z\s]+" placeholder="Full name " id="name" required />
            <input value={messege.email} onChange={getData} type="email" placeholder="Email address" id="email" name="email" />
          </div>
          <div className="input-box">
            <input value={messege.phone} onChange={getData} type="number" pattern="[6-9]{10}" placeholder="Moblile number" id="mobile" name='phone' required />
            <input value={messege.emailSub} onChange={getData} type="text" placeholder="Email subject" id="subject" name='emailSub' required />
          </div>
          <textarea value={messege.msg} onChange={getData} id="message" cols="30" rows="10" placeholder="Your messege" name='msg' ></textarea>
          <ToastContainer/>
          <input type="submit" value="Send" class="btn" />
        </form>
      </section>
      <footer className="footer">
        <p>Copyright &copy; by The prince | All Rights Reserverd.</p>
        <div className="footer-iconTop">
          <a onClick={() => ScrollHandler(Home)}><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </div>
  )
}
export default Base;
