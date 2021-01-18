import { List } from "antd";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SelectedArticleContext } from "../contexts/SelectedArticleContext";
import FallBack_THUMBNAIL from "../nytimes-logo.png";

export default function ArticleList({ articles }: { articles: any[] }) {
  const { setSelectedArticle } = useContext(SelectedArticleContext);
  const history = useHistory();
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
            setSelectedArticle(item);
            history.push("/detail");
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
