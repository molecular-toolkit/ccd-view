import React, { Component } from 'react';
import Selector from './selector';
import Readout from './readout';


class ComponentView extends Component {
    render() {return(
        <div className="Content">
            <p className="App-intro">
                Select a residue code:
            </p>
            <Selector
                value={this.props.value}
                onChange={this.props.onChange}/>
            <Readout
                value={this.props.value}
                data={this.props.data}/>
        </div>)
    }
}

export default ComponentView;