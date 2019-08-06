import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.getListings();
  }

  getListings = () => {
    Axios.get("/api/listings").then(res => {
      this.setState({
        list: res.data
      });
      console.log("getting your listings", res.data);
    });
  };

  deleteListing = id => {
      Axios.delete(`/api/deleteListing/${id}`)
      .then((res) => {this.getListings()})
  }

  render() {
    let propertyListings = this.state.list.map((property, index) => {
      return (
        <div className="property-listing" key={index}>

            <div className="listing-image">
                <img src={property.image} alt="House Imagery" />
            </div>

          <div className="info">

            <div className="property-details">
              <h5>Property Name: {property.name}</h5>
              <h5>Address: {property.address}</h5>
              <h5>City: {property.city}</h5>
              <h5>State: {property.state}</h5>
              <h5>Zip: {property.zip}</h5>
            </div>

            <div className="additional-details">
                <h5>Mortgage: {property.mortgage}</h5>
                <h5>Rent: {property.rent}</h5>
            </div>

            <div className="delete-listing">
                <button onClick={() => this.deleteListing(property.id)}>X</button>
            </div>

          </div>
        </div>
      );
    });
    return (
      <div className="dashboard-parent">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button className="dashboard-button">Add New Property</button>
          </Link>
        </div>
        <br />
        <hr />
        <br />
        <div className="listings">
          <header className="listing-header">Home Listings</header>
          {propertyListings}
        </div>
      </div>
    );
  }
}
