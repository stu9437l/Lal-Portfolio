import React from "react";
import Navbar from "./Navbar"
import {Route,Switch} from "react-router-dom"
import About from "./About";
import Education from "./Education";
import "./Main.css"
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import CoverLetter from "./CoverLetter";
import Projects from "./Projects";
import Language from "./Language";
import Interest from "./Interest";
import Home from "./Home";
import Error from "./Error"
const Main=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/skill" component={Skills}/>
            <Route exact path="/experience" component={Experience}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/coverletter" component={CoverLetter}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/interest" component={Interest}/>
            <Route exact path="/language" component={Language}/>
            <Route component={Error}/>

        </Switch>
        
       </>
    );
};
 export default Main;