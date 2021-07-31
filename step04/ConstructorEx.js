import React, {Component} from 'react';

class ConstructorEx extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log('construcor Call');
    }
    render(){
        return(
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default ConstructorEx;