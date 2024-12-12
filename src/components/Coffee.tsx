import styles from "./Coffee.module.css";

export function Coffee() {
  return (
    <a
      className={styles.buyButton}
      target="_blank"
      href="http://buymeacoffee.com/cbbldtgthr"
    >
      <img
        className={styles.coffeeImage}
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span className={styles.coffeeButtonText}>Buy me a coffee!</span>
    </a>
  );
}
