import { Dropdown, Menu, PageHeader } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import ArticleList from "./components/ArticleList";
import { DownOutlined } from "@ant-design/icons";

const Categories = {
  home: "Home",
  arts: "Arts",
  automobiles: "Automobile",
  books: "Books",
  business: "Business",
  fashion: "Fashion",
  food: "Food",
  health: "health",
  insider: "insider",
  magazine: "magazine",
  movies: "movies",
  nyregion: "nyregion",
  obituaries: "obituaries",
  opinion: "opinion",
  politics: "politics",
  realestate: "realestate",
  science: "science",
  sports: "sports",
  sundayreview: "sundayreview",
  technology: "technology",
  theater: "theater",
  "t-magazine": "t-magazine",
  travel: "travel",
  upshot: "upshot",
  us: "us",
  world: "world",
};

type CategoryType = keyof typeof Categories;

export default function ArticlesByTime() {
  const [articles, setArticles] = useState<any[] | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    "home"
  );

  useEffect(() => {
    async function fetchArticles() {
      fetch(
        `https://api.nytimes.com/svc/topstories/v2/${selectedCategory}.json?&api-key=TnydJyKOpuvAhSpWPgWWLXUHqS0M6zqO`
      ).then(async (res) => {
        const json = await res.json();
        setArticles(json.results);
      });
    }
    fetchArticles();
  }, [selectedCategory]);

  const articlesToDisplay = useMemo(() => {
    if (!articles) {
      return undefined;
    }
    return articles?.map((article) => ({
      id: article.short_url,
      title: article.title,
      thumbnail: article.multimedia.find(
        (media: any) => media.type === "image" && media.format === "thumbLarge"
      )?.url,
      description: article.abstract,
      content: article.lead_paragraph,
    }));
  }, [articles]);

  const handleTimeRangeChange = () => {
    // setCategory(Number(e.target.value));
  };

  const menu = (
    <Menu
      selectedKeys={[selectedCategory]}
      onClick={({ item, key }) => {
        setSelectedCategory(key as CategoryType);
      }}
    >
      {Object.keys(Categories).map((key) => (
        <Menu.Item key={key}>{Categories[key as CategoryType]}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <PageHeader
        title={
          <div>
            Most viewed articles in{" "}
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {Categories[selectedCategory]} <DownOutlined />
              </a>
            </Dropdown>
          </div>
        }
        ghost={false}
      ></PageHeader>
      {articlesToDisplay && <ArticleList articles={articlesToDisplay} />}
    </div>
  );
}
