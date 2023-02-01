import React from "react";

const WithIncrementCount = (BasicComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    onIncrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };

    render() {
      return (
        <BasicComponent
          count={this.state.count}
          onIncrementCount={this.onIncrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default WithIncrementCount;
