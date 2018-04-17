import React from "react";

const withIcon = Component => {
  return class extends React.Component {
    render() {
      return <Component {...this.props}>x {this.props.children}</Component>;
    }
  };
};

export default withIcon;
