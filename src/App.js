import React, { Component } from 'react';
import './App.css';
// import DemoApp from './DemoApp';
import { DanteEditor } from 'Dante2/es';
import defaultOptions from "./defaultOptions";
import data from './data';
import { Map, fromJS } from 'immutable';
import 'Dante2/dist/DanteStyles.css';
import { convertToRaw } from 'draft-js';



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
        this.state = {
            data: ""
        }
    }


    componentWillMount() {

    }


    componentDidMount() {
        console.log("Get current editor state: ");
        const currentContent = this.editorState.getCurrentContent();
        console.log(convertToRaw(currentContent));
        console.log("Get first block:")
        console.log(currentContent.getFirstBlock().getText());

    }


    render() {
        return (
            <DanteEditor
                content={data}
                ref={(danteEditor) => { this.editorState = danteEditor.state.editorState }}
                config={{ ...this.options, debug: true, read_only: false }}
            />
        );
    }
}

export default App;


