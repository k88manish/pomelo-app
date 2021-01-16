import "./MainLayout.css";

import { Image } from "antd";
import Layout, { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import ArticleList from "./components/ArticleList";

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
      <Content style={{ margin: "0 auto", maxWidth: 800 }}>
        <ArticleList />
      </Content>
      <Footer style={{ textAlign: "center" }}>Manish Kumar ©2021</Footer>
    </Layout>
  );
}
