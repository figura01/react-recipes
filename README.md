# Challenge : Le Blog avec React-Router

Le but : refaire le challenge Blog, avec cette fois-ci [React Router](https://reacttraining.com/react-router/). Le but : afficher une URL différente pour chacune des catégories.

![resultat](resultat.gif)

## Instructions

### Routeur

* Reprenez la correction du challenge Blog.
* Installez `react-router-dom` ! :smiley:
* Utilisez les composants découverts dans le parcours *React-Router DIY* :
  - `Route`
  - `Link`, `NavLink`
  - `BrowserRouter as Router`

Vous n'avez pas vraiment besoin d'autres composants ! En revanche, n'hésitez pas à lire [la documentation](https://reacttraining.com/react-router/web/guides/philosophy) de chacun d'eux.

### Routes

Afin de gérer finement les routes liées aux catégories, on pourra modifier les data de `categories.js`, pour distinguer le nom de page à afficher, de l'URL à afficher. Par exemple :

```js
export default [
  {
    route: '/',
    label: 'Accueil',
  },
  {
    route: '/angular',
    label: 'Angular',
  },
  {
    route: '/react',
    label: 'React',
  },
  {
    route: '/oclock',
    label: 'O’clock',
  },
  {
    route: '/autre',
    label: 'Autre',
  },
];
```

## Help

React Router :
* https://github.com/ReactTraining/react-router
* https://reacttraining.com/react-router/
* https://reacttraining.com/react-router/web/guides/philosophy
* https://reacttraining.com/react-router/web/guides/quick-start

API :
* https://reacttraining.com/react-router/web/api/BrowserRouter
* https://reacttraining.com/react-router/web/api/Route
* https://reacttraining.com/react-router/web/api/Link
* https://reacttraining.com/react-router/web/api/NavLink
