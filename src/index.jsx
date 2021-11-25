import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import MovieList from './components/MovieList'
import Movie from './components/Movie';

import movies from './movies.js';

import Menu from './components/Menu'

import './style.css';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import Movies from './components/Movies';
import Nic from './components/Nic';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Movies</h1>

      <Menu />

      <Routes>
	      <Route path="/" element={ <Home /> } />
        <Route path="/reviews" element={ <Reviews /> } />
	      <Route path="/articles" element={ <Articles /> } />
	      <Route path="/movies" element={ <Movies /> } >
          <Route index element={<Navigate to="/movies/1" replace={true} />} />
		      <Route path=":id" element={ <Movie /> } />
	      </Route>
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
