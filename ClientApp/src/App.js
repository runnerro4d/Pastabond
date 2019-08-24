import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { LandingPageContent } from './components/LandingPageContent';
import { LoginandSignup } from './components/LogInandSignup';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={LandingPageContent} />
            <Route path='/loginandsignup' component={LoginandSignup} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
