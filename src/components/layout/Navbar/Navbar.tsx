import { useState } from 'react';
import logo from '../../../assets/logo.png';
import menuIcon from '../../../assets/menu.png';
import { MobileDrawer } from './MobileDrawer';
import { NAV_ITEMS } from './Navbar.data';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrialClick = () => {
    const input = document.getElementById('hero-email-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.leftSection}>
          <a href="/" className={styles.logoLink} aria-label="Home">
            <img
              src={logo}
              alt="Logo"
              className={styles.logo}
            />
          </a>

          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.actionsGroup}>
          <a href="#login" className={styles.navLink}>
            Log in
          </a>
          <button
            type="button"
            className={styles.trialButton}
            onClick={handleTrialClick}
          >
            Start free trial
          </button>
        </div>

        <button
          type="button"
          className={styles.hamburgerButton}
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
        >
          <img
            src={menuIcon}
            alt=""
            className={styles.hamburgerIcon}
          />
        </button>
      </div>

      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
