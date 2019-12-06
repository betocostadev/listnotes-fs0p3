import React from 'react'
import { ErrorMessage } from './notification.styles'

const Notification = ({ message, ...props }) => {
  console.log(props)
  if(message === null) {
    return null
  }

  return (
    <ErrorMessage {...props}>
      {message}
    </ErrorMessage>
  )
}

export default Notification