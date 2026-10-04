import { quotes } from "@/data/homepage";
import styles from "./Quotes.module.css";

export default function Quotes() {
  return (
    <section aria-label="Perspective" className="container section">
      <div className={styles.grid}>
        {quotes.map((quote) => (
          <figure key={quote.name} className={`${styles.card} ${quote.dark ? styles.dark : styles.light}`}>
            <svg width="34" height="26" viewBox="0 0 34 26" aria-hidden="true" className={styles.mark}>
              <path
                d="M0 26V15C0 6.5 4.6 1.4 13 0l1.5 4C9.8 5.6 7.7 8.3 7.5 12H14v14H0zm19 0V15c0-8.5 4.6-13.6 13-15l1.5 4c-4.7 1.6-6.8 4.3-7 8H33v14H19z"
                fill="currentColor"
              />
            </svg>
            <blockquote className={styles.text}>{quote.text}</blockquote>
            <figcaption className={styles.author}>
              <span className={styles.initials}>{quote.initials}</span>
              <span className={styles.authorText}>
                <b>{quote.name}</b>
                <span>{quote.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
