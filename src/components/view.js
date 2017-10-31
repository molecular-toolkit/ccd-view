import React, { Component } from 'react';
import Readout from './readout';
import Molecule3d from 'molecule-3d-for-react'


class ComponentView extends Component {
    render() {
        return(
        <div className="Content">
            <Readout
                value={this.props.value}
                data={this.props.data}/>
            {this.props.data &&
            <Molecule3d modelData={this.props.data} /> }
        </div>)
    }
}

export default ComponentView;