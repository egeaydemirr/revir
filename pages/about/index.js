import Base from "@layouts/Baseof";
import React from "react";
import data from "lib/utils/data.json";

export default function About({ frontmatter }) {
  return (
    <Base>
      <div className="flex h-full flex-col items-center  p-64">
        <h1 className="text-4xl font-bold">{data.about.info.title}</h1>
        <p className="mt-3">{data.about.info.description} </p>
      </div>
    </Base>
  );
}
