import heroIllustration from '../../../../assets/hero.png';
import { CalloutBadge } from '../CalloutBadge/CalloutBadge';
import { HeroForm } from '../HeroForm/HeroForm';
import { HeroHeading } from '../HeroHeading/HeroHeading';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.layout}>
        {/* Left Column: Content */}
        <div className={styles.contentColumn}>
          <CalloutBadge />
          <HeroHeading />
          <HeroForm />
        </div>

        {/* Right Column: Illustration */}
        <div className={styles.illustrationColumn}>
          <img
            src={heroIllustration}
            alt=""
            className={styles.illustrationImage}
            width="1251"
            height="1248"
          />
        </div>
      </div>
    </section>
  );
}
