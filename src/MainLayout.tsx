import "./MainLayout.css";

import { Menu } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import ArticlesByTime from "./ArticlesByTime";
import ArticlesByCategory from "./ArticlesByCategory";
import ArticlesBySearch from "./ArticlesBySearch";
import ArticleDetail from "./ArticleDetail";
import TopHeader from "./components/TopHeader";

export default function MainLayout() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>("1");
  return (
    <Router>
      <Layout className="layout">
        <TopHeader
          setSearchText={(value) => {
            setSearchText(value || "");
            setSelectedMenu(!value ? "1" : undefined);
          }}
        />
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
                  setSearchText("");
                }
              }}
            >
              <SubMenu key="sub1" title="Most viewed">
                <Menu.Item key="1">
                  <Link to="/period">By time</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/category">By category</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Redirect exact from="/" to="period" />
              <Route path="/period">
                <ArticlesByTime />
              </Route>
              <Route path="/category">
                <ArticlesByCategory />
              </Route>
              <Route path="/search">
                <ArticlesBySearch searchText={searchText} />
              </Route>
              <Route path="/detail">
                <ArticleDetail />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>Manish Kumar ©2021</Footer>
      </Layout>
    </Router>
  );
}
