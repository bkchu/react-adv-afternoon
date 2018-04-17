import React from "react";

const withPeople = WrappedComponent => {
  return class extends React.Component {
    render() {
      const listOfPeople = [
        {
          name: {
            first: "Kaufman",
            last: "Frazier"
          }
        },
        {
          name: {
            first: "Lydia",
            last: "Nash"
          }
        },
        {
          name: {
            first: "Ann",
            last: "Hahn"
          }
        },
        {
          name: {
            first: "Morse",
            last: "Melton"
          }
        },
        {
          name: {
            first: "Camille",
            last: "Mcdaniel"
          }
        },
        {
          name: {
            first: "Harris",
            last: "Hale"
          }
        },
        {
          name: {
            first: "Casey",
            last: "Davenport"
          }
        }
      ];
      return <WrappedComponent {...this.props} people={listOfPeople} />;
    }
  };
};

export default withPeople;
