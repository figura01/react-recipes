// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == import : local
import './header.scss';

// == Composant
const Header = ({ categories }) => (
  <header>
    <nav className="nav">
      {categories.map((category) => (
        <Link
          to={category.route}
          key={category.label}
          className="nav-link"
        >
          {category.label}
        </Link>
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
