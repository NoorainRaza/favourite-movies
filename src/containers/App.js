import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import FavouriteMovies from "../components/FavouriteMovies/FavouriteMovies";
import MoviesList from "../components/MoviesList/MoviesList";
import Header from "../components/Header/Header";
import AddMovie from "../components/AddMovie/AddMovie";
const App = () => {

  let moviesList = <MoviesList />

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/favourite-movies" component={FavouriteMovies} />
          <Route path="/">
            <AddMovie />
            {moviesList}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
