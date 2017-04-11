import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React and Redux tutorial</p>
                <Link to="abaut" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;
