import React, {useState} from 'react'


export default function Textforn(props) {
  const handleUpClick=()=>{
        //  console.log("Uppercase was Clicked");
         const newt=text.toUpperCase();
         setText(newt);
  }
  const handleLoClick=()=>{
    //  console.log("Uppercase was Clicked");
     const newt=text.toLowerCase();
     setText(newt);
}
  const handleOnChange = (event) =>{
    // console.log("changed");
    setText(event.target.value)
  }
  const clear=()=>{
    //  console.log("Uppercase was Clicked");
     const newt='';
     setText(newt);
}
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  function capitalized(){
    var arr = text.split(" ")
    var c = arr.length
    var temp = ""
    while(c!==0){
        temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
        c--;
    }

    setText(temp)
}


  const [ text ,setText] = useState('ENTER TEXT HERE');
   
  return (
    <>
    <div>
<div className="container">
<div className= "mb-3">
<br></br>
  <h1>ENTER THE TEXT BELOW TO ANALYSE </h1>
  <br></br>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
</div>
<br></br>
 <button className="btn btn-outline-primary  mx-2 mb-2"onClick={handleUpClick}>Convert To Uppercase</button>
 <button className="btn btn-outline-primary mx-2 mb-2"onClick={handleLoClick}>Convert To Lowercase</button>
 
 <button className="btn btn-outline-primary mx-2 mb-2"onClick={capitalized}> Convert To Capitalized</button>
 <button className="btn btn-outline-primary mx-2 mb-2" onClick={speak} >Speak</button>
 <button className="btn btn-outline-primary mx-2 mb-2" onClick={clear} >Clear</button>
    </div>
    </div>
    <div className='container'>
    <br></br>
      <h1>YOUR TEXT SUMMARY</h1>
      <p><b>{text.split(" ").length}</b> Words and<b> {text.length}</b> Characters are Present.</p>
      <p><b>{0.007*text.split(" ").length}</b> Minutes Word.</p>
      <h3>PREVIEW</h3>
      <p>{text}</p>
    </div>
  </>
  )
}
