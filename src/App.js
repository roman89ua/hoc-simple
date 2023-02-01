import React from "react";
import "./App.css";
import CountHeader from "./components/CountHeader";
import CountButton from "./components/CountButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CountHeader name="Roman Kostiuk" />
        <CountButton />
      </div>
    );
  }
}

export default App;
