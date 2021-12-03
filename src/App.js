import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Disney, Flights, Hotels, Login, Signup, Account } from './views';
import { Layout } from './components';
import routes from './routes/routes.json';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.disney} component={Disney} />
          <Route exact path={routes.flights} component={Flights} />
          <Route exact path={routes.hotels} component={Hotels} />
          <Route exact path={routes.login} component={Login} />
          <Route exact path={routes.signup} component={Signup} />
          <Route exact path={routes.account} component={Account} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
