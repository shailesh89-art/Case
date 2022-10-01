import React from 'react';
import { useState } from 'react';

const Garage= (props)=>{

  return(
    <>
      <h3>shailesh you are the good boy{props.background}</h3>
    </>
  );
}
const Car=() =>{
  const[text,setText] = useState(" your form is not submitted");
    const brand=["ford","ferari","bmw"]
    return(
        <>
            <h3>new things {text}</h3>
            <Garage background={brand}/>
            <button onClick={()=> setText("your form is submitted")}>Submit</button>

        </>
    )
}
export default Car;