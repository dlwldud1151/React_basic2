import React, {Component} from 'react';

class FetchPost extends Component{
    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:{a:"react", b:200}
        });
        const body = await response.json();
        alert(body.date)
    }

    render(){
        return(
            <h3>POST 요청해보기</h3>
        )
    }
}

export default FetchPost;