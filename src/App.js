import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <footer className="footer">
                    <p>Developed by Patrick Brebner</p>
                </footer>
            </div>
        );
    }
}

export default App;
