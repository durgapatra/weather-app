import React from "react";
import "./index.scss";
import { Form, Icon, Input, Button, Card, message } from "antd";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        let userData = JSON.parse(localStorage.getItem("userData")) || {};
        if (
          values.email === userData.email &&
          values.password === userData.password
        ) {
          localStorage.setItem(
            "sessionToken",
            "mydemotokeneyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZWMyL"
          );
          this.props.history.push("/dashboard");
        } else {
          message.error("Invalid Username or Password!");
        }
      }
    });
  };

  render() {
    const props = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="login-page">
          <Card className="center-box-content">
            <Form
              className="login-form"
              onSubmit={e => this.handleSubmit(e, props.form)}
            >
              <FormItem>
                <h2>Login</h2>
              </FormItem>
              <FormItem label="Email">
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(<Input placeholder="Enter email." />)}
              </FormItem>
              <FormItem label="Password">
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input.Password placeholder="Password" />)}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </FormItem>
              <div className="extra-link">
                <FormItem></FormItem>
                <FormItem>
                  <Link to="/register" style={{ textDecoration: "Underline" }}>
                    Register <Icon type="arrow-right" />
                  </Link>
                </FormItem>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Form.create()(withRouter(NormalLoginForm));
