import "./MainLayout.css";

import { Image, Input, Menu, Space } from "antd";
import Layout, { Header, Content, Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import ArticlesByTime from "./ArticlesByTime";
import ArticlesByCategory from "./ArticlesByCategory";
import ArticlesBySearch from "./ArticlesBySearch";

export default function MainLayout() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>("1");

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
        <div className="space-align-container">
          <div className="space-align-block">
            <Space align="center">
              .
              <Input.Search
                placeholder="Search articles..."
                className="article-search-input"
                onSearch={(value) => {
                  setSelectedMenu(!value ? "1" : undefined);
                  setSearchText(value);
                }}
              />
            </Space>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          className="site-layout-background"
          breakpoint="xs"
          collapsedWidth="0"
        >
          <Menu
            mode="inline"
            defaultOpenKeys={["sub1"]}
            selectedKeys={selectedMenu ? [selectedMenu] : undefined}
            style={{ height: "100%", borderRight: 0 }}
            onSelect={({ item, key }) => {
              if (key) {
                setSelectedMenu(key.toString());
              }
            }}
          >
            <SubMenu key="sub1" title="Most viewed">
              <Menu.Item key="1">By time</Menu.Item>
              <Menu.Item key="2">By category</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          {selectedMenu === "1" && !searchText && <ArticlesByTime />}
          {selectedMenu === "2" && !searchText && <ArticlesByCategory />}
          {searchText && <ArticlesBySearch searchText={searchText} />}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Manish Kumar ©2021</Footer>
    </Layout>
  );
}
