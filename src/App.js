import React, { Component } from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar';
import Container from './Components/Container';
import { Router } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Particles from 'react-particles-js';

const particlesoptions = {

  particles: {

    //  number : {
    //    value : 10,
    //    density : {

    //      enable : true,
    //      value_area: 500
    //    }
    //  }
    // }
    nb: 80
  },

  interactivity: {
    events: {
      onresize: {
        enable: true,
        density_auto: true,
        density_area: 150 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  }








  // particles: {

  //  number : {
  //    value : 10,
  //    density : {

  //      enable : true,
  //      value_area: 500
  //    }
  //  }
  // }
}

class App extends Component {
  render() {
    return (
      <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
        <div >
          <Particles
            className="particles"
            params={particlesoptions}
          />
          <NavbarMenu />
          <Container />
        </div>
      </Router>

    );
  }
}

export default App;
