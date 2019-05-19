import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HomeMainContainer } from './containers/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeMainContainer} />
          <Redirect to="/" from="*" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
