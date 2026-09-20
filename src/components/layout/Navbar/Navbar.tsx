import logo from '../../../assets/logo.png';
import menuIcon from '../../../assets/menu.png';
import { NAV_ITEMS } from './Navbar.data';
import styles from './Navbar.module.css';

export function Navbar() {
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
          <button type="button" className={styles.trialButton}>
            Start free trial
          </button>
        </div>

        <button
          type="button"
          className={styles.hamburgerButton}
          aria-label="Open navigation menu"
        >
          <img
            src={menuIcon}
            alt=""
            className={styles.hamburgerIcon}
          />
        </button>
      </div>
    </header>
  );
}
