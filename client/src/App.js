import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
        <div className="block">
          {/* Need to fix the NAVBAR */}
          <nav className="nav">
            <div className="nav-left">
              <a href="" className="nav-item">
                <h1 className="title is-4"><strong>Books Search</strong></h1>
              </a>
            </div>
            <div className="nav-right nav-menu is-active">
              <a href="#" className="nav-item">Search</a>
              <a href="#" className="nav-item">Save</a>
            </div>
          </nav>
        </div>
        {/* NAVBAR ENDS */}

        {/* HERO */}
        <div className="block">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="is-1"><strong>(React) Google Books Search</strong></h1>
                <h2 className="is-4">Search for and Save Books of Interest</h2>
              </div>
            </div>
          </section>
        </div>
        {/* HERO ENDS */}

        {/* SEARCH CARD */}
        <div className="block">
          <div className="card">
            <div className="card-content">
              <p className="is-3" id="search"><strong>Book:</strong></p>
              <div className="field has-addons">
                <p className="control">
                  <input type="text" className="input" size="144" placeholder="Enter Title..." />
                </p>
                <p className="control">
                  <a href="" className="button is-dark">Search</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SEARCH CARD ENDS*/}

        {/* TITLES CARD */}
        <div className="block">
          <div className="card">
            <div className="card-content">
              <p className="is-3" id="search"><strong>Results:</strong></p>
              <div className="card">
                <div className="card-content">
                  <p>Title 1</p>
                </div>
              </div>
              <br/>
              <div className="card">
                <div className="card-content">
                  <p>Title 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TITLES CARD ENDS*/}
      </div>
    );
  }
}

export default App;
