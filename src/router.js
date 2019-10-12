import React, { lazy, Suspense } from "react";
// import asyncComponent from 'hoc/asyncRender'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import AuthRoutes from "hoc/private";
import { Spin } from "antd";

const Login = lazy(() => import("modules/Login"));

const Register = lazy(() => import("modules/Register"));

const Dashboard = lazy(() => import("modules/Dashboard"));

const NotFound = lazy(() => import("modules/NotFound"));

const redirect = pathname => () => {
  return <Redirect to={{ pathname }} />;
};

export const Routes = props => {
  return (
    <main>
      <Router>
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100%",
                margin: "auto",
                paddingTop: 50,
                textAlign: "center"
              }}
            >
              <Spin />
            </div>
          }
        >
          <Switch>
            <Route exact path="/login" render={() => <Login {...props} />} />
            <Route
              exact
              path="/register"
              render={() => <Register {...props} />}
            />

            <Route path="/" component={AuthRoutes(ContentRoute)} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
};

const ContentRoute = props => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            paddingTop: 50,
            textAlign: "center"
          }}
        >
          <Spin />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" render={redirect("dashboard")} />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard {...props} />}
        />

        <Route exact path="/*" render={() => <NotFound {...props} />} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
