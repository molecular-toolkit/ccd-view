import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Selector from './selector';
import '../css/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {value: null}
    }

    handleChange = (e, k, v) => this.setState({value:v});

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1 className="App-title">View the CCD</h1>
                    <Content
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

class Content extends Component {
    render() {return(
        <div className="Content">
            <p className="App-intro">
                Select a residue code:
            </p>
            <Selector
                value={this.props.value}
                onChange={this.props.onChange}/>
            <span>You selected {this.props.value}</span>
        </div>)
    }

}


export default App;
