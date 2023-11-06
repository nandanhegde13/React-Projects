import { useState } from "react";
import { Data } from './data.js'
import {Employee} from './Employees.jsx'


export function Examples()
{
 function handleClick()
{   
  state2('Hello EveryOne');
}

  var [state1,state2] = useState('Hello All');
  const [count, setCount] = useState(0)

  return (
    <>
     
      <button onClick ={handleClick}>Click Me</button>
      {Data.map((item)=>( <Employee key ={item.name} {...item}/>))}
      <p>{state1}</p>
    </>
  )
}