import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [{ username: "Fed" }, { username: "Dev" }],
  };
  usernameChangedHandler = (event) => {
    this.setState({
      users: [{ username: event.target.value }, { username: "Dev" }],
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentValue={this.state.users[0].username}
        />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;
