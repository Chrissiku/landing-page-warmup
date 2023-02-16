import React from "react";
import SectionTitle from "./SectionTitle";
import services from "../data/services";
import ServiceItem from "./ServiceItem";

const ServiceSection = () => {
  return (
    <div className="py-12">
      <SectionTitle>I can Help you with</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
