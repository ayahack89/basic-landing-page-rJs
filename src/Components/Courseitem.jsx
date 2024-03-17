/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
const itemColor ={
  // eslint-disable-next-line no-undef
  color: "black",
  padding: "20px",
  "borderLeft": "5px solid var(--border)",
  "borderRadius": "20px",
  margin: "20px",
  fontSize: "1.2rem",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

}
// eslint-disable-next-line no-unused-vars
const main_box = {
  display: "flex",

  
}

const Courseitem = () => {
  return (
    <div>
    <div style={main_box}>
      <div style={itemColor}>
      <p>Crafting compelling narratives</p>
      </div>
      <div style={itemColor}>
        <p>Research and interview techniques</p>
      </div>
      <div style={itemColor}>
        <p>Fact-checking and ethical journalism</p>
      </div>
      <div style={itemColor}>
        <p>Adapting to the digital media landscape</p>
      </div>
      <div style={itemColor}>
        <p>Building a strong journalistic portfolio</p>
      </div>
    </div>
    </div>
  )
}

export default Courseitem
