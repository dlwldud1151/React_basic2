import React, {Component} from 'react';

class ES6_2 extends Component{

    constructor(props){
    super(props);
    this.state={};
    }

    componentDidMount(){
      var varName = 'color';
      console.log(`varName: ${varName}`);
      var varName = 'waltz'; // 'varName' is already defined no-redeclare
      console.log(`varName: ${varName}`);

      let letName = 'color';
      console.log(`letName: ${letName}`);
      // let letName = 'waltz'; 
      // Parsing error: Identifier 'letName' has already been declared
      letName = 'waltz';
      console.log(`letName: ${letName}`);

      const constName = 'color';
      console.log(`constName: ${constName}`);
      // const constName = 'waltz'; 
      // Parsing error: Identifier 'constName' has already been declared
      // constName = 'waltz';
      // Uncaught TypeError: Assignment to constant variable
    }
    
    render(){
        return(
            <h3>[THIS IS ES6 VARIABLE]</h3>
        )
    }
}

export default ES6_2;