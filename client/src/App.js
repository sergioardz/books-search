import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Search from "./components/search";
import Titles from "./components/titles";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="block">
        <Navbar />
        <Hero />
        <Search />
        <Titles />
        <Footer />
      </div>
    );
  }
}

export default App;
