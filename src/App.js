import React from 'react';
import { Helmet } from "react-helmet";
// import logo from './logo.svg';
import AppRouter from './AppRouter'

function App() {
  return (
    <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bugzy</title>
            <link rel="icon" type="image/jpg" href={`${process.env.PUBLIC_URL}/logo.jpg`} />
        </Helmet>
        <AppRouter />
    </div>
  );
}

export default App;
