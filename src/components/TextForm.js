import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleLoClick = (event)=>{
        let loText = text.toLowerCase();
        setText(loText);
    }


    const [text, setText] = useState('');
   
  return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h3 className="my-3">{props?.heading} </h3>
                <textarea className="form-control mb-3" value={text} id="myBox" placeholder="Enter text" onChange={handleOnChange} rows="6"></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary ms-3" onClick={handleLoClick}>Convert to Lower case</button>
            </div>
        </div>
        <div className="container">
            <h4 className='my-3'>Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
    </>
  )
}
