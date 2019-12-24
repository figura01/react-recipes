// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

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

    // On veut transmettre / fournir la valeur de this (objet / instance courante)
    // à nos méthodes persos (handleClick, handle....)
    this.handleClick = this.handleClick.bind(this);
  }


  // function handleClickOnDocument() { .... }
  // document.addEventListener('click', function() { console.log('Je click'); });
  // Agir sur le state (setState)
  handleClick(category) {
    console.log('Je click depuis la méthode de App');
  }

  // Rendu du composant
  render() {
    const filteredPosts = filterPostsByCategory(postsData, categoriesData[2]);
    console.log(filteredPosts);

    return (
      <div id="blog">
        <Header categories={categoriesData} onCategoryClick={this.handleClick} />
        <Route exact path="/">
          <Posts posts={postsData} />
        </Route>
        <Route path="/react">
          <Posts posts={filteredPosts} />
        </Route>
        <Footer />
      </div>
    );
  }
}

// == Export
export default App;
