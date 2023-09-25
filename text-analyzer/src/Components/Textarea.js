import React from 'react'
import PropTypes from 'prop-types'



export default function Textarea(props) {
  return (
    <>
<div className="container">
   <div className="mb-3">
     <div className="container" id='container1'>
         <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === "dark"?"light":"dark"}`}>TEXT-ANALYZER</label>
     </div>
     <textarea className="form" id="exampleFormControlTextarea1" rows="10" value={props.value} onChange={props.onchange} style={props.states}></textarea>
   </div>
   <div className="container" id='container2'>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.uppercase} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Upper-Case</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.lowercase} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Lower-Case</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.italic} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Italic-Text</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.blue} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Blue-Text</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.red} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Red-Text</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.black} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Black-Text</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.bold} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Bold-Text</button>
   <button type="button" className="btn btn-primary" id='btn1' onClick={props.clear} style={{backgroundColor: props.mode === "dark"?"black":"rgb(0, 110, 255)"}}>Clear-Text</button>
   </div>
   </div>

   <div className="container">
        <div className="box" style={{border: props.mode === "dark"?"2px solid rgb(0, 110, 255)":"2px solid black"}}>
           <p style={{color: props.mode === "dark"?"white":"black"}}> <span>{props.value.length}</span> Characters And <span>{props.value.split(" ").filter((element)=>{return element.length!=0}).length}</span> Words</p>
        </div>
    </div>


</>
  )
}
