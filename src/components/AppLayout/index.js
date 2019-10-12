import React from "react";
import { Layout } from "antd";
import "./index.scss";
import Header from "../Header";
const { Content, Footer } = Layout;

const AppLayout = props => {
  return (
    <Layout className="main-layout">
      <Layout>
        <Header {...props} />
        <Content>{props.children}</Content>
        <Footer className="main-footer">
          Powered by -----. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
