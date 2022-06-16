import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Question({ jserviceRandom }) {
  console.log(jserviceRandom)
 
  const [count, setCount] = useState(0)
     

  return (
    <div>
      <div>
      { jserviceRandom.length>0  ? 
      <h2>Score: {count} </h2>: "" }
      </div>
        
      <Button onClick={ () => setCount(count + jserviceRandom[0].value )}  type="button" className="btn btn-success">Increase</Button>

      <Button onClick={ () => setCount(count - jserviceRandom[0].value )} disabled={count === 0} type="button" className="btn btn-warning" id="decrease">Decrease</Button>
      <Button onClick={ () => setCount(0 )} type="button" className="btn btn-danger"id="reset">Reset</Button>

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
