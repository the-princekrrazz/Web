import React, { Component } from 'react';
import "./Glowing_btn.css"

export default class Glowing_btn extends Component {
  render() {
    return (
      <div className='Glowing_btn_body'>
        <button class="glowing-btn"> <span class="glowing-txt">👑 <span class="faulty-letter">THE</span> 💖PRINCE</span> </button> 
      </div>
    )
  }
}
