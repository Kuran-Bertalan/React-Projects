import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card-component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.covid_data.map((country) => (
        <Card key={country.CountryCode} country={country} />
      ))}
    </div>
  );
};
