import { List } from "antd";
import React from "react";
import FallBack_THUMBNAIL from "../nytimes-logo.png";

export default function ArticleList({ articles }: { articles: any[] }) {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={articles}
      split
      renderItem={(item) => (
        <List.Item
          key={item.id}
          onClick={() => {
            console.log("view detail page", item.url);
          }}
          extra={
            <img
              width={150}
              alt="logo"
              src={item.thumbnail || FallBack_THUMBNAIL}
            />
          }
        >
          <List.Item.Meta title={item.title} />
          {item.description}
        </List.Item>
      )}
    />
  );
}
