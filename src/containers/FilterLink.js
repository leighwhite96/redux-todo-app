import React from 'react';
import { NavLink } from 'react-router-dom';
import './FilterLink.css'

const FilterLink = ({filter, children}) => (
  <NavLink
    to={filter === 'all' ? '' : filter}
    className="links"
    activeClassName="selected"
  >
    {children}
  </NavLink>
);

export default FilterLink;
