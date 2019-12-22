// == import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == import : local
import './header.scss';

// == Composant
const Header = ({ categories, onCategoryClick }) => (
  <header>
    <nav className="nav">
      {categories.map((category) => (
        <a
          onClick={onCategoryClick(category)}
          className="nav-link"
          key={category}
        >
          {category}
        </a>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

// == Export
export default Header;
