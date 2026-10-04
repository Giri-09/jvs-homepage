import { siteInfo } from "@/data/homepage";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <a href="#top" aria-label={`${siteInfo.name} home`} className={styles.logo}>
      <span className={styles.mark}>
        {siteInfo.logoText}
        <span className={styles.dot} />
      </span>
      <span className={styles.text}>
        <span className={styles.name}>{siteInfo.name}</span>
        <span className={styles.tagline}>{siteInfo.tagline}</span>
      </span>
    </a>
  );
}
