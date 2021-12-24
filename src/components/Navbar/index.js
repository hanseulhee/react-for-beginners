import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.navContainer}>
      <div className={styles.navTopTool}>
        <Link to="/">
          <h5 className={styles.navTopTool__link}>로그인 |</h5>
        </Link>
        <Link to="/">
          <h5 className={styles.navTopTool__link}>이용권 |</h5>
        </Link>
        <Link to="/">
          <h5 className={styles.navTopTool__link}>편성표 |</h5>
        </Link>
        <Link to="/">
          <h5 className={styles.navTopTool__link}>이벤트 |</h5>
        </Link>
        <Link to="/">
          <h5 className={styles.navTopTool__link}>고객센터 |</h5>
        </Link>
        <Link to="/">
          <h5 className={styles.navTopTool__link}>인재채용</h5>
        </Link>
      </div>
      <div className={styles.navBottomTool}>
        <Link to="/">
          <h2 className={styles.navBottomTool__logo}>SVING</h2>
        </Link>
        <div className={styles.navBottomToolCenter}>
          <Link to="/">
            <h2 className={styles.navBottomToolCenter__link}>실시간</h2>
          </Link>
          <Link to="/">
            <h2 className={styles.navBottomToolCenter__link}>TV프로그램</h2>
          </Link>
          <Link to="/">
            <h2 className={styles.navBottomToolCenter__link}>영화</h2>
          </Link>
          <Link to="/">
            <h2 className={styles.navBottomToolCenter__link}>슬빙몰</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
