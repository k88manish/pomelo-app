import { PageHeader, Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import React, { useEffect, useMemo, useState } from "react";
import ArticleList from "./components/ArticleList";

export default function ArticlesByTime() {
  const [timePeriod, setTimePeriod] = useState(1);
  const [articles, setArticles] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    async function fetchArticles() {
      fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/${timePeriod}.json?&api-key=TnydJyKOpuvAhSpWPgWWLXUHqS0M6zqO`
      ).then(async (res) => {
        const json = await res.json();
        setArticles(json.results);
      });
    }
    fetchArticles();
  }, [timePeriod]);

  const articlesToDisplay = useMemo(() => {
    if (!articles) {
      return undefined;
    }
    return articles?.map((article) => ({
      id: article.id,
      title: article.title,
      description: article.abstract,
      thumbnail: article.media.find(
        (item: { type: string; subType: string }) =>
          item.type === "image" && item.subType === "photo"
      )?.["media-metadata"][0].url,
    }));
  }, [articles]);

  const handleTimeRangeChange = (e: RadioChangeEvent) => {
    setTimePeriod(Number(e.target.value));
  };

  return (
    <div>
      <PageHeader
        title="Most viewed articles in last"
        ghost={false}
        extra={[
          <Radio.Group value={timePeriod} onChange={handleTimeRangeChange}>
            <Radio.Button value={1}>1 day</Radio.Button>
            <Radio.Button value={7}>7 days</Radio.Button>
            <Radio.Button value={30}>30 days</Radio.Button>
          </Radio.Group>,
        ]}
      ></PageHeader>
      {articlesToDisplay && <ArticleList articles={articlesToDisplay} />}
    </div>
  );
}
