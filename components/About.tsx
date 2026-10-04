import Image from "next/image";
import { about } from "@/data/homepage";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="container section">
      <div className={styles.grid}>
        <div className={styles.gallery}>
          <div className={`${styles.photo} ${styles.mainPhoto}`}>
            <Image src={about.mainImage.src} alt={about.mainImage.alt} fill sizes="(max-width: 960px) 100vw, 600px" />
          </div>
          <div className={`${styles.photo} ${styles.sidePhoto}`}>
            <Image src={about.sideImage.src} alt={about.sideImage.alt} fill sizes="(max-width: 960px) 50vw, 300px" />
          </div>
          <div className={styles.lettersCard}>
            <span className={styles.lettersTitle}>{about.lettersTitle}</span>
            <div className={styles.letters}>
              {about.letters.map((item) => (
                <div key={item.letter} className={styles.letterRow}>
                  <span className={`gradient-text ${styles.letter}`}>{item.letter}</span>
                  <span className={styles.word}>{item.word}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <span className="section-label">{about.label}</span>
          <h2 className={styles.title}>
            {about.title} <span className="gradient-text">{about.titleHighlight}</span>
          </h2>
          <p className={styles.description}>{about.description}</p>

          <div className={styles.business}>
            <span className={styles.businessLabel}>{about.businessLabel}</span>
            <div className={styles.chips}>
              {about.businessAreas.map((area) => (
                <span key={area} className={styles.chip}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
