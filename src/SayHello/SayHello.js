import React from "react";
import "./SayHello";

class SayHello extends React.Component {
  state = {
    loading: false,
    greeting: ""
  };

  onLoad = () => {
    setTimeout(() => this.sayHi(), 3000);
    this.setState({ loading: true });
  };

  sayHi = () => {
    this.setState({ greeting: "Hello!", loading: false });
  };

  render() {
    return (
      <div className="say-hello-wrap">
        <button onClick={this.onLoad} className="fill">
          Say hello!
        </button>
        {this.state.loading && <div className="water" />}
        <span className="hello-text">{this.state.greeting}</span>
      </div>
    );
  }
}

export default SayHello;
