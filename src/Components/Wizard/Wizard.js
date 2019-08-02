import React, { Component } from "react";
import { Link, Route, Switch, HashRouter } from "react-router-dom";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import store, { CANCEL } from './../../store'
import "./Wizard.css";

export default class Wizard extends Component {
  
  cancel = () => {
    store.dispatch({
      type: CANCEL
    })
  }


  render() {
    return (
      <HashRouter>
        <div className="wizard-parent">
          <div className="wizard-header">
            <h1>Add New Listing</h1>
            <Link to="/"><button className="cancel-button" onClick={() => this.cancel()}>Cancel</button></Link>
          </div>
          <br />
          <hr />
          <Switch>
            <Route path="/wizard/step1" component={Step1} />
            <Route path="/wizard/step2" component={Step2} />
            <Route path="/wizard/step3" component={Step3} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
