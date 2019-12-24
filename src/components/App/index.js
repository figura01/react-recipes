// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import { filterPostsByCategory } from 'src/utils/selectors';
// Components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
// Data
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';

// == Composant
// Une classe pour gérer du state
class App extends React.Component {
  constructor(props) {
    // On appelle le constructor du parent React.Component
    super(props);
    // State : stocker l'état de l'application
    // Si le state change, le render() du composant est relancé
    //  Point de départ : state initial
    this.state = {
      currentCategory: {
        route: '/',
        label: 'Accueil',
      },
    };
    // console.log(this);

    // On veut transmettre / fournir la valeur de this (objet / instance courante)
    // à nos méthodes persos (handleClick, handle....)
    this.handleClick = this.handleClick.bind(this);
  }


  // function handleClickOnDocument() { .... }
  // document.addEventListener('click', function() { console.log('Je click'); });
  // Agir sur le state (setState)
  handleClick(category) {
    console.log('Je click depuis la méthode de App');
    // Je retourne une fonction qui possède en closure la connaissance de category
    return () => {
      // méthode pour modifier le state
      // fournir le bout de state que React doit changer
      // ON NE MODIFIERA JAMAISSSSS LE STATE PAR NOUS MEME
      // JAMAIS ça : this.state = { maNouvelle valeur };
      this.setState({
        currentCategory: category,
      });
      // On change currentCategory dans le state via setState.
      // - React prend le "bout de state" fournit
      // - change le state pour nous
      // - redéclenche le rendu du composant (render())
      // - identifier les différences
      // - demander à react dom de refaire le rendu du strict nécessaire
    };
  }

  // Rendu du composant
  render() {
    // const currentCategory = this.state.currentCategory;
    // ===
    const { currentCategory } = this.state;

    // Si la category est all je veux tous les posts sinon je filtre
    // const filteredPosts = currentCategory.label === 'Accueil'
    //   ? postsData
    //   : postsData.filter((post) => post.category === currentCategory);

    // on range la fonction dans un fichier d'outils

    const filteredPosts = filterPostsByCategory(postsData, currentCategory);

    return (
      <div id="blog">
        <Header categories={categoriesData} onCategoryClick={this.handleClick} />
        <Posts posts={filteredPosts} />
        <Footer />
      </div>
    );
  }
}


// VERSION STATELESS
// const App = () => {
//   const currentCategory = 'React';
//   const filteredPosts = postsData.filter((post) => post.category === currentCategory);

//   return (
//     <div id="blog">
//       <Header categories={categoriesData} />
//       <Posts posts={filteredPosts} />
//       <Footer />
//     </div>
//   );
// };

// == Export
export default App;
