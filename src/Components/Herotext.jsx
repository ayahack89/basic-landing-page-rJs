/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
const heroStyle = {
    
     padding : "20px",
     width: "50vw",
     margin: "auto",
   };
   const text = {
    marginTop: "30vh",
    marginBottom: "30vh",
   }
   const h1={
    fontWeight: "lighter",
    fontSize: "3rem",
   }
   const p = {
    fontWeight: "lighter",

   }
const Herotext = () => {
  return (
    <div className='background'>
        <div style={heroStyle}>
          <div style={text}>
            <h1 style={h1}>Mr. Arun - From Aspiring Journalist to Renowned Storyteller</h1>
            <p style={p}>If you want to learn the art of journalism from a seasoned professional with a successful track record, you've come to the right place.</p>
            <div className="box-1">
              <div className="btn btn-one">
                <span>Join Now</span>
                </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Herotext
