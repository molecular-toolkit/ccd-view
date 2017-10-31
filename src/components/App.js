import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ComponentView from './view'
import '../css/App.css';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {value: null, data: null}
    }

    handleSelection = (e, k, v) => {
        this.setState({value:v, data:null});
        axios.get(`data/${v}.json`)
            .then(this.handleDataLoaded);
    };

    handleDataLoaded = (response) => {

        this.setState({data:response.data})
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1 className="App-title">View the CCD</h1>
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
