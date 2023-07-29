import React, { useState, useEffect, useRef } from 'react';
import Flashcardlist from './flashcardlist';
import './app.css'
import axios from 'axios'

function App(){
 const[flashcards, setflashcards]=useState(SAMPLE_FLASHCARDS)
  
  useEffect(()=> {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res =>{
        setflashcards(res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer)
          const options=[
            ...questionItem.incorrect_answers.map(a => decodeString(a)
            ), 
            answer]
          return{
            id:`${index}=${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
    }, [])
  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }



  return(
    <div className="container">
  <Flashcardlist flashcards={flashcards}/>
  </div>
  );
}

const SAMPLE_FLASHCARDS=[

  {
    id:1,
    question:'Whenw was the movie "dead poets society" released?',
    answer:'1989',
    options:[
      '1982',
      '1999',
      '1984',
      '2001'
    ]
  },
]

export default App;
