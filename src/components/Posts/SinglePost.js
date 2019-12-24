import React from 'react';
import PropTypes from 'prop-types';

const SinglePost = ({ post }) => (
  <article className="post post-single">
    <h2 className="post-title">{post.title}</h2>
    <h3 className="post-category">{post.category}</h3>
    <p className="post-content">{post.content}</p>
  </article>
);

SinglePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default SinglePost;
