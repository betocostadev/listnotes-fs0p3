import React from 'react'

import Button from './note.styles'

const Note = ({note, toggleImportance}) => {
  const label = note.important
    ? 'not important' : 'important'
  return (
    <li className='note'>
      {note.content}
      <Button onClick={toggleImportance}>{label}</Button>
    </li>
  )
}

export default Note