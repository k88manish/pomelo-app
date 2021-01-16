import "./MainLayout.css";

import { Menu, Breadcrumb, Image } from "antd";
import Layout, { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";

export default function MainLayout() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <Image
            src="https://developer.nytimes.com/files/poweredby_nytimes_30b.png"
            alt="logo"
            preview={false}
          />
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Show Posts here</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Manish Kumar ©2021</Footer>
    </Layout>
  );
}
