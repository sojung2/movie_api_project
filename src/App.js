import React from "react";
import "./App.css";
import BoxOffice from "./component/BoxOffice/BoxOffice";
import Slide from "./component/Slider/Slide";

function App() {
  return (
    <div className="App">
      <Slide />
      <BoxOffice />
    </div>
  );
}

export default App;
