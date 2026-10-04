import Image from "next/image";
import type { Service } from "@/data/homepage";
import styles from "./ServiceDetail.module.css";

type ServiceDetailProps = {
  service: Service;
  number: string;
  total: string;
  enquireLabel: string;
  onPrev: () => void;
  onNext: () => void;
  onEnquire: () => void;
};

export default function ServiceDetail(props: ServiceDetailProps) {
  const { service, number, total, enquireLabel, onPrev, onNext, onEnquire } = props;

  return (
    <div className={styles.detail}>
      <div className={styles.imageWrap}>
        <Image src={service.image.src} alt={service.image.alt} fill sizes="(max-width: 960px) 100vw, 640px" />
        <div className={styles.imageFade} />
        <div className={styles.imageBadges}>
          <span className={styles.badge}>
            {number} / {total}
          </span>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            JVS {service.brand}
          </span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>

        <div className={styles.tags}>
          {service.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.description}>{service.description}</p>

        <ul className={styles.items}>
          {service.items.map((item) => (
            <li key={item}>
              <span className={styles.itemDot} />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button type="button" onClick={onPrev} aria-label="Previous service" className={styles.navButton}>
            ←
          </button>
          <button type="button" onClick={onNext} aria-label="Next service" className={styles.navButton}>
            →
          </button>
          <a href="#contact" onClick={onEnquire} className={styles.enquire}>
            {enquireLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
