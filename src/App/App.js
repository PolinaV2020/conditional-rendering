import React from "react";

class App extends React.Component {
  state = {
    isSignedIn: false
  };

  onSignIn = () => {
    setTimeout(() => this.setState({ isSignedIn: true }), 3000);
  };

  render() {
    return (
      <div class="app-wrap">
        {this.state.isSignedIn ? (
          <span className="hello-text">Hello user!</span>
        ) : (
          <button onClick={this.onSignIn} className="sign-in-button">
            Sign In
          </button>
        )}
      </div>
    );
  }
}

export default App;
