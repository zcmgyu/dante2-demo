import React, { Component } from 'react';
import './App.css';
// import DemoApp from './DemoApp';
import { DanteEditor } from 'Dante2/es';
import defaultOptions from "./defaultOptions";
import data from './data';
import { Map, fromJS } from 'immutable';
import 'Dante2/dist/DanteStyles.css';

// create base element
// let g = document.createElement('div');
// g.setAttribute("id", "app");
// document.body.appendChild(g);
// g.style.marginTop = "150px";

class App extends Component {
    constructor(props) {
        super(props)
        let config = Map(fromJS(defaultOptions(props.config)))
        this.options = config.mergeDeep(props.config).toJS()
    }
    render() {
        return (
            <DanteEditor
            content={data}
                config={this.options}
            />
        );
    }
}

export default App;
