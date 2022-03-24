import './style.css';
import React from 'react';

function App() {
  const [state, setState] = React.useState({
    num1: Math.ceil(Math.random() * 9),
    num2: Math.ceil(Math.random() * 9),
    response: '',
    score: 0,
    incorrect: false,
  });

  function inputKeyPress(event) {
    if (event.key === 'Enter') {
      const answer = parseInt(state.response);

      if (state.num1 + state.num2 === answer) {
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 9),
          num2: Math.ceil(Math.random() * 9),
          response: '',
          score: state.score + 1,
          incorrect: false,
        });
      } else {
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 9),
          num2: Math.ceil(Math.random() * 9),
          response: '',
          score: state.score - 1,
          incorrect: true,
        });
      }
    }
  }

  if (state.score === 10) {
    return (
      <div>
        <h1 className="win">YOU WON!</h1>
        <button onClick={resetGame}>RESET</button>
      </div>
    );
  } else if (state.score < 0) {
    return (
      <div>
        <h1 className="lose">YOU LOST!</h1>
        <button onClick={resetGame}>RESET</button>
      </div>
    );
  }

  function resetGame(e) {
    window.location.reload();
  }

  function updateResponse(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  return (
    <div>
      <div className={state.incorrect ? 'incorrect' : ''}>
        {state.num1} + {state.num2}
      </div>
      <input
        autofocus={true}
        onKeyPress={inputKeyPress}
        onChange={updateResponse}
        value={state.response}
      />
      <div id="score">Score: {state.score}</div>
    </div>
  );
}

export default App;
