import React, { Component } from 'react';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="page">
        <nav className="mobileNav">
          <div className="logo"><img src={require("./images/logo.png")} alt=""/></div>
          {/* <div className="hamMenu"><div className="hamButton"><div className="inside">MENU</div></div></div> */}
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
