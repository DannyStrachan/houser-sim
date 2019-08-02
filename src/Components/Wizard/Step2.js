import React, { Component } from "react";
import { Link } from 'react-router-dom';
import store, { UPDATE_IMAGE } from './../../store'
import "./Wizard.css";

export default class Wizard extends Component {
  constructor () {
    const reduxState = store.getState()
      super()
      this.state = {
          image: reduxState.image
      }

  }

  componentDidMount() {
    store.subscribe(() => {
      store.getState()
    })
  }


  clearEntries = () => {
    this.setState({
        image: ''
    });
    console.log(`state after clear: ${this.state}`);
  };

  updateImage = image => {
    this.setState({
      image
    });
    console.log(`image in state: ${this.state.image}`);
  };

  saveInputs = () => {
    const { image } = this.state
    store.dispatch({
      type: UPDATE_IMAGE,
      payload: image
    })
  }

  render() {
      let { image } = this.state
    return (
      <div className="step1-parent">
        <div className="form">
                <div className="name-address">
                    <h3>Image:</h3>
                    <input type="text" value={image} onChange={e => this.updateImage(e.target.value)} />
                </div>
        </div>
        <div className="form-buttons">
        <Link to="/wizard/Step1"><button className='nav-button' onClick={() => this.saveInputs()} >Previous Step</button></Link>
        <Link to="/wizard/Step3"><button className='nav-button' onClick={() => this.saveInputs()} >Next Step</button></Link>
        </div>
      </div>
    );
  }
}
