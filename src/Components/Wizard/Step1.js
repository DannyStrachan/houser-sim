import React, { Component } from "react";
import { Link } from 'react-router-dom';
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from './../../store'
import "./Wizard.css";

export default class Wizard extends Component {
  constructor () {
    const reduxState = store.getState()
      super()
      this.state = {
          name: reduxState.name,
          address: reduxState.address,
          city: reduxState.city,
          state: reduxState.state,
          zip: reduxState.zip
      }

  }

  componentDidMount() {
    store.subscribe(() => {
      store.getState()
    })
  }

  updateName = name => {
    this.setState({
      name
    });
    console.log(`name in state: ${this.state.name}`);
  };

  updateAddress = address => {
    this.setState({
      address
    });
    console.log(`address in state: ${this.state.address}`);
  };

  updateCity = city => {
    this.setState({
      city
    });
    console.log(`city in state: ${this.state.city}`);
  };

  updateState = state => {
    this.setState({
      state
    });
    console.log(`state in state: ${this.state.state}`);
  };

  updateZip = zip => {
    this.setState({
      zip
    });
    console.log(`zip in state: ${this.state.zip}`);
  };

  saveInputs = () => {
    const { name, address, city, state, zip } = this.state
    store.dispatch({
      type: UPDATE_NAME,
      payload: name
    })
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: address
    })
    store.dispatch({
      type: UPDATE_CITY,
      payload: city
    })
    store.dispatch({
      type: UPDATE_STATE,
      payload: state
    })
    store.dispatch({
      type: UPDATE_ZIP,
      payload: zip
    })
  }

  render() {
      let { name, address, city, state, zip } = this.state
    return (
      <div className="wizard-parent">
        <div className="form">
            <div className="name-address">
                <div className="property-name">
                    <h3>Property Name:</h3>
                    <input type="text" value={name} onChange={e => this.updateName(e.target.value)} />
                </div>
                <div className="property-name">
                    <h3>Address:</h3>
                    <input type="text" value={address} onChange={e => this.updateAddress(e.target.value)} />
                </div>
            </div>
            <div className="city-state-zip">
                <div className="property-name">
                    <h3>City:</h3>
                    <input type="text" value={city} onChange={e => this.updateCity(e.target.value)} />
                </div>
                <div className="property-name">
                    <h3>State:</h3>
                    <input type="text" value={state} onChange={e => this.updateState(e.target.value)} />
                </div>
                <div className="property-name">
                    <h3>Zip:</h3>
                    <input type="integer" value={zip} onChange={e => this.updateZip(e.target.value)} />
                </div>
            </div>
        </div> 
        <div className="form1-buttons">
        <Link to="/wizard/Step2"><button className='nav-button' onClick={() => this.saveInputs()} >Next Step</button></Link>
        </div>
      </div>
    );
  }
}
