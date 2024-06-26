import React from 'react'
import Row from './Row'

export default function Grid({currentGuess, guesses, turn}) {
  return (
    //map thru the guesses array(initialised with size 6) and return a row component
    <div>
        {/*function taking individual guess from guesses array */}
        {guesses.map( (gues, i)=>{
          // this section to display for current turn word to the grid boxes using currentGuess state
            if(turn === i){
              return <Row key={i} currentGuess={currentGuess} />
            }
          // for the already submitted words from the guesses array mapping with gues
            return <Row key={i} gues={gues} />

        } ) }

    </div>
  )
}
