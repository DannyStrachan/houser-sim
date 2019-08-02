import React from "react";
import routes from './routes'
import Header from "./Components/Header/Header";
import { HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="page">{routes}</div>
      </div>
    </HashRouter>
  );
}

export default App;
