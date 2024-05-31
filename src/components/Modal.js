import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
      { isCorrect && (
          <div>
            <h1>You Win! </h1>
            <p className='solution'>Correct word : {solution}  </p>
            <p>You guessed it correct in {turn} turns</p>
          </div>
        )}

      { !isCorrect && (
          <div>
            <h1>Better luck next time </h1>
            <p className='solution'>Correct word :{solution}  </p>
            
          </div>
        )}  

    </div>
  )
}
