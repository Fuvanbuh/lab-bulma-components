import React, { Component } from 'react'


class Navbar extends Component {
  render() {
    return (
      <nav class="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
        </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a style={button} className="bd-tw-button button" >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span >
                      Signup
                </span>
                  </a>
                </p>
                <p className="control">
                  <a style={button} className="button is-primary" href="">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span >Login</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>)
  }

}

const button = {
  textAlign: 'center'
}

export default Navbar;
