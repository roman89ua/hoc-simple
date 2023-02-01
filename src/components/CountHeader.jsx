import React, { Component } from "react";
import WithIncrementCount from "./Hocs/withIncrementCount";

class CountHeader extends Component {
  render() {
    const { count, onIncrementCount } = this.props;
    return (
      <h1 onMouseEnter={onIncrementCount}>
        Header hovered {count} time{count > 1 ? "s" : ""}
      </h1>
    );
  }
}
export default WithIncrementCount(CountHeader, 1);
