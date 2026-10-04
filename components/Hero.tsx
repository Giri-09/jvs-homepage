import { hero } from "@/data/homepage";
import HeroGlance from "./HeroGlance";
import Icon from "./ui/Icon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.wrapper}>
      <div className={`container ${styles.hero}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={`gradient-text ${styles.titleHighlight}`}>{hero.titleHighlight}</span>
            {hero.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.description}>{hero.description}</p>

          <div className={styles.buttons}>
            <span className={styles.ring}>
              <span className={styles.ringInner}>
                <a href={hero.primaryButton.href} className={styles.primaryButton}>
                  <span className={styles.arrowCircle}>
                    <Icon name="arrow" size={14} strokeWidth={2.2} />
                  </span>
                  {hero.primaryButton.label}
                </a>
              </span>
            </span>
            <a href={hero.secondaryButton.href} className={styles.secondaryButton}>
              {hero.secondaryButton.label}
            </a>
          </div>

          <ul className={styles.highlights}>
            {hero.highlights.map((item) => (
              <li key={item}>
                <span className={styles.bullet} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroGlance />
      </div>
    </section>
  );
}
