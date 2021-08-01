import React, {Component} from 'react';

class ShouldComponentUpDateEx extends Component{
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
        this.setState({tmp_state2:true});
    }
    shouldComponentUpdate(props,state){
        console.log('5. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2
    }
    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS SHOULDCOMPONENTUPDATE FUNCTION]</h2>
        )
    }
}

export default ShouldComponentUpDateEx;