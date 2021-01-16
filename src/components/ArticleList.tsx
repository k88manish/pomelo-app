import { List } from "antd";
import React, { useEffect, useState } from "react";
import FallBack_THUMBNAIL from "../nytimes-logo.png";

export default function ArticleList() {
  const [articles, setArticles] = useState<any[] | undefined>(undefined);
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=TnydJyKOpuvAhSpWPgWWLXUHqS0M6zqO"
    ).then(async (res) => {
      const json = await res.json();
      setArticles(json.response.docs);
    });
  }, []);

  if (articles === undefined) {
    return <div>Loading...</div>;
  }

  const listData = articles.map((article) => ({
    id: article._id,
    title: article.headline.main,
    thumbnail: article.multimedia.find(
      (media: any) => media.type === "image" && media.subType === "thumbLarge"
    )?.url,
    description: article.abstract,
    content: article.lead_paragraph,
  }));

  for (let i = 0; i < articles.length; i++) {
    listData.push();
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      split
      renderItem={(item) => (
        <List.Item
          key={item.id}
          extra={
            <img
              width={150}
              alt="logo"
              src={
                item.thumbnail
                  ? `https://www.nytimes.com/${item.thumbnail}`
                  : FallBack_THUMBNAIL
              }
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
