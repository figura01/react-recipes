// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
  <div id="blog">
    <Header categories={categoriesData} />
    <Switch>
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
