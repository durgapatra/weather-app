import React from "react";
import { Card } from "antd";
class UserInfo extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <Card title="User Info" style={{ flex: 1 }}>
        <p>
          Name:
          <span>{name}</span>
        </p>
        <p>
          Email:
          <span>{email}</span>
        </p>

        <p>
          Phone Number:
          <span> {phone}</span>
        </p>
      </Card>
    );
  }
}

export default UserInfo;
