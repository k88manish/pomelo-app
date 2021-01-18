import "./TopHeader.css";

import { Space, Input, Image } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useHistory } from "react-router-dom";

export default function TopHeader(props: {
  setSearchText: (value: string | undefined) => void;
}) {
  const history = useHistory();

  return (
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
          <Space align="center" className="space-container">
            .
            <Input.Search
              placeholder="Search articles"
              className="article-search-input"
              onSearch={(value) => {
                props.setSearchText(value);
                if (value) {
                  history.push("/search");
                }
              }}
            />
          </Space>
        </div>
      </div>
    </Header>
  );
}
