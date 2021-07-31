import React, {Component} from 'react';

class RenderEx extends Component{
    render(){
        console.log('render Call');
        return(
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}

export default RenderEx;