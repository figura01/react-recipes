// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == import : local
import './posts.scss';
import Post from './Post';

// == Composant
const Posts = ({ posts }) => (
  <main className="posts">
    {posts.map((post) => (
      <Link key={post.id} to={`/post/${post.slug}`} className="post">
        <Post
          // Faut étiqueter le conteneur ! Copyright Amar
          // key : pour React : réconciliation
          
          // Les infos spécifique pour le post
          // On prend chaque info présente dans l'objet pour la placer sur le composant
          // title={post.title}
          // category={post.category}
          // excerpt={post.excerpt}

          // STRICTEMENT IDENTIQUE À : ... spread operator :
          // je déverse l'intégralité du contenu de l'objet dans les props du composant
          {...post}
        />
      </Link>
    ))}
  </main>
);


// Merci MiniToi (kevin :tada:)
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Posts;
