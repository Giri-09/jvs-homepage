import Image from "next/image";
import { brandsSection } from "@/data/homepage";
import styles from "./Brands.module.css";

export default function Brands() {
  return (
    <section id="brands" className={styles.section}>
      <div className="container section">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="section-label">{brandsSection.label}</span>
            <h2 className="section-title">{brandsSection.title}</h2>
          </div>
          <p className={styles.description}>{brandsSection.description}</p>
        </div>

        <div className={styles.grid}>
          {brandsSection.brands.map((brand) => (
            <a key={brand.name} href={brand.url} target="_blank" rel="noopener" className={styles.card}>
              <div className={styles.imageWrap}>
                <Image src={brand.image.src} alt={brand.image.alt} fill sizes="(max-width: 640px) 100vw, 320px" />
              </div>
              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3 className={styles.name}>{brand.name}</h3>
                  <span className={styles.focus}>{brand.focus}</span>
                </div>
                <div className={styles.items}>
                  {brand.items.map((item) => (
                    <span key={item} className={styles.item}>
                      {item}
                    </span>
                  ))}
                </div>
                <span className={styles.handle}>@{brand.handle} ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
