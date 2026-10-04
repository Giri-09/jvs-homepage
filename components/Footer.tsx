import { contactInfo, footer, siteInfo } from "@/data/homepage";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.columns}>
        <div className={styles.brand}>
          <span className={styles.logo}>{siteInfo.logoText}</span>
          <p className={styles.about}>{footer.about}</p>
        </div>

        <div className={styles.column}>
          <b>Explore</b>
          {footer.exploreLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.column}>
          <b>Instagram</b>
          {footer.socialHandles.map((social) => (
            <a key={social.handle} href={social.url} target="_blank" rel="noopener">
              @{social.handle}
            </a>
          ))}
        </div>

        <div className={`${styles.column} ${styles.contactColumn}`}>
          <b>Reach us</b>
          <a href={contactInfo.phoneLink}>{contactInfo.phone}</a>
          <a href={contactInfo.emailLink} className={styles.email}>
            {contactInfo.email}
          </a>
          <span>{contactInfo.address}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {siteInfo.copyrightYear} {siteInfo.companyName}
        </span>
        <a href={contactInfo.websiteLink} target="_blank" rel="noopener">
          {contactInfo.website}
        </a>
      </div>
    </footer>
  );
}
