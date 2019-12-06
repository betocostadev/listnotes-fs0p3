import React from 'react'

const Header = ({course}) => (
  <header>
    <h1>Course | {course.name}</h1>
    <h2>Year | {course.year}</h2>
  </header>
)

export default Header