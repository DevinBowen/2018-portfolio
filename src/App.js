import React, { Component } from 'react';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="page">
        <nav className="mobileNav">
          <div className="logo">logo</div>
          <div className="hamMenu">ham</div>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
