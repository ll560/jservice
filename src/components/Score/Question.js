import React from 'react'


function Question({ jserviceRandom }) {
  console.log(jserviceRandom)
  //console.log(jserviceRandom[0].question)
  // let count = 0
  // for (let i=0; i < score.length; i++){3
  //   count+= [i]
  // }
  return (
    <div>
      <h2>Score: </h2>
      <button type="button" id="increase">Increase</button>
      <button type="button" id="decrease">Decrease</button>
      <button type="button" id="reset">Reset</button>

      <div>
        {
          jserviceRandom.length > 0 ? 
          <div><h3>Question: {jserviceRandom[0].question}</h3>
          
          <h4>Category: {jserviceRandom[0].category.title}</h4> 
          <p>{jserviceRandom[0].airdate}</p></div>
          : 
          ""
         }
      </div>
    </div>
  )
}

export default Question;