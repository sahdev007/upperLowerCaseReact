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

    const clearText = () => {
        let clText = '';
        setText(clText);
    }

    const copyText=(event)=>{
        let textId = document.getElementById('myBox');
        textId.select();

        document.execCommand("copy");
        let cpyText = document.getElementById('pasteId');
        cpyText.innerHTML = "Copied the text: " + textId.value;
    }


    const [text, setText] = useState('');
   
  return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h3 className="my-3">{props?.heading} </h3>
                <textarea className="form-control mb-3" value={text} id="myBox" onChange={handleOnChange} rows="6"></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary ms-3" onClick={handleLoClick}>Convert to Lower case</button>
                <button className="btn btn-primary ms-3" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary ms-3" onClick={clearText}>Clear All Text</button>
            </div>
        </div>
        <div className="container">
            <h4 className='my-3'>Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Number of lines is :{text.split("\n").length}</p><br/>

            <p id="pasteId"></p>
        </div>
    </>
  )
}
