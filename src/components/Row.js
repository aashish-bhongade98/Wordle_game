import React from 'react'

export default function Row({gues , currentGuess}) {
    //gues prop can be past or undefined guess
    //so we check if that guess is undefined or empty or has a value and then display it

    //if gues has value
    if(gues){
        //to display past turns
        return(
            <div className='row past'>
                {gues.map( (letter, i)=>(
                    //showing color coded letters after submitting
                    <div key={i} className={letter.color}> {letter.key}  </div>

                ) ) }
            </div>
        )

    }
    // if it is the current turn
    if(currentGuess){
        //currentGuess is a string, but to show each letter being typed into boxes we split them
        let letters = currentGuess.split('')
        return(
            <div className='row current' >
              {letters.map( (letter, i) =>(
                <div key={i} className='filled' > {letter} </div>
                //this renders each box with each letter, but other blank boxes should also be shown 
                ) )
               } 
               
               {//to show empty boxes, val=undefined hence displayed as blank
                [...Array(5 - letters.length)].map( (val, i)=> (
                  <div key={i}> </div>

               ) )  } 

            </div>
        )
    }

  //if gues is undefined  or no value then it goes here showing empty rows
  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
</div>
  
  )
}