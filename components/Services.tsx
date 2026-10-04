"use client";

import { useState } from "react";
import { services, servicesSection } from "@/data/homepage";
import { useEnquiry } from "./EnquiryContext";
import ServiceDetail from "./ServiceDetail";
import Icon from "./ui/Icon";
import styles from "./Services.module.css";

const twoDigits = (value: number) => String(value).padStart(2, "0");

export default function Services() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const { addInterest } = useEnquiry();

  const visibleServices = services
    .map((service, index) => ({ ...service, index }))
    .filter((service) => filter === "All" || service.brand === filter);

  const visibleIndexes = visibleServices.map((service) => service.index);
  const currentIndex = visibleIndexes.includes(activeIndex) ? activeIndex : (visibleIndexes[0] ?? 0);

  const changeFilter = (newFilter: string) => {
    setFilter(newFilter);
    const firstMatch = services.findIndex((service) => newFilter === "All" || service.brand === newFilter);
    setActiveIndex(firstMatch);
  };

  const step = (direction: number) => {
    const position = visibleIndexes.indexOf(currentIndex);
    const nextPosition = (position + direction + visibleIndexes.length) % visibleIndexes.length;
    setActiveIndex(visibleIndexes[nextPosition]);
  };

  const detail = (
    <ServiceDetail
      key={currentIndex}
      service={services[currentIndex]}
      number={twoDigits(currentIndex + 1)}
      total={twoDigits(services.length)}
      enquireLabel={servicesSection.enquireLabel}
      onPrev={() => step(-1)}
      onNext={() => step(1)}
      onEnquire={() => addInterest(services[currentIndex].title)}
    />
  );

  return (
    <section id="services" className={styles.section}>
      <div className="container section">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={`section-label ${styles.label}`}>{servicesSection.label}</span>
            <h2 className="section-title">
              {servicesSection.title} <span className="gradient-text">{servicesSection.titleHighlight}</span>
            </h2>
          </div>

          <div role="tablist" aria-label="Filter by brand" className={styles.filters}>
            {servicesSection.filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={item === filter}
                onClick={() => changeFilter(item)}
                className={`${styles.filter} ${item === filter ? styles.filterActive : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.layout}>
          <div role="tablist" aria-label="Services" className={styles.list}>
            {visibleServices.map((service) => {
              const isActive = service.index === currentIndex;
              return (
                <div key={service.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(service.index)}
                    onMouseEnter={() => setActiveIndex(service.index)}
                    className={`${styles.row} ${isActive ? styles.rowActive : ""}`}
                  >
                    <span className={styles.rowNumber}>{twoDigits(service.index + 1)}</span>
                    <span className={styles.rowText}>
                      <span className={styles.rowTitle}>{service.title}</span>
                      <span className={styles.rowTags}>{service.tags.join(" · ")}</span>
                    </span>
                    <span className={styles.rowArrow} aria-hidden="true">
                      <Icon name="arrow" size={14} strokeWidth={2.2} />
                    </span>
                  </button>

                  {isActive && <div className={styles.mobileDetail}>{detail}</div>}
                </div>
              );
            })}
          </div>

          <div role="tabpanel" className={styles.panel}>
            {detail}
          </div>
        </div>
      </div>
    </section>
  );
}
