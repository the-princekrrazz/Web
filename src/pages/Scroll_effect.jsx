import React, { Component } from 'react'
import ScrollStyle from "./Scroll_effect.module.css";

export default class Scroll_effect extends Component {
  render() {
    return (
      <div className={ScrollStyle.Scrollbody}>
         <h2 data-text="👑Prince👑">  &nbsp; &nbsp;I am The &nbsp; &nbsp;  </h2>
      </div>
    )
  }
}
