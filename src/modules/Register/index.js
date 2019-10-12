import React from "react";
import { Form, Input, Select, Button, Card, Icon } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const { Option } = Select;

class RegistrationForm extends React.Component {
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        localStorage.setItem("userData", JSON.stringify(values));
        this.props.history.push("/login");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "+91"
    })(
      <Select style={{ width: 70 }}>
        <Option value="+91">+91</Option>
      </Select>
    );

    return (
      <div>
        <div className="register-page">
          <Card className="center-box-content">
            <Form onSubmit={e => this.handleSubmit(e, this.props.form)}>
              <Form.Item>
                <h2>Register</h2>
              </Form.Item>
              <Form.Item label="Name">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Name!"
                    }
                  ]
                })(<Input style={{ width: "100%" }} />)}
              </Form.Item>
              <Form.Item label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Phone Number">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <Form.Item label="Password">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    }
                  ]
                })(<Input.Password />)}
              </Form.Item>

              <div className="extra-link">
                <Form.Item>
                  <Link
                    to="/login"
                    style={{
                      float: "left",
                      color: "#252525",
                      textDecoration: "underline"
                    }}
                  >
                    <Icon type="arrow-left" /> Login
                  </Link>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Form.create()(withRouter(RegistrationForm));
