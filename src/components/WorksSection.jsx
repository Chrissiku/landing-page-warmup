import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works";

const WorksSection = () => {
  return (
    <div className="py-12">
      <SectionTitle id="works">Projects I have worked on</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {works.map((work, index) => (
          <WorkItem
            key={index}
            imageUrl={work.imageUrl}
            title={work.title}
            tech={work.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
