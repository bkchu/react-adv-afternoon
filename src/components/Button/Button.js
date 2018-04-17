import React, { Component } from "react";
import PropTypes from "prop-types";
import withIcon from "../hoc/withIcon";

class Button extends Component {
  render() {
    let buttonDefaultStyles = {
      borderRadius: "4px",
      padding: "0 15px",
      lineHeight: "1.5",
      textAlign: "center",
      cursor: "pointer",
      border: "1px solid transparent",
      fontSize: "14px",
      height: "32px"
    };

    return (
      <button
        style={{ ...buttonDefaultStyles, ...this.props.styles }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  styles: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    border: PropTypes.string
  }),
  children: PropTypes.any.isRequired
};

export default withIcon(Button);
