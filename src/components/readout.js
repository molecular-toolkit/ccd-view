import React, { Component } from 'react';


class Readout extends Component {
    render(){
        if(this.props.data) {
            return(
                <div className="Readout">
                    You selected {this.props.data.name} which
                    is a {this.props.data.type} residue
                </div>
            )
        }else if(this.props.value){
            return(
                <div className="Readout">
                    Loading ...
                </div>)
        }else {
            return (
                <div className="Readout">
                    Select a residue.
                </div>)
        }
    }
}

export default Readout;