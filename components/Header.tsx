"use client";

import { useState } from "react";
import { contactInfo, navLinks } from "@/data/homepage";
import Logo from "./Logo";
import Icon from "./ui/Icon";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <nav className={styles.nav} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={contactInfo.phoneLink} aria-label="Call JVS" className={styles.iconButton}>
            <Icon name="phone" size={18} strokeWidth={1.8} />
          </a>
          <a
            href={contactInfo.emailLink}
            aria-label="Email JVS"
            className={`${styles.iconButton} ${styles.iconButtonWhite}`}
          >
            <Icon name="mail" size={18} strokeWidth={1.8} />
          </a>
          <button
            type="button"
            className={`${styles.iconButton} ${styles.menuButton}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className={styles.mobileLink}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
