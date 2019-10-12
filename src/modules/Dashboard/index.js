import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import Weather from "../Weather";
import UserInfo from "../UserInfo";
import "./dashboard.scss";
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
class Dashboard extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    const city = "Ahmedabad";
    const country = "IN";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please input search values..."
      });
    }
  };
  render() {
    return (
      <ContainerLayout>
        <div className="dashboard">
          <UserInfo {...JSON.parse(localStorage.getItem("userData"))} />
          &nbsp;
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </ContainerLayout>
    );
  }
}

export default Dashboard;
