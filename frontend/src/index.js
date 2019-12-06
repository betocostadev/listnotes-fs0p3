import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'

// import axios from 'axios'

// Working axios promise (fulfilled)
// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)
// promise.then(response => {
//   console.log(response.data)
// })

// Commom pattern:
// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

// Gettin a promise rejected - There is no /foobar on the json db
// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)


/*
  // ANTI-PATTERN: This way works, it uses the index of the array elements as keys, but
  // this is not recommended. It can cause undesired problems.
  const rows = () => notes.map((note, i) =>
    <li key={i}>
      {note.content}
    </li>
  ) */

  // const result = notes.filter(note => note.id > 1).map(note => note.id)
  // const result = notes.map(note => note.content )
  // console.log(result)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
