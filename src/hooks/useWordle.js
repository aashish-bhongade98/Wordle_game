import React, {useState, useEffect} from "react";

const useWordle = (solution) =>{

 

  const [turn, setTurn] = useState(0) // turn inc with every enter press
  const [currentGuess, setCurrentGuess] = useState('') //to track whats currently typing, 
                                                       //updates everytime key is pressed
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array, for 6 turns -> 6 words
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false) //changed to true when correct guess
  const [usedKeys, setUsedkeys] = useState( {} ) // will get updated after every word submit

// format a guess into an array of objects of letters
// ex: [ { key:'a', color:'yellow' }]
const formatGuess = () => {
  let solutionArray = [...solution] //spread syntax-to to seperate the letters from string

  //one step further here array of objs and making each letter an object with some properties
   let formattedGuess = [...currentGuess].map( letter =>{
    return {key: letter, color: 'grey' } //keeping it default as grey,can be changed it later
    } )

  //looping thru formattedArray and compare with solutionArray for any match

  //green letter
   formattedGuess.forEach( (letter, i)=>{
     if(solutionArray[i] ===  letter.key){
      formattedGuess[i].color = 'green'
      solutionArray[i] = null
     }
   } )

  //yellow letter
   formattedGuess.forEach( (letter, i)=>{

    //double checking the letter and color so that already correct letter color isnt overridden
    if(solutionArray.includes(letter.key) && letter.color !== 'green' ){
      formattedGuess[i].color ='yellow'
      //matching the letter from input letter in soln array and setting to null
      solutionArray[solutionArray.indexOf(letter.key)] = null
    }
   } )

  return formattedGuess

}
   
//add new guesses to the guess state
//update the isCorrect state if guess is correct
// add one to the turn state
const addNewGuess = (formattedGuess)=>{

  if(currentGuess === solution){
    setIsCorrect(true)
  }

  setGuesses( prevGuesses =>{
    let newGuesses = [...prevGuesses]
    newGuesses[turn] = formattedGuess

    return newGuesses
  })

  setHistory( prevHistory =>{
    return [...prevHistory, currentGuess]
  })

  setTurn( prevTurn =>{
    return prevTurn + 1
  } )

  //using it here because after having added a new guess, it can be used here before it is reset
  setUsedkeys( (prevUsedkeys)=>{
    let newKeys = {...prevUsedkeys}
 
    //looping thru formattedGuess array bcoz we already have currentGuess in seperated object form
    formattedGuess.forEach( letter =>{
      const currentColor = newKeys[letter.key]

      if( letter.color ==='green'){
        newKeys[letter.key] = 'green'
        return
      }

      if( letter.color ==='yellow' && currentColor !== 'green' ){
        newKeys[letter.key] = 'yellow'
        return
      }

      if(letter.color ==='grey' && currentColor !=='green' && currentColor !=='yellow' ){
        newKeys[letter.key ] = 'grey'
        return
      }

    })
    return newKeys

  } ) 

  setCurrentGuess('')

}

// handle keyup event and track current guess
//if user presses enter add to the new guess
//taking only the key property from event object
const handleKeyup = ({key})=>{

  if(key==='Backspace'){
    //to remove the last character slice(start index, index to end of stringObj) is used
    setCurrentGuess( prev =>{
      return prev.slice(0, -1)
    } )
    return

  }
  if(key ==='Enter' ){

    //add guess only if turn < 5
    if(turn > 5){
      console.log("Your 5 guessesa are over")
      return
    }
    // word length only 5 chars
     if(currentGuess.length !==5){
      console.log("Only a 5 letter word is acceptable")
      return
     }
    // no duplicate entry 
    if(history.includes(currentGuess)){
      console.log("You already used this word")
      return
    }
    // since currentGuess is a state it doesnt need to added as parameter
    const formatted =  formatGuess()
    addNewGuess(formatted)

  }

  //to avoid other keys apart from letters to be taken we use regEx
  if(/^[A-Za-z]$/.test(key)  ){
    //we also want input to be only for 5 letters
    if(currentGuess.length < 5){
      // prev(curent key) concatinating with new key press to update its state
      setCurrentGuess( prev =>{
       return  prev+key
      } )

    }
  }
 }

 return( {turn, currentGuess, isCorrect, guesses, handleKeyup, usedKeys } )

}

export default useWordle
