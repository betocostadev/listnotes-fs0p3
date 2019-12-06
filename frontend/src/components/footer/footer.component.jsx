import React from 'react'

const Footer = () => {
  const footerStyle = {
    margin: '0.5rem',
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <footer style={footerStyle}>
      <p><em>Note app, Department of Computer Science, University of Helsinki 2019</em></p>
    </footer>
  )
}

export default Footer