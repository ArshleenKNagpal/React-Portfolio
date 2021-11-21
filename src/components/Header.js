import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


import AboutMe from './AboutMe'
import Skills from './Skills'
import ContacMe from './ContactMe'
import Home from '../components/Home';

function Header() {
    return (
<Router>
    
    <header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutMe.html">About Me</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="contactMe.html">Contact Me</a></li>
        </ul>
    </nav>
</header>

<Switch>
<Route path="/aboutMe"> <AboutMe /></Route>
<Route path="/skills"> <Skills /></Route>
<Route path="/contactMe"> <ContacMe /></Route>
<Route path="/"> <Home /></Route>

</Switch>
</Router>

    );
}
export default Header;