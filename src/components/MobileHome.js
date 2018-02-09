import React, { Component } from 'react';
import '../css/mobileHome.css';

export default class MobileHome extends Component {

  render() {
    return (
      <div>
      <div className="mobileHomePage">
          <div className="rotate">PORTFOLIO</div>
      </div>
      <div className="bio">
      <img src={require('../images/portrate.JPG') } alt="bla"/>
      <br/>
      <h1>Devin Bowen</h1>
      <h2>Web developer currently attending DevMountain. Enjoys long walks on the beach and romantic dinners outside of caves. Studied for a total of 5 years. Also does not believe in the moon landing or that Elon has mad it to space.</h2>
      <br/>
      <h1>-Skills-</h1>
      <h2>HTML5 | CSS3 | Javascript | React | Angular | Node.js | Git | PostgreSQL</h2>
      <br/>
      <h1>Education</h1>
      <h2>DevMountain - Provo, UT</h2>
      <h2>Web Development Bootcamp</h2>
      <h2><a href="https://devmountain.com/">DevMountain Website</a></h2>
      </div>
      </div>
    );
  }
}
