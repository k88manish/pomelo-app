import { PageHeader } from "antd";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SelectedArticleContext } from "./contexts/SelectedArticleContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const { selectedArticle } = useContext(SelectedArticleContext);
  return (
    <ArticleDetail url={selectedArticle.url} title={selectedArticle.title} />
  );
}

function ArticleDetail(props: { url: string; title: string }) {
  const history = useHistory();
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Back"
      />
      <iframe src={props.url} title={props.title} width={"100%"} height={800} />
    </div>
  );
}
