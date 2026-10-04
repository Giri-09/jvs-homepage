import { placementSection, placementStages } from "@/data/homepage";
import styles from "./PlacementJourney.module.css";

const STAGE_COLORS = ["var(--accent)", "var(--accent)", "var(--ink)", "var(--accent-2)"];

export default function PlacementJourney() {
  const totalStages = placementStages.length;

  return (
    <section id="placement" className="container section">
      <div className={styles.header}>
        <span className="section-label">{placementSection.label}</span>
        <h2 className="section-title">
          {placementSection.titleStart}{" "}
          <span className="gradient-text">{placementSection.titleHighlight}</span>
          {placementSection.titleEnd}
        </h2>
      </div>

      <div className={styles.body}>
        <div className={styles.timeline} aria-hidden="true">
          {placementStages.map((stage, index) => (
            <span key={stage.name} style={{ flex: stage.days, background: STAGE_COLORS[index] }} />
          ))}
        </div>

        <div className={styles.cards}>
          {placementStages.map((stage, index) => (
            <div key={stage.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{index + 1}</span>
                <span className={styles.stageOf}>
                  Stage {index + 1} of {totalStages}
                </span>
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.days}>
                  {stage.days}
                  <span className={styles.daysUnit}>days</span>
                </span>
                <span className={styles.name}>{stage.name}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>{placementSection.note}</p>
      </div>
    </section>
  );
}
