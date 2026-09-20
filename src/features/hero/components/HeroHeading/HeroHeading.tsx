import styles from './HeroHeading.module.css';

export function HeroHeading() {
  return (
    <>
      <h1 className={styles.heading}>
        <span>A better way to</span>
        <span className={styles.highlight}>ship web apps</span>
      </h1>
      <p className={styles.bodyCopy}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
    </>
  );
}
