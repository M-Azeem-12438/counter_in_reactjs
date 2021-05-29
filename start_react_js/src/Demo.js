import React from 'react'
import './Demo.css';
const{useState}=React;
function Demo(){
    const[count,setCount]=useState(0);
return(
    <div className='whole'>
    <div className='Demo-container'>
<h1 className='count' >Counter</h1>
<h2>{count}</h2>
 <h3>
<buttun className='dec' onClick={()=>setCount(count-1)} >-
</buttun>
<buttun className='inc' onClick={()=>setCount(count+1)} >+
</buttun>
</h3>
{/* <div className='Button-wrapper'>

<button data-inline='true' className ='dec'>-</button>
<button data-inline='true' className ='inc'>+</button>
    </div> */
}
    </div>
    <buttun className='reset' onClick={()=>setCount(count==0)} >reset
</buttun>
    </div>
    )
}
export default Demo;
