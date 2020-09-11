import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import RepositoryList from './pages/RepositoryList';
import RepositoryDetail from './pages/RepositoryDetail';

function App() {

  return <>
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={RepositoryList} />
        <Route path="/:repositoryName" component={RepositoryDetail} />
      </Switch>
    </HashRouter>
  </>;
}

export default App;