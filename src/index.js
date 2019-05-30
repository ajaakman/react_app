import React, { Component} from 'react';
import ReactDOM from 'react-dom';
//import Library from './Library';

const Hello = () => 
    <div>
        <p>Hello</p>
    </div>

const Goodbye = () => 
    <div>
        <p>Goodbye</p>
    </div>

class Main extends Component {  
    
    state = {
        buttonPressed: true, 
        timesClicked: 0
    }

    toggleButton = () => {
        this.setState(prevState => ({
            buttonPressed: !prevState.buttonPressed            
        }))
        this.state.timesClicked += 1
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleButton}>Click Me</button>
                {this.state.buttonPressed ? <Hello /> : <Goodbye />}
                {this.state.timesClicked}
            </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
)