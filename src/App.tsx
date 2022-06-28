import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import LoginPage from './page/login/login.component';
import ProfilePage from './page/profile/profile.component';
import SignUpPage from './page/signup/signup.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/profile'>
          <ProfilePage />
        </Route>
        <Route path='/sign-up'>
          <SignUpPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
