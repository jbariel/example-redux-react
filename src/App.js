import React from 'react';
import './App.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state = {count: 6}, action) {
  let newCount = state.count;
  switch(action.type) {
    case 'GIMME_SOME':
      newCount++;
      break;
    case 'TAKE_SOME':
      newCount--;
      break;
    default:
      // ignore
      break;
  }
  return {
    count: newCount
  };
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src='logo512.gif' className="App-logo" alt="logo" />
          <p>
            Simple Counter
          </p>
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
