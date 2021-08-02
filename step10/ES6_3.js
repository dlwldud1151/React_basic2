import React, {Component} from 'react';

class ES6_3 extends Component{

    constructor(props){
    super(props);
    this.state={};
    }

    componentDidMount(){
        //javascript Array
        var varArray1 = ['num1', 'num2'];
        var varArray2= ['num3', 'num4'];
        var sumVarArr1 = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        var sumVarArr2 = varArray1.concat(varArray2);
        console.log(`1.sumVarArr1: ${sumVarArr1}
2.sumVarArr2: ${sumVarArr2}`);

        //ES6 Array
        let sumLetArr = [...varArray1, ...varArray2];
        console.log(`3.sumLetArr: ${sumLetArr}`);
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log(`4.sum1:${sum1} / sum2:${sum2} / remain:${remain}`);

        
        var varObj1 = {key1:'val1', key2:'val2'};
        var varObj2 = {key3:'val3', key4:'val4'};
        // javaScript Object
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log(`5.sumVarObj: ${JSON.stringify(sumVarObj)}`);
        // ES6 Object
        let sumLetObj = {...varObj1, ...varObj2};
        console.log(`6.sumVarObj: ${JSON.stringify(sumLetObj)}`);
        var {key1, key3, ...others} = sumLetObj;
        console.log(`7.key1:${key1} / key3:${key3} / others:${JSON.stringify(others)}`);
    }
    
    render(){
        return(
            <h3>[THIS IS ES6 SpreadOperator]</h3>
        )
    }
}

export default ES6_3;