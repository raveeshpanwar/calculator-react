
import './App.css';
import React,{useState} from 'react';


function App() {
  const [InputText,setInput]=useState('');

function recordInput(e){
  const value=e.target.value;
setInput(value);
}

const deleteText=()=>{
  setInput('');
    }
   
function checkinput(){
  const chars=/^[-+]?[0-9]+([-+*./]+[-+]?[0-9]+)*$/;
  const allowed=chars.test(InputText);
  if(allowed)
  {
   setInput(eval(InputText));
  }else{ 
    setInput('');
     console.log('match not found');}
}


function addIt(e){
const valuee=e.target.value;
const fullText=InputText.concat(valuee);
setInput(fullText);
}


 return(
   <div> 
   
   <input className="bt0" type='text' value={InputText} onChange={recordInput}></input>
   
    <div className='contain'>
      <button className='c' onClick={deleteText}>Del</button>
      <button value="." onClick={addIt}>.</button>
      <button value="1" onClick={addIt}>1</button>
      <button value="2" onClick={addIt}>2</button>
      <button  value="3" onClick={addIt}>3</button>
      <button  value="4" onClick={addIt}>4</button>
      <button  value="5" onClick={addIt}>5</button>
      <button  value="6" onClick={addIt}>6</button>
      <button value="7"  onClick={addIt}>7</button>
      <button value="8" onClick={addIt} >8</button>
      <button  value="9" onClick={addIt}>9</button>
      <button  value="+" onClick={addIt}>+</button>
      <button value="0" onClick={addIt} >0</button>
      <button value="-" onClick={addIt} >-</button>
      <button value="*" onClick={addIt} >*</button>
      <button className='equal' onClick={checkinput} >Enter</button>
      <button  value="/" onClick={addIt} >/</button>
    </div>
    <h2 className='footer'>Calculator by Raveesh</h2></div>
  )
}

  

export default App;
