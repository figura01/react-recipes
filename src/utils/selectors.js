// JavaDOC
/**
 * Get the posts linked to a given category
 * @param {Array} posts The posts to filter
 * @param {Object} category The category to filter by
 * @return {Array} The posts linked to the category
 */
// eslint-disable-next-line import/prefer-default-export
export const filterPostsByCategory = (posts, category) => {
  // on veut sélectionner les posts qui correspondent à une catégorie

  const filteredPosts = category.label === 'Accueil'
    ? posts
    : posts.filter((post) => post.category === category);

  return filteredPosts;
};
