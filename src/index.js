import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
                <h1> I am {this.props.age} years old</h1>                
            </div>
        )
    }
}

ReactDOM.render(
    <Message color="blue" age={27} msg="hello, how are you"/>,
    document.getElementById('root')
)