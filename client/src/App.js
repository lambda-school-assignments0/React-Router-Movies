import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    if (this.state.savedList.filter(item => item.id === movie.id).length === 0) {
      const savedList = this.state.savedList;
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path='/' component={MovieList} exact />
        {/* <Route path='/movies/:id' component={Movie} addToSavedList={this.addToSavedList} /> */}
        <Route path='/movies/:id' render={(props) => (
          <Movie {...props} addToSavedList={this.addToSavedList} />
        )} />
      </div>
    );
  }
}
