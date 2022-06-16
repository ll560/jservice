import React, { useState } from 'react'


function Question({ jserviceRandom }) {
  console.log(jserviceRandom)
 
  const [count, setCount] = useState(0)
     

  return (
    <div>
      <div>
      { jserviceRandom.length>0  ? 
      <h2>Score: {count} </h2>: "" }
      </div>
     
      <button onClick={ () => setCount(count +1 )} type="button" id="increase">Increase</button>

      <button onClick={ () => setCount(count -1 )} disabled={count === 0} type="button" id="decrease">Decrease</button>
      <button onClick={ () => setCount(0 )} type="button" id="reset">Reset</button>

      <div>
        {
          jserviceRandom.length > 0 ? 
          <div><h3>Question: {jserviceRandom[0].question}</h3>
          
          <h4>Category: {jserviceRandom[0].category.title}</h4> 
              </div>
          : 
          ""
         }
      </div>
    </div>
  )
}

export default Question;
