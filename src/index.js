// == Import : npm
import React from 'react';
import { render } from 'react-dom';


// == Import : local
// Styles de base
import 'src/styles/index.scss';
// Composant racine
import App from 'src/components/App';


// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)

// Le JSX s'adapte. Il évalue et appelle App de la bonne manière
// Ici <App /> si c'est une fonction : App() si c'est une classe : new App()
const rootComponent = <App />;

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);
