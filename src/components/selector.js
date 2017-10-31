import React, { Component } from 'react';
import resNames from "../static/names";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const items = [null];
for (let item of resNames.names){
    items.push(<MenuItem value={item}
                         key={item}
                         primaryText={item}/>)
}



class Selector extends Component {
    render() {
        return (
            <DropDownMenu maxHeight={300}
                          value={this.props.value}
                          onChange={this.props.onChange}>
                {items}
            </DropDownMenu>
        )
    }

}

export default Selector;