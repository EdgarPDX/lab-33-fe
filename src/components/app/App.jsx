import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import JournalFormContainer from '../../containers/JournalFormContainer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={JournalFormContainer}/>
        </Switch>
      </Router>
    </>
  );
}
