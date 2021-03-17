import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// UI
import ScrollToTop from 'components/scroll-to-top';
import Header from 'modules/header';
// Pages
import HomePage from 'pages/home-page';
import SignInPage from 'pages/sign-in-page';
import SignUpPage from 'pages/sign-up-page';
import EventsPage from 'pages/events-page';
// Styles
import './app.sass';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__wrap">
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/sign-in" exact component={SignInPage} />
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route path="/events" exact component={EventsPage} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

export default withRouter(App);