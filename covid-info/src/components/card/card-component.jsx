import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="country"
      src={`https://www.countryflagsapi.com/png/${props.country.CountryCode}`}
    />
    <h2> {props.country.Country}</h2>
    <p> New Confirmed: {props.country.NewConfirmed}</p>
    <p> Total Confirmed: {props.country.TotalConfirmed}</p>
    <p> New Deaths: {props.country.NewDeaths}</p>
    <p> Total Deaths: {props.country.TotalDeaths}</p>
    <p> New Recovered: {props.country.NewRecovered}</p>
    <p> Total Recovered: {props.country.TotalRecovered}</p>
    <p> Date: {new Date(props.country.Date).toDateString()}</p>
  </div>
);
