import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    let buttonStyles = {
      // styles: PropTypes.shape({
      //   color: PropTypes.string,
      //   backgroundColor: PropTypes.string,
      //   border: PropTypes.string
      // }),
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Button styles={buttonStyles.primary}>Primary</Button>
        <Button styles={buttonStyles.default}>Default</Button>
        <Button styles={buttonStyles.dashed}>Dashed</Button>
        <Button styles={buttonStyles.danger}>Danger</Button>
      </div>
    );
  }
}

export default App;
