import React from "react";
import { Card } from "antd";
class Weather extends React.Component {
  render() {
    const {
      country = "",
      city = "",
      temperature = "",
      description = "",
      humidity = ""
    } = this.props;
    return (
      <Card title="Weather Info" style={{ flex: 1 }}>
        <p>
          City:
          <span>{city}</span>
        </p>
        <p>
          Country:
          <span>{country}</span>
        </p>

        <p>
          Temperature:
          <span> {temperature}</span>
        </p>

        <p>
          Humidity:
          <span className="weather__value"> {humidity}</span>
        </p>

        {description && (
          <p>
            Conditions:
            <span> {description}</span>
          </p>
        )}

        {this.props.error && (
          <p className="weather__error">{this.props.error}</p>
        )}
      </Card>
    );
  }
}

export default Weather;
