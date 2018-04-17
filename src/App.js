import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import List from "./components/List/List";

class App extends Component {
  render() {
    let buttonStyles = {
      primary: {
        color: "#fff",
        backgroundColor: "#1890ff",
        border: "1px solid #1890ff"
      },
      default: {
        color: "rgba(0,0,0,0.65)",
        backgroundColor: "#fff",
        border: "1px solid #d9d9d9"
      },
      dashed: {
        color: "rgba(0,0,0,0.65)",
        backgroundColor: "#fff",
        border: "1px dashed #d9d9d9"
      },
      danger: {
        color: "#f5222d",
        backgroundColor: "#f5f5f5",
        border: "1px solid #d9d9d9"
      }
    };

    return (
      <div className="App">
        <br />
        <Button styles={buttonStyles.primary}>Primary</Button>
        <Button styles={buttonStyles.default}>Default</Button>
        <Button styles={buttonStyles.dashed}>Dashed</Button>
        <Button styles={buttonStyles.danger}>Danger</Button>
        <List />
      </div>
    );
  }
}

export default App;
