import React,{useState} from 'react'


export default function TextForm(props) {

    const handleOnChangeToUp = (event)=> {
        console.log("edited");
        setText(event.target.value);
    }

    const handleUpClick = ()=> {
        console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleClearText = ()=> {
        console.log("clearText was clicked");
        let newText = '';
        setText(newText)
    }

    const handleLowClick = ()=> {
        console.log("Lowercase button was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const[text,setText] = useState('Enter your text')
  return (
    <>
        <div className='container'>
        <h1>{props.heading}</h1>   
      <div className="lb-3 ">
        <label for="myBox" className="form-label">
          Enter the garbage here..
        </label>
        <input placeholder='Enter some text' value = {text}
          onChange={handleOnChangeToUp}
          id="myBox"
          rows="5"/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>To UpperCase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLowClick}>To LowerCase</button>
      <button className="btn btn-danger mx-2" onClick={handleClearText}>Clear</button>
    </div>
    <div className='container my-3'>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} min read time</p>
        <h2>Preview</h2>
        <h4>{text}</h4>
    </div>
    </>
    
  ); 
}
