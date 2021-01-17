import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return <ArticleDetail url={""} title="anyuthign" />;
}

function ArticleDetail(props: { url: string; title: string }) {
  return (
    <div>
      <iframe src={props.url} title={props.title} />
    </div>
  );
}
