import React, { Component } from "react";

import "../styles/header.css";
import headerIcon from "../assets/favicon.ico";

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header">
                <img className="headerIcon" src={headerIcon}></img>
                <h1 className="heading">CV Builder</h1>
            </div>
        );
    }
}

export default Header;
