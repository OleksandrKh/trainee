import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App';
import './styles/index.css';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


//
// store.subscribe(() => {
//   console.log('Subscribe', store.getState());
//   const list = document.querySelector('.list');
//   list.innerHTML = '';
//   document.querySelector('.trackInput').value = '';
//
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   })
// });
//
// store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
// store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
//
//
// const addTrackBtn = document.querySelector('.addTrack');
// addTrackBtn.addEventListener('click', () => {
//   const trackName= document.querySelector('.trackInput').value;
//   if (trackName === '') { return; }
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// })
