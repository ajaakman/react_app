import React, { Component } from "react";
import ReactDOM from "react-dom";

const Hello = () => <p>Hello</p>;
const Goodbye = () => <p>Goodbye</p>;

class Text extends Component {
  state = {
    myText: "Hello World"
  };

  toggleText = () => {
    this.setState({
      myText: this.state.myText === "Hello World" ? "Bye" : "Hello World"
    });
  };

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  render() {
    return <h1>{this.state.myText}</h1>;
  }
}

class Main extends Component {
  state = {
    buttonPressed: true,
    timesClicked: 0,
    myText: <Text onRef={ref => (this.child = ref)} />
  };

  toggleButton = () => {
    this.setState(prevState => ({
      buttonPressed: !prevState.buttonPressed
    }));
    this.setState({ timesClicked: this.state.timesClicked + 1 });
    this.child.toggleText();
  };

  render() {
    return (
      <div>
        {this.state.timesClicked === 0 && "Begin"}
        {this.state.myText}
        <button onClick={this.toggleButton}>Click Me</button>
        {this.state.buttonPressed ? <Hello /> : <Goodbye />}
        {this.state.timesClicked}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
