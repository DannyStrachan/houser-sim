import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "./Wizard.css";
import store, { UPDATE_MORTGAGE, UPDATE_RENT, CANCEL } from "../../store";

export default class Wizard extends Component {
  constructor () {
    const reduxState = store.getState()
      super()
      this.state = {
          name: reduxState.name,
          address: reduxState.address,
          city: reduxState.city,
          state: reduxState.state,
          zip: reduxState.zip,
          image: reduxState.image,
          mortgage: reduxState.mortgage,
          rent: reduxState.rent
      }

  }

  componentDidMount() {
    store.subscribe(() => {
      store.getState()
    })
  }

  addListing = () => {
      let { name, address, city, state, zip, image, mortgage, rent } = this.state
    Axios
        .post("/api/addListing", { name, address, city, state, zip, image, mortgage, rent })
        .then(() => this.cancel())
        .catch(() => console.log('Add Listing Failed!'))
        console.log('hit addListing', this.state);
  };

  cancel = () => {
    store.dispatch({
      type: CANCEL
    })
  }

  updateMortgage= mortgage => {
    this.setState({
      mortgage
    });
    console.log(`mortgage in state: ${this.state.mortgage}`);
  };

  updateRent = rent => {
    this.setState({
      rent
    });
    console.log(`rent in state: ${this.state.rent}`);
  };

  saveInputs = () => {
    const { mortgage, rent } = this.state
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: mortgage
    })
    store.dispatch({
      type: UPDATE_RENT,
      payload: rent
    })
  }

  render() {
      let { mortgage, rent } = this.state
    return (
      <div className="wizard-parent">
        <div className="form">
            <div className="name-address">
                <div className="mortgage">
                    <h3>Mortgage:</h3>
                    <input type="integer" value={mortgage} onChange={e => this.updateMortgage(e.target.value)} />
                </div>
                <div className="rent">
                    <h3>Rent:</h3>
                    <input type="integer" value={rent} onChange={e => this.updateRent(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="form-buttons">
        <Link to="/wizard/Step2"><button className='nav-button' onClick={() => this.saveInputs()} >Previous Step</button></Link>
        <Link to="/"><button className='complete-button' onClick={() => this.addListing()} >Complete</button></Link>
        </div>
      </div>
    );
  }
}
