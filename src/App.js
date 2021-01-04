import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import FavouriteMovies from "./components/FavouriteMovies/FavouriteMovies";
import MoviesList from "./components/MoviesList/MoviesList";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Header />
          <Route path="/">
            <MoviesList />
          </Route>
          <Route path="/favourite-movies">
            <FavouriteMovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
