import React from "react";

const withSort = Component => {
  return class extends React.Component {
    state = {
      name: "",
      items: [],
      sortedItems: []
    };

    onAscending = () => {
      console.log(this.state.items);
      this.setState({
        sortedItems: this.state.items.slice().sort((a, b) => {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
      });
    };

    onDescending = () => {
      console.log(this.state.items);
      this.setState({
        sortedItems: this.state.items
          .slice()
          .sort((a, b) => {
            let nameA = a.name.toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          })
          .reverse()
      });
    };

    setList = items => {
      this.setState({ items });
    };

    render() {
      return (
        <div>
          <br />
          <button onClick={this.onAscending}>A->Z</button>
          <button onClick={this.onDescending}>Z->A</button>
          <Component
            {...this.props}
            sortThis={this.setList}
            sortedList={this.state.sortedItems}
          />
        </div>
      );
    }
  };
};

export default withSort;
