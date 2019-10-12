import React from "react";
import "./header.scss";
import { withRouter } from "react-router";
import { Layout } from "antd";
const { Header } = Layout;
class MyHeader extends React.Component {
  render() {
    return (
      <Header>
        <div className="header">
          <div
            className="singout"
            onClick={() => {
              localStorage.removeItem("sessionToken");
              localStorage.removeItem("userData");
              this.props.history.push("login");
            }}
          >
            Sign Out
          </div>
        </div>
      </Header>
    );
  }
}
export default withRouter(MyHeader);
