import React, { useState, useEffect } from 'react';
import Flashcardlist from './flashcardlist';
import './app.css'
import axios from 'axios'

function App(){
  const[flashcards, setflashcards]=useState(SAMPLE_FLASHCARDS)
  
  useEffect(()=> {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res =>{
        res.data.results.map
        console.log(res.data)
      })
    }, [])
  
  return(
  <Flashcardlist flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS=[
  {
    id:1,
    question:'What is 2+2?',
    answer:'4',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id:1,
    question:'What is 2/2?',
    answer:'1',
    options:[
      '2',
      '3',
      '4',
      '1'
    ]
  },
  {
    id:1,
    question:'What is 2+1?',
    answer:'3',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  }
]

export default App;
