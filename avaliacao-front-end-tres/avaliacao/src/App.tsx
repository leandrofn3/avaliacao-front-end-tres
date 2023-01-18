import React, { Fragment } from 'react';
import AppRoutes from './Routes';
import GlobalStyle from './Config';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <AppRoutes/>
    </React.Fragment>
  );
}

export default App;
