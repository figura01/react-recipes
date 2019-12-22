// == import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Post = ({ title, category, excerpt }) => (
  <article className="post">
    <h2 className="post-title">{title}</h2>
    <h3 className="post-category">{category}</h3>
    <p className="post-excerpt">{excerpt}</p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

// == Export
export default Post;
