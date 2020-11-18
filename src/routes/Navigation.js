import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation (){
    return (
        <div class = "navigation">
            <Link class = "navigation_button" to="/"><h3>Home</h3></Link>
            <Link class = "navigation_button" to="/about"><h3>About</h3></Link>
        </div>
    )
}

export default Navigation;