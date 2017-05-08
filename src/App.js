import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './component/home/homePage';
import AbautPage from './component/abaut/abautPage';
import Header from './component/common/header';
import CoursesPage from './component/cours/coursesPage';
import ManageCoursePage from './component/cours/manageCoursePage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div className="row">
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/abaut" component={AbautPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course" component={ManageCoursePage} />
            {/*<Route path="/course/:id" component={ManageCoursePage} />*/}
            <Route path="/" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
