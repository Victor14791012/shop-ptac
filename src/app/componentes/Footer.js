import styles from "./css.module.css";

export default function Macarrao() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <a href="/" className="bi bi-facebook"></a>
        </li>
        <li>
          <a href="/" className="bi bi-instagram"></a>
        </li>
        <li>
          <a href="/" className="bi bi-twitter"></a>
        </li>
        <li>
          <a href="/" className="bi bi-linkedin"></a>
        </li>
      </ul>
      
      <div className="content">
        <p style={{ fontSize: "2rem" }}>
          A nossa empresa é a melhor, gaste seu dinheiro aqui.
        </p>
        <p style={{ fontSize: "1.3rem" }}>Desde 2007</p>
      </div>
      
      <div className={styles.logoFooter}>
        <div className={styles.logoTitle}>
          <h1 className={styles.logoText} style={{ padding: "2rem" }}>vh-tech</h1>
        </div>
      </div>
    </footer>
  );
}
