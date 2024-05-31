import React, { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
 const [solution, setSolution] =  useState(null)

 useEffect( ()=> { 
  fetch('http://localhost:3001/solutions')
  .then( res => res.json() )
 // .then(  console.log) 
 // to get a word from json server randomly
  .then(data =>{
    const randomSol = data[Math.floor(Math.random() *data.length  ) ]
    console.log(randomSol.word)
    setSolution(randomSol.word)
  })
 }, [setSolution] )

 // 
  return (
    <div className="App">
      <h1 >Aashish's Wordle</h1>

        {/* this because for a split second before fetch is done we dont have the soln */ }  
      {solution &&  <Wordle solution={solution} />  }
    </div>
  );
}

export default App

