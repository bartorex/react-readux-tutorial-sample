import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './component/home/homePage';
import AbautPage from './component/abaut/abautPage';
import Header from './component/common/header';
import CoursesPage from './component/cours/coursesPage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/abaut" component={AbautPage} />
            <Route path="/courses" component={CoursesPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
