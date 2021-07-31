import React, {Component} from 'react';

class ComponentDidMountEx extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFormProps call :'+props.prop_value);
        return{};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. construcor Call');
    }
    componentDidMount(){
        console.log('4. componentDidMount Call')
    }
    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
        )
    }
}

export default ComponentDidMountEx;