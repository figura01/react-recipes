// == Import : npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

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
const App = () => (
  // Route : si on ne met pas "exact", la comparaison est "le chemin commence par ..."
  // avec exact : "le chemin est exactement ..."

  // Switch : l'ordre des Routes est important, on s'arrête à la première qui "match"
  // On peut avoir une dernière Route sans path => erreur 404

  // on voudrait rediriger /jquery vers /autre (par exemple on avait une catégorie
  // jquery et on a déplacé les articles)

  // si on voulait gérer un ensemble de redirections, on pourrait par exemple avoir
  // un tableau d'objets (oldUrl: , newUrl: )
  <div id="blog">
    <Header categories={categoriesData} />
    <Switch>
      <Redirect from="/jquery" to="/autre" />
      {categoriesData.map((category) => (
        <Route key={category.label} exact path={category.route}>
          <Posts posts={filterPostsByCategory(postsData, category)} />
        </Route>
      ))}
      <Route>
        <div>Oops</div>
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
