import React from "react";
import WithIncrementCount from "./Hocs/withIncrementCount";

class CountButton extends React.Component {
  render() {
    const { count, onIncrementCount } = this.props;
    return (
      <div>
        <button onClick={onIncrementCount}>
          Clicked {count} time{count > 1 ? "s" : ""}
        </button>
      </div>
    );
  }
}
export default WithIncrementCount(CountButton, 2);
