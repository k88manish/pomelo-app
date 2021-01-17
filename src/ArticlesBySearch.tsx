import React, { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";

export default function ArticlesBySearch(props: { searchText: string }) {
  const [articles, setArticles] = useState<any[] | undefined>(undefined);
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${props.searchText}&api-key=TnydJyKOpuvAhSpWPgWWLXUHqS0M6zqO`
    ).then(async (res) => {
      const json = await res.json();
      setArticles(json.response.docs);
    });
  }, [props.searchText]);

  if (articles === undefined) {
    return <div>Loading...</div>;
  }

  const listData = articles.map((article) => ({
    id: article._id,
    title: article.headline.main,
    thumbnail:
      "https://www.nytimes.com/" +
      article.multimedia.find(
        (media: any) => media.type === "image" && media.subType === "thumbLarge"
      )?.url,
    description: article.abstract,
    content: article.lead_paragraph,
  }));

  for (let i = 0; i < articles.length; i++) {
    listData.push();
  }

  return <ArticleList articles={listData} />;
}
