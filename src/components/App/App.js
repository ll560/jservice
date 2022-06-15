import axios from 'axios';
import { useState } from 'react';
import Question from '../Score/Question'
import './App.css';

function App() {
  //create state
  const [jservice, setJservice] = useState('')
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
  }catch (e){
  console.log(e)
  }
}

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
       
       <h2>Let's Play!</h2>
       
      <form onSubmit={handleChange}>
      <button type='submit' id="submit">Get Random Trivia Question</button>
      
      </form>
      <Question jserviceRandom={jserviceRandom}></Question>
      {/*Child of App.js*/}
     
    </div>
  );
}

export default App;
