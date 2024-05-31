# Wordle_game
Based on the New York Times highly popular game Wordle.

A simple Wordle clone built with React. This project demonstrates the use of React hooks, state management, and custom hooks for handling the game logic.

Features
Randomly fetches a new 5-letter word from a JSON server.
Allows users to guess the word with feedback on each letter's accuracy (green for correct, yellow for misplaced, grey for incorrect).
Tracks the user's guesses and prevents duplicate entries.
Provides a limited number of attempts (6 guesses).
Implements a custom hook (useWordle) to manage the game logic and state.


Start the JSON server (ensure you have json-server installed):

npx json-server --watch data/db.json --port #number


Usage
The game will start automatically with a new word fetched from the JSON server.
Enter guesses using the keyboard.
Feedback on each guess is provided by color-coded letters.


Game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'

