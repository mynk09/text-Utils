import React,{useState} from 'react'


export default function TextForm(props) {

    const handleOnChangeToUp = (event)=> {
        console.log("CHANGED TO UP");
        setText(event.target.value);
    }

    const handleUpClick = ()=> {
        console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const[text,setText] = useState('Enter your text')
  return (
    <div>
        <h1>{props.heading}</h1>   
      <div className="mb-3">
        <label for="myBox" className="form-label">
          Enter the garbage here..
        </label>
        <textarea
          className="form-control"
          value = {text}
          onChange={handleOnChangeToUp}
          id="myBox"
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>To UpperCase</button>
    </div>
  ); 
}
