import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p style={{fontFamily: 'Roboto',margin: '5vh auto'}}>
    Show:
    {' '}
    <FilterLink filter="all">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="active">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="completed">
      Completed
    </FilterLink>
  </p>
)

export default Footer
