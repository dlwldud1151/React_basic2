import React, {Component} from 'react';

class GetDerivedStateFromPropsEx extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFormProps call :'+props.prop_value);
        return{};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. construcor Call');
    }
    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default GetDerivedStateFromPropsEx;