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

Contributing
Feel free to submit issues and pull requests.

License
This project is licensed under the MIT License.
