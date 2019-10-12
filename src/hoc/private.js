import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AppLayout from "components/AppLayout";

export default function Protected(Children) {
  class AuthenticatedComponent extends Component {
    render() {
      return (
        <React.Fragment>
          {localStorage.getItem("sessionToken") ? (
            <AppLayout>
              <Children {...this.props} />
            </AppLayout>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.location }
              }}
            />
          )}
        </React.Fragment>
      );
    }
  }
  return AuthenticatedComponent;
}
