import "./MainLayout.css";

import { Image, Menu } from "antd";
import Layout, { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import ArticlesByTime from "./ArticlesByTime";
import ArticlesByCategory from "./ArticlesByCategory";

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
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" title="Most viewed">
              <Menu.Item key="1">By time</Menu.Item>
              <Menu.Item key="2">By category</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          {/* <ArticlesByTime /> */}
          <ArticlesByCategory />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Manish Kumar ©2021</Footer>
    </Layout>
  );
}
