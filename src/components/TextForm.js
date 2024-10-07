import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChangeToUp = (event) => {
    console.log("edited");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success")
  };

  const handleClearText = () => {
    console.log("clearText was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Space cleared", "Success")
  };

  const handleLowClick = () => {
    console.log("Lowercase button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success")
  };

  const [text, setText] = useState("Enter your text");
  return (
    <>
      <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="lb-3 ">
          <label for="myBox" className="form-label">
            Enter the garbage here..
          </label>
          <textarea className="form-control my-3" value={text} onChange={handleOnChangeToUp} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          <input
            placeholder="Enter some text"
            value={text}
            onChange={handleOnChangeToUp}
            id="myBox"
            rows="5"
          />
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          To UpperCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLowClick}>
          To LowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearText}>
          Clear
        </button>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 style={{color:props.mode==='dark'?'white':'#042743'}}>Text Summary</h2>
        <p style={{color:props.mode==='dark'?'white':'#042743'}}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p style={{color:props.mode==='dark'?'white':'#042743'}}>{0.008 * text.split(" ").length} min read time</p>
        <h2 style={{color:props.mode==='dark'?'white':'#042743'}}>Preview</h2>
        <h4 style={{color:props.mode==='dark'?'white':'#042743'}}>{text.length>0?text:"Enter your text to preview"}</h4>
      </div>
      </div>

    </>
  );
}
