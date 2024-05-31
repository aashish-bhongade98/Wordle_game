// most of our game UI will be in this component

import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Row from './Row'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({solution}) {

  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
  const [showModal, setShowModal] = useState(false) // setting state to false bcoz,it shud be shown when game ends

  useEffect( ()=>{
    window.addEventListener('keyup', handleKeyup)

    if(isCorrect){
      setTimeout( ()=> setShowModal(true), 2000 )
      window.removeEventListener('keyup', handleKeyup)     

    }
    if(turn >5 && !isCorrect ){
      setTimeout( ()=> setShowModal(true), 2000 )
      window.removeEventListener('keyup', handleKeyup)

    }

    //cleanup function to unattach the listner. so we dont add mulitple events one after other
    return() => window.removeEventListener('keyup', handleKeyup)     
    
  }, [handleKeyup, isCorrect, turn] )

 

  return (
    <div>
      current guess - {currentGuess}
    <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
    <Keypad usedKeys={usedKeys} />
    {showModal &&  <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}

    </div>
    
  )
}
