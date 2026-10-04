import Image from "next/image";
import { hero, placementStages } from "@/data/homepage";
import Icon from "./ui/Icon";
import styles from "./HeroGlance.module.css";

// Decorative bar heights (in %) for the training activity chart
const BAR_HEIGHTS = [
  30, 55, 40, 75, 50, 90, 65, 40, 80, 100, 60, 45, 85, 55, 70, 95, 50, 35, 65, 80, 45, 60, 90, 70, 40, 55, 75,
  50, 85, 60, 40, 70,
];
const HIGHLIGHTED_BARS = 20;

// Where each photo tile sits around the centre card, in tile order
const TILE_POSITIONS = [
  { left: "0%", top: "14%" },
  { left: "76%", top: "10%" },
  { left: "0%", top: "66%" },
  { left: "76%", top: "62%" },
];

export default function HeroGlance() {
  const { trainingCard, partnerBadge, quoteCard, tiles } = hero;

  return (
    <div className={styles.glance} aria-label="JVS at a glance">
      <svg className={styles.lines} viewBox="0 0 100 92" preserveAspectRatio="none" aria-hidden="true">
        <path d="M12 39 C 12 52, 20 56, 30 56" stroke="var(--accent)" />
        <path d="M88 39 C 88 30, 80 26, 69 24" stroke="var(--accent-2)" />
      </svg>

      <div className={styles.trainingCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitleGroup}>
            <span className={styles.cardTitle}>{trainingCard.title}</span>
            <span className={styles.cardSubtitle}>{trainingCard.subtitle}</span>
          </div>
          <span className={styles.moreDots}>···</span>
        </div>

        <div className={styles.bars}>
          {BAR_HEIGHTS.map((height, index) => (
            <span
              key={index}
              className={styles.bar}
              style={{
                height: `${height}%`,
                background: index < HIGHLIGHTED_BARS ? "var(--accent-2)" : "#3a3a46",
                animationDuration: `${0.9 + (index % 5) * 0.18}s`,
                animationDelay: `${index * 0.04}s`,
              }}
            />
          ))}
        </div>

        <div className={styles.dayLabels}>
          <span>{trainingCard.startLabel}</span>
          <span>{trainingCard.endLabel}</span>
        </div>

        <div className={styles.stageList}>
          {placementStages.map((stage) => (
            <div key={stage.name} className={styles.stage}>
              <span className={styles.stageDays}>{stage.days} days</span>
              <span className={styles.stageName}>{stage.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.partnerBadge}>
        <span className={styles.badgeIcon}>
          <Icon name="briefcase" size={13} strokeWidth={2.4} />
        </span>
        <span className={styles.badgeText}>
          <b>{partnerBadge.title}</b>
          <span>{partnerBadge.subtitle}</span>
        </span>
      </div>

      <div className={styles.quoteCard}>
        <Image
          src={quoteCard.image.src}
          alt={quoteCard.image.alt}
          width={34}
          height={34}
          className={styles.quoteAvatar}
        />
        <div className={styles.quoteBody}>
          <div className={styles.quoteTags}>
            <span className={styles.nameTag}>{quoteCard.name}</span>
            <span className={styles.roleTag}>{quoteCard.role}</span>
          </div>
          <p className={styles.quoteText}>{quoteCard.quote}</p>
        </div>
      </div>

      <span className={styles.pulseDot} aria-hidden="true" />

      {tiles.map((tile, index) => (
        <figure
          key={tile.tag}
          className={`${styles.tile} ${index === 0 ? styles.tileRinged : ""}`}
          style={TILE_POSITIONS[index]}
        >
          <Image src={tile.image.src} alt={tile.image.alt} fill sizes="(max-width: 768px) 25vw, 160px" />
          <figcaption className={styles.tileTag}>{tile.tag}</figcaption>
        </figure>
      ))}
    </div>
  );
}
