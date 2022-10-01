import React, { useState } from "react";
import "./Nav.css";


function TextForm(props) {
    const[text,setText]=useState(" ");
    const Upclick=()=>{
        let newText= text.toUpperCase();
        setText(newText);

    }
    const Downclick =(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <p>
        <label >Write Text Here<br/> ⬇️</label>
      </p>
    <div className="area">
      

      <textarea id="w3review" name="w3review" rows="4" cols="50" value={text} onChange={Downclick}>
       
      </textarea>
      
    </div>
    <div className="btn">
    <button onClick={Upclick}>Convert To uppercase</button>
    </div>
    </>
  );
}

export default TextForm;
