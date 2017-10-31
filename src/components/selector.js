import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const nullItems = [(<MenuItem value="Loading ..."
                              primaryText="Loading"
                              key="singleton"/>)];

class Selector extends Component {
    render() {

        if(this.props.items) {
            return (
                <DropDownMenu maxHeight={300}
                              value={this.props.value}
                              onChange={this.props.onChange}>
                    {this.props.items}
                </DropDownMenu>
            )
        }else{
            return (
                <DropDownMenu maxHeight={300}
                              value={this.props.value}>
                    {nullItems}
                </DropDownMenu>
            )
        }
    }
}

export default Selector;