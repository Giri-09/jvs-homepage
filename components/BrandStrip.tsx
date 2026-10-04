import { brandStrip } from "@/data/homepage";
import Icon from "./ui/Icon";
import styles from "./BrandStrip.module.css";

export default function BrandStrip() {
  return (
    <section aria-label="JVS brands" className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.intro}>
          <b>{brandStrip.boldText}</b> {brandStrip.text}
          <a href={brandStrip.link.href} className={styles.introLink}>
            {brandStrip.link.label}
          </a>
        </p>

        <div className={styles.brands}>
          {brandStrip.brands.map((brand) => (
            <a key={brand.name} href={brand.url} target="_blank" rel="noopener" className={styles.brand}>
              <span className={styles.brandIcon}>
                <Icon name={brand.icon} />
              </span>
              {brand.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
