import React, { Component, useState } from "react";
import CarCard from "./CarCard";
class VehiclesList extends Component {
  render() {
    return (
      <div
        className="row g-0"
        style={{
          flexDirection: "row",
          float: "left",
          display: "flex",
          marginBottom: "60px ",
          marginLeft: "60px ",

          elevation: "1",
          flex: "1",
        }}
      >
        {this.props.data.map((vehicle, key) => {
          return (
            <td>
              {vehicle.deleteFlag === "false" ? (
                <CarCard
                  key={key}
                  data={vehicle}
                  list={this.props.data}
                  flag={this.props.flag}
                ></CarCard>
              ) : null}
            </td>
          );
        })}
      </div>
    );
  }
}

export default VehiclesList;
