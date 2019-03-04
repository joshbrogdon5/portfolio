import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Nav />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
