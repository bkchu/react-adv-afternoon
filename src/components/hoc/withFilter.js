import React from "react";

const withFilter = Component => {
  return class extends React.Component {
    state = {
      name: "",
      items: [],
      filteredItems: []
    };

    filter = name => {
      let { items } = this.state;
      this.setState({
        filteredItems: items.filter(item =>
          item.name.toLowerCase().includes(name)
        )
      });
    };

    onChangeHandler = e => {
      this.setState({ name: e.target.value });
      this.filter(e.target.value);
    };

    setList = items => {
      this.setState({ items });
    };

    render() {
      return (
        <div>
          <br />
          <input
            value={this.state.name}
            name="name"
            onChange={this.onChangeHandler}
            type="text"
          />
          <Component
            {...this.props}
            filterThis={this.setList}
            list={this.state.filteredItems}
          />
        </div>
      );
    }
  };
};

export default withFilter;
