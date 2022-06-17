import axios from 'axios';
import { useState } from 'react';
import Question from '../Question/Question';
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  //create state
  const [jservice, setJservice] = useState('')
  const [toggled, toggle] = useState(false)
  //create a state a for question info
  const [jserviceRandom, setJserviceRandom] = useState({})

  const handleChange = async (e)=> {
    e.preventDefault()
    const baseURL = 'http://jservice.io/'
    const query = '/api/random'
    console.log(baseURL + query)
  try {
    const response = await axios.get(baseURL+query)
    console.log(response.data)
    setJserviceRandom(response.data)
    setJservice(response.data)
  }catch (e){
  console.log(e)
  }
}


  return (
    <div className="card " style={{width: "auto", height: "auto", margin: 40, textAlign: 'center'}}>
      <h1 className="card-title mb-0">Welcome to Jeopardy!</h1>
       
       <h2 className='mb-0'>Let's Play!</h2>
       
      <form onSubmit={handleChange}>
      <Button type='submit' id="submit">Get Random Trivia Question</Button>
      
      </form>
      <Question jserviceRandom={jserviceRandom}></Question>

      <div >
        {jservice.length> 0 ? <div >{toggled && <div><p>{jservice[0].answer.replace(/<\/?[^>]+(>|$)/g, '')}</p></div>}
     <Button onClick={() => toggle( toggled => !toggled)}>Show answer</Button></div> : " "}
      
     </div>

    </div>
  );
}

export default App;

