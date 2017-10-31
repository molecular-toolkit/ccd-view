import axios from 'axios';

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';

import ComponentView from './view';
import Selector from './selector';
import '../css/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {value: null,
            data: null,
            choices:null}
        axios.get('data/allnames.json')
            .then(this.loadSelectionItems);
    }

    loadSelectionItems = (response) => {
        const choices = [];
        response.data.names.forEach((name) =>{
            choices.push(<MenuItem value={name}
                                   key={name}
                                   primaryText={name}/>)
        });

      this.setState({choices: choices})
    };

    handleSelection = (e, k, v) => {
        this.setState({value:v, data:null});
        axios.get(`data/${v}.json`)
            .then(this.handleDataLoaded);
    };

    handleDataLoaded = (response) => {
        const data = response.data;
        data.chains = [{
            'description':'',
            'name':''
        }];
        data.residues = [{
            "chain_index":0,
            "name":"LIG1",
            "sequence_number":1
        }];
        this.setState({data:data})
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1 className="App-title">View the CCD</h1>
                    <p className="App-intro">
                        Residue:
                    </p>
                    <Selector
                        value={this.state.value}
                        items={this.state.choices}
                        onChange={this.handleSelection}/>
                    <ComponentView
                        value={this.state.value}
                        data={this.state.data}
                        onChange={this.handleSelection}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}


export default App;
