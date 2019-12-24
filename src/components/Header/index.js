// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == import : local
import './header.scss';

// "<NavLink exact" strictement identique à "<NavLink exact={true}"

// == Composant
const Header = ({ categories }) => (
  <header>
    <nav className="nav">
      {categories.map((category) => (
        <NavLink
          exact
          to={category.route}
          key={category.label}
          className="nav-link"
          activeClassName="nav-link-active"
        >
          {category.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Header;
