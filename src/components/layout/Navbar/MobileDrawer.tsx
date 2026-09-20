import logo from '../../../assets/logo.png';
import closeIcon from '../../../assets/close.png';
import { NAV_ITEMS } from './Navbar.data';
import styles from './MobileDrawer.module.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const handleTrialClick = () => {
    onClose();
    const input = document.getElementById('hero-email-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    }
  };

  return (
    <>
      {/* Semi-transparent backdrop overlay (Task 1.3) */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in White Drawer (Task 1.2) */}
      <div
        id="mobile-navigation"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className={styles.drawerHeader}>
          <img src={logo} alt="Logo" className={styles.logo} width="35" height="32" />
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <img src={closeIcon} alt="" className={styles.closeIcon} width="24" height="24" />
          </button>
        </div>

        <nav className={styles.navLinksList} aria-label="Mobile Links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.ctaButton}
          onClick={handleTrialClick}
        >
          Start free trial
        </button>

        <div className={styles.loginRow}>
          <span>Existing customer?</span>
          <a href="#login" className={styles.loginLink} onClick={onClose}>
            Login
          </a>
        </div>
      </div>
    </>
  );
}
