import React,{useState} from 'react'

export default function TextArea(props) {
    
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase());
    }
    const handleClear = ()=>{
        setText(" ");
    }
    const handleExtra = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
    }
    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
   
    const [text, setText] = useState("");
    
    return (
    <>               
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <br/><h1 style={{color: props.mode==='dark'?'white':'black'}}> {props.heading} </h1>
        <textarea className="form-control my-3" value={text} id="myBox" rows="10" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#727f92':'white',color:props.mode==='dark'?'white':'black' }}></textarea>
        <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" style={{color: props.mode==='dark'?'white':'blue'}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" style={{color: props.mode==='dark'?'white':'blue'}} onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" style={{color: props.mode==='dark'?'white':'blue'}} onClick={handleExtra}>Remove Extra spaces</button>
        <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" style={{color: props.mode==='dark'?'white':'blue'}} onClick={handleCopy}>Copy Text </button>
        <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" style={{color: props.mode==='dark'?'white':'blue'}} onClick={handleClear}>Clear Text</button>
        <br/>
                
        <div className="mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}> 
        {text.split(/\S+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</div>
        
        </div>
        
        </>
     
    )
}
