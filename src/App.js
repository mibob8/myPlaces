import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import User from "./user/pages/User"
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return <Router>
    <Route path="/" component={User}/>  
    <Route path="/places/new" component={NewPlace}/>

  </Router>
};

export default App;
