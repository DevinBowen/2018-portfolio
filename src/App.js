import React, { Component } from 'react';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="">
        <nav className="mobileNav">
          <div>one</div>
          <div>two</div>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
