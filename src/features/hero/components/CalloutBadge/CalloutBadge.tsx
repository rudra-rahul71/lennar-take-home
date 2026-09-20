import chevronRight from '../../../../assets/chevron-right.png';
import styles from './CalloutBadge.module.css';

export function CalloutBadge() {
  return (
    <a href="#careers" className={styles.callout}>
      <span className={styles.badge}>WE'RE HIRING</span>
      <span className={styles.linkText}>
        Visit our careers page
        <img
          src={chevronRight}
          alt=""
          className={styles.chevron}
        />
      </span>
    </a>
  );
}
